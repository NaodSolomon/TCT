import { pool } from "../config/db.js";
import bcrypt from "bcrypt";
import crypto from "crypto";

export const register = async (req, res) => {
  const { firstName, lastName, userName, email, password } = req.body;

  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    const id = crypto.randomUUID();

    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert into auth_users
    await client.query(
      `INSERT INTO auth_users (id, email, password_hash)
       VALUES ($1, $2, $3)`,
      [id, email, hashedPassword],
    );

    // Insert into user_profiles
    await client.query(
      `INSERT INTO user_profiles (auth_user_id, first_name, last_name, username)
       VALUES ($1, $2, $3, $4)`,
      [id, firstName, lastName, userName],
    );

    await client.query("COMMIT");

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    await client.query("ROLLBACK");

    // Handle unique constraint errors cleanly
    if (error.code === "23505") {
      if (error.constraint?.includes("email")) {
        return res.status(400).json({ message: "Email already exists" });
      }
      if (error.constraint?.includes("username")) {
        return res.status(400).json({ message: "Username already taken" });
      }
    }

    console.error(error);
    res.status(500).json({ message: "Server error" });
  } finally {
    client.release();
  }
};

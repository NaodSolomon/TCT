import { pool } from "../config/db.js";
import bcrypt from "bcrypt";
import { generateAccessToken } from "../utils/generateToken.js";

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query(
      "SELECT id, password_hash FROM auth_users WHERE email = $1",
      [email],
    );

    if (result.rows.length === 0) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const user = result.rows[0];

    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = generateAccessToken(user.id);

    res.cookie("access_token", token, {
      httpOnly: true,
      secure: false, // TRUE in production
      sameSite: "Lax",
      maxAge: 15 * 60 * 1000,
    });

    res.json({ message: "Logged in successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

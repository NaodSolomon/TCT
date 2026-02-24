const { Pool } = require('pg');

// Minimal connection setup - edit these details for your local PostgreSQL instance
const pool = new Pool({
  user: 'postgres',      // Your PostgreSQL username
  host: 'localhost',     // Database host
  database: 'tct_demo',  // Database name (create this in PostgreSQL first)
  password: 'password',  // Your PostgreSQL password
  port: 5432             // Default PostgreSQL port
});

module.exports = pool;
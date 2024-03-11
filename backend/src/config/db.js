const { Pool } = require("pg");
const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "password",
  database: "vehiculos2",
  port: 5432,
});

module.exports = pool;
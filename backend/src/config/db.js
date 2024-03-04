const { Pool } = require("pg");
const pool = new Pool({
  host: "localhost",
  user: "dark",
  password: "Dark230900.",
  database: "vehiculos",
  port: 5432,
});

module.exports = pool;

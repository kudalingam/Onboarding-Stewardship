// MySQL Connection
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "vtab1",
  multipleStatements: true,
});

module.exports = { connection };

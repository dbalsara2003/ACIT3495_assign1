const express = require("express");
const mysql = require("mysql2");

const app = express();

const con = mysql.createConnection({
    host: "db",
    user: "root",
    port: 3306,
    password: "password",
    database: "video_streaming"
  });
con.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    process.exit(1);
  } else {
    console.log('Connected to the database successfully!');
  }
});

app.listen(5000, () => {
  console.log("Upload service listening on port 5000");
});


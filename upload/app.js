const express = require("express");
const mysql = require("mysql");

const app = express();

var con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
  });
  con.connect(function(err) {
    if (err) {
        console.error(err);}
    else {console.log("Connected!");}
  })
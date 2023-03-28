const express = require("express");
//const mysql = require("mysql2");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/upload.html", (err) => {
    if (err) {
      console.error("Error displaying upload page:", err);
    }
    else {
      console.log("Displaying upload page successfully!");
    }
  });
});

app.listen(5000, () => {
  console.log("Upload service listening on port 5000");
});


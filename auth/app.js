const express = require("express");
const basicAuth = require("basic-auth");

const app = express();
const users = {
  "tamim": "tamim",
  "daryush": "daryush",
  "peter": "peter"
};

const authenticate = (req, res, next) => {
  const user = basicAuth(req);
  if (!user || !users[user.name] || user.pass !== users[user.name]) {
    res.set("WWW-Authenticate", "Basic realm=Authorization Required");
    return res.sendStatus(401);
  }
  next();
};

app.use(authenticate);

app.get("/", (req, res) => {
  res.send("Welcome to the protected page!");
});

app.listen(3000, () => {
  console.log("BasicAuth service listening on port 3000");
});

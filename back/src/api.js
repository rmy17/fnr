const express = require("express");

const app = express.Router();

app.use(express.json());

app.post("/connect", (req, res) => {
  const loginForm = req.body;
  if (loginForm.login !== "admin") {
    res.status(401).end();
    return;
  }
  res.json({
    displayName: loginForm.login,
  });
});

module.exports = app;

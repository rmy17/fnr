const { application } = require("express");
const express = require("express");

const app = express.Router();

app.use(express.json());

app.post("/connect", (req, res) => {
  const loginForm = req.body;
  if (loginForm.login !== "admin") {
    res.status(401).end();
    return;
  }
  req.session.user = {
    displayName: loginForm.login,
  };
  res.json({
    displayName: loginForm.login,
  });
});

app.post("/disconnect", (req, res) => {
  req.session.user = undefined;
  res.status(204).end();
});

app.get("/is-connected", (req, res) => {
  if (req.session.user === undefined) {
    res.status(401).end();
    return;
  }
  res.json(req.session.user);
});

module.exports = app;

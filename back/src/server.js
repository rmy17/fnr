const express = require("express");
const morgan = require("morgan");
const serveIndex = require("serve-index");
const session = require("express-session");
const { createServer } = require("http");
const { crudity } = require("crudity");
const api = require("./api.js");

const app = express();
const port = 3000;
const server = createServer(app);

app.use((req, res, next) => {
  next();
});
app.use(morgan("tiny"));
app.use(
  session({
    secret: "my secret 1234!#",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
app.use((req, res, next) => setTimeout(next, 500));

app.use(
  "/api/articles",
  crudity(server, "articles", {
    pageSize: 100,
  })
);
app.use("/api", api);

app.use(express.static("./public"));
app.use(serveIndex("./public", { icons: true }));

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

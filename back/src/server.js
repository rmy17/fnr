const express = require('express');
const morgan = require('morgan');
const serveIndex = require('serve-index');
const api = require('./api.js');

const app = express()
const port = 3000


app.use((req, res, next) => {
  console.log('req: ', req.url);
  next();
});
app.use(morgan("tiny"));

app.use('/api', api);

app.use(express.static("./public"))
app.use(serveIndex("./public", {icons: true}));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// app.js

const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");

const port = 3000;
// create app instance
const app = express();
app.use(bodyParser.json())

app.use(cors())

// middleware functions
//app.use(koaBody());

// Require the router here
// let books = require("./books.js");

// use the router here
// app.use(books.routes());

app.listen(port, () => {
  console.log(`we are live on ${port}!`)
});

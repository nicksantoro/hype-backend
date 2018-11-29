// app.js

const Koa = require("koa");
const koaBody = require("koa-body");

// create app instance
const app = new Koa();

// middleware functions
//app.use(koaBody());

// Require the router here
let books = require("./books.js");

// use the router here
app.use(books.routes());

app.listen(3000);

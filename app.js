// app.js

const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./src/routes/users")
const eventRoutes = require("./src/routes/events")
const passport = require("./passport").passport
const JwtStrategy = require('passport-jwt')
const sessions = require('express-session')

const knex = require('./queries/db');

const cors = require("cors");

const port = 3000;
// create app instance
const app = express();
app.use(bodyParser.json())
app.use(cors())

app.use(sessions({ secret: "secret" }))

app.use(passport.initialize())
app.use(passport.session())
app.use('/users', userRoutes)

app.use('/events', eventRoutes)


app.listen(port, () => {
  console.log(`we are live on ${port}!`)
});

const User = require('./src/models/users')
const passport = require('passport')
const LocalStrategy = require('passport-local')

async function isLoggedIn(req, res, ext) {

  console.log('Checking if logged in', ctx.state, ctx.state.session)
  if (!await req.isAuthenticated()) {
    return res.status(401).json({
      code: 401,
      message: 'Unauthorized'
    })
  } else
    return next(null);
}


passport.use(new LocalStrategy(
  async function (email, password, done) {
    console.log("we hit our strategy")
    try {
      const user = await User.getUserByEmail(email);
      console.log("user", user)
      if (!user) return done(null, false);
      console.log("no user", user, password)
      if (user.hash_password !== password) return done(null, false);
      console.log("no password")
      done(null, user);
    }
    catch (e) {
      console.log("we hit an error", e)
      done(e);
    }
  }
));

passport.serializeUser(function (user, done) {
  console.log("serialize user", user)
  done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
  console.log("we hit deserialize user", id)
  try {
    const user = await User.findById(id)
    console.log("success", user)
    res.status(200).json(user)
    done(null, user)
  }
  catch (e) {
    done(e);
  };
});

module.exports = {
  passport,
  isLoggedIn
}
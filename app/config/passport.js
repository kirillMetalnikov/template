var LocalStrategy = require('passport-local').Strategy

var User = require('../models/User')

module.exports = passport => {
  passport.serializeUser(function (user, done) {
    done(null, user.id)
  })

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
			done(err, user)
		})
  })

  passport.use('local', new LocalStrategy(
    {passReqToCallback: true},
    (req, login, password, next) => {
      User.findOne({login}, function(err, user) {
        if (err) { return next(err) }
        if (!user) {
          req.authErr = 'email or password failed!'
          return next(null, false)
        }
        if (user.password != password) {
          req.authErr = 'email or password failed!'
          return next(null, false)
        }
        user.password = null // что бы не передавался
        return next(null, user)
      });
    }));
}

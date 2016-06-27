const Authentication = require('./controllers/authentication'),
  passportService = require('./services/passport')
  passport = require('passport')

const requireAuth = passport.authenticate('jwt', {session: false})
const requireSignin = passport.authenticate('local', {session: false})

module.exports = function(app) {
  app.post('/signup', Authentication.signup)
  app.post('/signin', requireSignin, Authentication.signin)
}

const passport = require('passport')
const passportJWT = require('passport-jwt')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

const jwtSecret = 'SECRET!'
const jwtAlgorithm = 'HS256'

function rolesForUser(user) {
  let roles = []
  // insert email conditions here
}

function signTokenHandler(req, res) {
  const user = req.user
  const token = jwt.sign(
    { // The payload: any additional information we want signed
      email: user.email,
      roles = rolesForUser(user)
    },
    jwtSecret, // The secret used to sign with
    {
      algorithm: jwtAlgorithm,
      subject: user._id.toString(), // The ID of our user
      expiresIn: '10h' // Expires in 10 hours
    }
  )
  res.json({ token })
}

// Logging in with username/password
passport.use(
  User.createStrategy()
)

// JWT
passport.use(
  new passportJWT.Strategy(
    {
      secretOrKey: jwtSecret,
      algorithms: [jwtAlgorithm],
      jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeader()
    },
    (jwtPayload, done) => {
      const userID = jwtPayload.sub
      User.findById(userID)
        .then(user => {
          if (user) {
            done(null, {
              _id: user.id,
              email: user.email,
              roles: jwtPayload.roles
            })
          }
          else {
            done(null, false)
          }
        })
        .catch(error => {
          done(new Error(`User not found with ID: ${userID}`), false)
        })
    }
  )
)

const ensureRole = (role) => (req,res,next) => {
  const user = req.user
  const roles = user.roles
  if (roles.indexOf(role) === -1) {
    let error = new Error(`User must have role ${role}`)
    error.status = 401 //Unauthorized
    next(error)
    return
  }
  next()
}

function registerMiddleware(req, res, next) {
  const user = new User({ email: req.body.email })
  User.register(user, req.body.password, (error) => {
    if (error) {
      console.log(error)
      next(error)
      return
    }
    req.user = user
    next()
  })
}

module.exports = {
  signTokenHandler,
  authenticateSignIn: passport.authenticate('local', { session: false }),
  authenticateJWT: passport.authenticate('jwt', { session: false }),
  initialize: passport.initialize(),
  register: registerMiddleware,
  ensureRole
}

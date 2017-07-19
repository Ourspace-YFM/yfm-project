const express = require('express')
const passport = require('passport')
const authMiddleware = require('../middleware/auth')

const router = express.Router()

router
.route('/')
// Get logged in user’s details
.get(authMiddleware.authenticateJWT, (req, res) => {
  if (req.user) {
    res.json({ user: req.user })
  }
  else {
    res.status(401).json({ error: 'Please sign in' })
  }
})

// Sign in
.post(authMiddleware.authenticateSignIn, authMiddleware.signTokenHandler)

// Register
router.post('/register', authMiddleware.register, authMiddleware.signTokenHandler)

module.exports = router

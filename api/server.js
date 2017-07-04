const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const authMiddleware = require('./middleware/auth')

const authRouter = require('./routes/auth')
const profilesRouter = require('./routes/profiles')

// Create server
const server = express()

// Middleware
server.use(bodyParser.json())
server.use(cors())
server.use(authMiddleware.initialize)

// Routes
server.use('/auth',authRouter)
server.use('/api',authMiddleware.authenticateJWT, profilesRouter)

// Handle errors by returning JSON
server.use((error, req, res, next) => {
  const status = error.status || 500
  res.status(status).json({
    error: { message: error.message }
  })
})

// Start server at localhost:7000
const port = 7000
server.listen(port, () => {
    console.log(`Started at localhost:${port}`)
})

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const authMiddleware = require('./middleware/auth')

const authRouter = require('./routes/auth')
const bookingsRouter = require('./routes/bookings')
const companiesRouter = require('./routes/companies')
const jobsRouter = require('./routes/jobs')
const profilesRouter = require('./routes/profiles')
const tasksRouter = require('./routes/tasks')
const projectsRouter = require('./routes/projects')
const locationsRouter = require('./routes/locations')

const Seed = require('./db/seeds')

// Create server
const server = express()

// Middleware
server.use(bodyParser.json())
server.use(cors())

server.get('/setup', (req,res)=> {
  Seed.fill()
  res.json({message: 'hi'})
})


// Routes
server.use(authRouter)
server.use(bookingsRouter)
server.use(companiesRouter)
server.use(jobsRouter)
server.use(profilesRouter)
server.use(tasksRouter)
server.use(projectsRouter)
server.use(locationsRouter)

server.use('/auth',authRouter)
server.use(authMiddleware.initialize)

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

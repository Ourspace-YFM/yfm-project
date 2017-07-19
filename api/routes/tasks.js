const express = require('express')
const router = express.Router()
const Task = require('../models/task')
const Booking = require('../models/booking')
router
.route('/tasks')
.get((req, res) => {
  Task.find()
  .then((tasks)=>{
    res.json(tasks)
  })
})
router
.route('/tasks/:id')
.get((req, res) => {
  let id = req.params.id
  getTask = () => (Task.findById(id)
  .populate('parentJob')
  .populate('completedBy'))
  getBookingOfTasks = () => (Booking.find({parentJob: id}))
  Promise.all([
    getTask(),
    getBookingOfTasks()
  ])
  .then(([task,bookings])=>{
    res.json({task: task,bookings: bookings})
  })
  .catch(error=>{
    res.json({error: error.message})
  })
})
module.exports = router
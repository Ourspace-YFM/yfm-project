const express = require('express')
const router = express.Router()
const Booking = require('../models/booking')
const Task = require('../models/task')

router
.route('/bookings')
.get((req, res) => {
  Booking.find()
  .populate('installerId')
  .populate('locationId')
  .then((bookings)=>{
    res.json(bookings)
  })
})

router
.route('/bookings/:id')
.get((req, res) => {
  let id = req.params.id
  getBooking = () => (Booking.findById(id)
  .populate('taskId'))
  Promise.all([
    getBooking()
  ])
  .then(([booking]) => {
    res.json(booking)
  })
  .catch(error=>{
    res.json({ error: error.message })
  })
})

module.exports = router

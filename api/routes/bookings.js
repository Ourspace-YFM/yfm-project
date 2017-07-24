const express = require('express')
const router = express.Router()
const Booking = require('../models/booking')
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
  const id = req.params.id
  Booking.findById(id)
  .then((booking)=>{
    res.json(booking)
  })
})

module.exports = router

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

module.exports = router

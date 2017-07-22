const express = require('express')
const router = express.Router()
const Booking = require('../models/booking')
router
.route('/bookings')
.get((req, res) => {
  Booking.find()
  .then((bookings)=>{
    res.json(bookings)
  })
})

module.exports = router

const express = require('express')
const router = express.Router()
const Booking = require('../models/booking')

router
.route('/bookings')
.get((req, res) => {
    Booking.find()
        .then(bookings => {
            res.json(bookings)
        })
        .catch(error => {
            res.json({ error })
        })
})
.post((req, res) => {
    const newBooking = req.body
    Booking.create(newBooking)
        .then(booking => {
            res.json(booking)
        })
        .catch(error => {
            res.json({ error })
        })
})

module.exports = router

const express = require('express')
const router = express.Router()
const Location = require('../models/location')
router
.route('/locations')
.get((req, res) => {
  Location.find()
  .then((locations)=>{
    res.json(locations)
  })
})
router
.route('/locations/:id')
.get((req, res) => {
  const id = req.params.id
  Location.findById(id)
  .then((location)=>{
    res.json(location)
  })
})

module.exports = router

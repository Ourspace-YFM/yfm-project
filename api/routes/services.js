const express = require('express')
const router = express.Router()
const Service = require('../models/service')
router
.route('/services')
.get((req, res) => {
  Service.find()
  .then((services)=>{
    res.json(services)
  })
})

module.exports = router

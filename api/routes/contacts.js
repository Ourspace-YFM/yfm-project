const express = require('express')
const router = express.Router()
const Contact = require('../models/contact')
router
.route('/contacts')
.get((req, res) => {
  contact.find()
  .then((contacts)=>{
    res.json(contacts)
  })
})

module.exports = router

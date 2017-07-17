const express = require('express')
const router = express.Router()
const Job = require('../models/job')
router
.route('/jobs')
.get((req, res) => {
  let id = req.params.id
  Job.find()
  .then((jobs)=>{
    res.json(jobs)
  })
})
router
.route('/job/:id')
.get((req, res) => {
  let id = req.params.id
  Project.findById(id)
  .then((project)=>{
    res.json(project)
  })
})
module.exports = router

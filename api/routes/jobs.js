const express = require('express')
const router = express.Router()
const Job = require('../models/job')
const Task = require('../models/task')
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
.route('/jobs/:id')
.get((req, res) => {
  let id = req.params.id
  let project = null
  getJob = () => (Job.findById(id)
  .populate('parentProject')
  .populate('owner'))
  getTasksOfJob = () => (Task.find({parentJob: id}))
  Promise.all([
    getJob(),
    getTasksOfJob()
  ])
  .then(([jobs,tasks])=>{
    res.json({job: jobs,tasks: tasks})
  })
  .catch(error=>{
    res.json({error: error.message})
  })
})
module.exports = router

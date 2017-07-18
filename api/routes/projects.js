const express = require('express')
const router = express.Router()
const Project = require('../models/project')
const Job = require('../models/job')
router
.route('/projects')
.get((req, res) => {
  Project.find().populate('clientId')
  .then((projects)=>{
    res.json(projects)
  })
})
router
.route('/projects/:id')
.get((req, res) => {
  let id = req.params.id
  let project = null
  getProject = () => (Project.findById(id).populate('clientId'))
  getJobsOfProject = () => (Job.find({parentProject: id}))
  Promise.all([
    getProject(),
    getJobsOfProject()
  ])
  .then(([project,jobs])=>{
    res.json({project: project,jobs: jobs})
  })
  .catch(error=>{
    res.json({error: error.message})
  })
})
module.exports = router

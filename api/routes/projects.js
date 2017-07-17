const express = require('express')
const router = express.Router()
const Project = require('../models/project')
const Company = require('../models/company')
const Job = require('../models/job')
router
.route('/projects')
.get((req, res) => {
    Project.find().populate('clientId')
        .then(projects => {
            res.json(projects)
        })
        .catch(error => {
            res.json({ error })
        })
})
.post((req, res) => {
    const newProject = req.body
    Project.create(newProject)
        .then(project => {
            res.json(project)
        })
        .catch(error => {
            res.json({ error })
        })
})
router
.route('/project/:id')
.get((req, res) => {
  let id = req.params.id
  let jobs = null
  // why isnt this working
  Project.find({_id: '596634c0b925e80783c7721e'})
    .then(project =>{

      res.json(project)
      foundProject = project
      Job.find({ownerId: id}).populate('ownerId')
    })
  Job.find({owner: id})
  .then(foundJobs =>{
    jobs = foundJobs
  })
    .catch(error => {
        res.json({ error })
    })
})
module.exports = router

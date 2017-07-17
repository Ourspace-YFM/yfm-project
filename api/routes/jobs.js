const express = require('express')
const router = express.Router()
const Job = require('../models/job')

router
.route('/jobs')
.get((req, res) => {
    Job.find()
      .then(jobs => {
        console.log('nkbkhbhbjb')
          res.json(jobs)
      })
      .catch(error => {
          res.json({ error })
      })
})
.post((req, res) => {
    const newJob = req.body
    Job.create(newJob)
        .then(project => {
            res.json(project)
        })
        .catch(error => {
            res.json({ error })
        })
})

module.exports = router

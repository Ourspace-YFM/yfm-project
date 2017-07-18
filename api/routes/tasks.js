const express = require('express')
const router = express.Router()
const Task = require('../models/task')
router
.route('/tasks')
.get((req, res) => {
  Task.find()
  .then((tasks)=>{
    res.json(tasks)
  })
})
module.exports = router

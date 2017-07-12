const express = require('express')
const router = express.Router()
const Project = require('../models/project')
const Company = require('../models/company')
router
.route('/projects')
.get((req, res) => {
  let uniqueClients = []
  Project.distinct('clientId')
  .then(uniqueClientsIds => {
      console.log(uniqueClientsIds)
      return Company.find({'_id': {$in: [ '596634c0b925e80783c7721d', '596634c0b925e80783c7721e' ]}})
    })
    .then((companies)=>{
      uniqueClients = companies
      return Project.find()
    })
    .then(projects => {
      let sortedProjects = uniqueClients.map((client)=>{
        let projectsWithClient = []
        projects.forEach((project)=> {
          if(project.clientId.equals(client._id)){
            projectsWithClient.push(project)
          }
        })
        return {
          client: client.name,
          logo: client.logo,
          _id: client._id,
          projects: projectsWithClient
        }
      })
      res.json(sortedProjects)
    })
    .catch(error => {
        res.json( error )
    })
})
.post((req, res) => {
    const newProject = req.body
    Project.create(newProject)
        .then(project => {
            res.json(project)
        })
        .then(error => {
            res.json({ error })
        })
})
module.exports = router

const express = require('express')
const router = express.Router()
const Company = require('../models/company')

router
.route('/companies')
.get((req, res) => {
    Company.find()
        .then(company => {
            res.json(company)
        })
        .then(error => {
            res.json({ error })
        })
})
.post((req, res) => {
    const newCompany = req.body
    Company.create(newCompany)
        .then(company => {
            res.json(company)
        })
        .then(error => {
            res.json({ error })
        })
})
module.exports = router

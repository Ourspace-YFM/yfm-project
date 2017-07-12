const mongoose = require('./init')
    , Schema = mongoose.Schema

const companySchema = mongoose.Schema ({
  name: String,
  logo: String
})

const Company = mongoose.model('Company', companySchema)

module.exports = Company

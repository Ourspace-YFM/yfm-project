const mongoose = require('./init')
    , Schema = mongoose.Schema

const companySchema = Schema ({
  name: String,
  logo: type: String
})

const Company = mongoose.model('Company', companySchema)

module.exports = Company

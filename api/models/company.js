const mongoose = require('./init')
    , Schema = mongoose.Schema

const companySchema = Schema ({
  name: {
    type: String,
    required: [true, 'Company name requried']
  },
  logo: String
})

const Company = mongoose.model('Company', companySchema)

module.exports = Company

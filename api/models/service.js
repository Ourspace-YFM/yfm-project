
const mongoose = require('./init')
    , Schema = mongoose.Schema

const servicesSchema = Schema({
  companyId:  {
    type: Schema.Types.ObjectId,
    ref: 'Company'
  },
  locationId:  {
    type: Schema.Types.ObjectId,
    ref: 'Job'
  },
  role: {
    type: String,
    required: [true, 'Role required']
  },
  type: {
    type: String,
    required: [true, 'Type required']
  },
  description: {
    type: String,
    required: [true, 'Description required']
  }
})

const Service = mongoose.model('Service', servicesSchema)

module.exports = Service

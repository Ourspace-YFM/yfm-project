
const mongoose = require('./init')
    , Schema = mongoose.Schema

const servicesSchema = Schema({
  company:  {
    type: Schema.Types.ObjectId,
    ref: 'Company'
  },
  location:  {
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

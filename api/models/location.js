const mongoose = require('./init')
    , Schema = mongoose.Schema

const projectSchema = Schema({
  name: {
    type: String,
    required: [true, 'Location name required']
  },
  coordinates: [Number],
  street: String,
  city: String,
  state: String,
  postcode: String,
  phoneNumber: [String],
  email: String,
  primaryContacts: [String]
})

const Project = mongoose.model('Project', projectSchema)

module.exports = Project

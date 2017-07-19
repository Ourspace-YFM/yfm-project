const mongoose = require('./init')
    , Schema = mongoose.Schema

const locationSchema = Schema({
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

const Location = mongoose.model('Location', locationSchema)

module.exports = Location

const mongoose = require('./init')
    , Schema = mongoose.Schema

const contactsSchema = Schema ({
  companyId: [{
    type: Schema.Types.ObjectId,
    ref: 'Company'
    required: [true, 'Contact must belong to a company']
  }],
  firstName: {
    type: String,
    required: [true, 'First name required']
  }
  lastName: {
    type: String,
    required: [true, 'Last name required']
  },
  position: String,
  locationScope: String,
  phone: [String],
  email: [String]
})

const Contact = mongoose.model('Contact', contactsSchema)

module.exports = Contact

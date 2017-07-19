const mongoose = require('./init')
    , Schema = mongoose.Schema

const contactsSchema = Schema ({
  company: [{
    type: Schema.Types.ObjectId,
    ref: 'Company'
    }]
})

const Contact = mongoose.model('Contact', contactsSchema)

module.exports = Contact

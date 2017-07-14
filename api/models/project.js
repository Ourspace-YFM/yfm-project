const mongoose = require('./init')
    , Schema = mongoose.Schema

const projectSchema = Schema({
  clientId: {
    type: Schema.Types.ObjectId,
    ref: 'Company'
  },
  name: {
    type: String,
    required: [true, 'Project name required']
  },
  type: {
    type: String,
    reuired: [true, 'Project type required']
  },
  description: String,
  status: {
    type: String,
    required: [true, 'Project status required'] 
  },
  priority: {
    type: Boolean,
    default: false
  },
  startDate: Date,
  endDate: Date
})

const Project = mongoose.model('Project', projectSchema)

module.exports = Project

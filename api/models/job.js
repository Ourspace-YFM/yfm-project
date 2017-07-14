const mongoose = require('./init')
    , Schema = mongoose.Schema

const jobSchema = Schema({
  parentProject: {
    type: Schema.Types.ObjectId,
    ref: 'Project'
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'Company'
  },
  name: {
    type: String,
    requried: [true, 'Job name required']
  },
  description: String,
  status: {
    type: String,
    required: [true, 'Job status reuqired']
  },
  priority: {
    type: Boolean,
    default: false
  }
})

const Job = mongoose.model('Job', jobSchema)

module.exports = Job

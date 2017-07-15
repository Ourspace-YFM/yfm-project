const mongoose = require('./init')
    , Schema = mongoose.Schema

const jobSchema = Schema({
<<<<<<< HEAD
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
=======
  parentProject: { type: Schema.Types.ObjectId, ref: 'Project' },
  jobOwner: { type: Schema.Types.ObjectId, ref: 'Company' },
  jobName: String,
  status: String,
  jobDescription: String
>>>>>>> origin/create-fetch-api
})

const Job = mongoose.model('Job', jobSchema)

module.exports = Job

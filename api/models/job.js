const mongoose = require('./init')
    , Schema = mongoose.Schema

const jobSchema = Schema({
  parentProject: { type: Schema.Types.ObjectId, ref: 'Project' },
  jobOwner: { type: Schema.Types.ObjectId, ref: 'Company' },
  jobName: String,
  status: String,
  jobDescription: String
})

const Job = mongoose.model('Job', jobSchema)

module.exports = Job

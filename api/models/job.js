const mongoose = require('./init')
    , Schema = mongoose.Schema

const jobSchema = Schema({
  parentProject: { type: Schema.Types.ObjectId, ref: 'Project' },
  owner: { type: Schema.Types.ObjectId, ref: 'Company' },
  name: String,
  status: String,
  description: String
})

const Job = mongoose.model('Job', jobSchema)

module.exports = Job

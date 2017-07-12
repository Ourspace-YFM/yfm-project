const mongoose = require('./init')
    , Schema = mongoose.Schema

const projectSchema = Schema({
  _id: Number, //Unecessary?
  clientId: [{ type: Schema.Types.ObjectId, ref: 'Company' }],
  projectName: String,
  projectType: String,
  projectDescription: String,
  projectStatus: String,
  projectPriority: Boolean,
  startDate: Date,
  endDate: Date
})

const Project = mongoose.model('Project', projectSchema)

module.exports = Project

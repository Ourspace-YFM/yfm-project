const mongoose = require('./init')
    , Schema = mongoose.Schema

const projectSchema = Schema({
<<<<<<< HEAD
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
=======
  _id: Number, //Unecessary?
  clientId: [{ type: Schema.Types.ObjectId, ref: 'Company' }],
  projectName: String,
  projectType: String,
  projectDescription: String,
  status: String,
  projectPriority: Boolean,
>>>>>>> origin/create-fetch-api
  startDate: Date,
  endDate: Date
})

const Project = mongoose.model('Project', projectSchema)

module.exports = Project

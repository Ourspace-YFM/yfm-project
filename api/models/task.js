const mongoose = require('./init')
    , Schema = mongoose.Schema

const taskSchema = Schema({
  parentJob: { type: Schema.Type.ObjectId, ref: 'Job' }
  taskName: {
    type: String,
    required: [true, 'Task name required']
  }
  taskStatus: {
    type: String,
    required: [true, 'Task status required']
  }
  yfmAttachment: String,
  popShots: String,
  completed: {
    type: Boolean,
    default: false
  }
  completedBy: { type: Schema.Type.ObjectId, ref: 'Contact' } 
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task

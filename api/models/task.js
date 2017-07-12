const mongoose = require('./init')
  ,Schema = mongoose.Schema

const taskSchema = Schema({
  parentJob: { type: Schema.Types.ObjectId, ref: 'Job' },
  name: {
    type: String,
    required: [true, 'Task name required']
  },
  status: {
    type: String,
    required: [true, 'Task status required']
  },
  yfmAttachment: String,
  popShots: String,
  completed: {
    type: Boolean,
    default: false
  },
  completedBy: { type: Schema.Types.ObjectId, ref: 'Contact' }
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task

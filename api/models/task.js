const mongoose = require('./init')
    , Schema = mongoose.Schema

const taskSchema = Schema({
  parentJob: {
    type: Schema.Types.ObjectId,
    ref: 'Job'
  },
  name: {
    type: String,
    required: [true, 'Task name required']
  },
  status: {
    type: String,
    required: [true, 'Task status required']
  },
  attachments: [String],
  estDuration: Number,
  popShotsRequired: {
    type: Boolean,
    default: false
  },
  popShots: {
    type: String,
    required: function() {
      return this.popShotsRequired === true ?
        [true, 'popShots required'] : false
    }
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedBy: {
    type: Schema.Types.ObjectId,
    ref: 'Contact'
  }
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task

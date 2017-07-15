const mongoose = require('./init')
  ,Schema = mongoose.Schema

const taskSchema = Schema({
  parentJob: {
    type: Schema.Types.ObjectId,
    ref: 'Job'
  },
  name: {
    type: String,
    required: [true, 'Task name required']
<<<<<<< HEAD
  },
=======
  }
>>>>>>> origin/create-fetch-api
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
<<<<<<< HEAD
  },
  completedBy: {
    type: Schema.Type.ObjectId,
    ref: 'Contact'
  } 
=======
  }
  completedBy: { type: Schema.Type.ObjectId, ref: 'Contact' }
>>>>>>> origin/create-fetch-api
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task

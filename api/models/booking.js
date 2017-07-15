const mongoose = require('./init')
    , Schema = mongoose.Schema

const bookingSchema = Schema ({
  jobId: {
    type: Schema.Types.ObjectId,
    ref: 'Job'
  },
  taskId: { 
    [{
      type: Schema.Types.ObjectId,
      ref: 'Task'
    }]
  },
  name: {
    type: String,
    required:[true, 'Booking name required']
  },
  status: {
    type: String,
    required: [true, 'Booking status required']
  }
  installerConfirmed: {
    type: Boolean,
    default: false
  },
  clientConfirmed: {
    type: Boolean,
    default: false
  },
  changeRequests: [{
    type: Schema.Types.ObjectId,
    ref: 'ChangeRequest' 
  }],
  installerId: {
    type: Schema.Types.ObjectId,
    ref: 'Company'
  }, 
  locationId: {
    type: Schema.Types.ObjectId,
    ref: 'Location'
  },
  bookedDate: Date,
  instructions: String,
  attachments: [String],
  actualStartTime: Date,
  actualFinishTime: Date
})

const Booking = mongoose.model('Booking', bookingSchema)

module.exports = Booking
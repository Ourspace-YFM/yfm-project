const mongoose = require('./init')
    , Schema = mongoose.Schema

const bookingSchema = Schema ({
  jobId: {
    type: Schema.Types.ObjectId,
    ref: 'Job'
  }
  taskId: { 
    [{
      type: Schema.Types.ObjectId,
      ref: 'Task'
    }]
  }
  status: String,
  name: {
    type: String,
    required:[true, 'Booking name required']
  }
  installerId: {
    type: Schema.Types.ObjectId,
    ref: 'Company'
  } 
  locationId: {
    type: Schema.Types.ObjectId,
    ref: 'Location'
  }
  bookedDate: Date,
  estDuration: Number,
  instructions: String,
  attachments: [String],
  actualStartTime: Date,
  actualFinishTime: Date
})

const Booking = mongoose.model('Booking', bookingSchema)

module.exports = Booking

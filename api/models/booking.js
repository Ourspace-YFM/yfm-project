const mongoose = require('./init')
    , Schema = mongoose.Schema

const bookingSchema = mongoose.Schema ({
  jobId: { type: Schema.Types.ObjectId,ref: 'Job' },

  taskId: [
    { type: Schema.Types.ObjectId, ref: 'Task',required: true }
  ],
  status: String,
  name: { type: String, required: true },
  installerId: [
    { type: Schema.Types.ObjectId, ref: 'Company',required: true }
  ],
  locationId: [
      { type: Schema.Types.ObjectId, ref: 'Location',required: true }
    ],
  bookedDate: Date,
  bookedTime: {
    type: Date,
    required: function() {
      return this.bookedTime? true : false
    }
  },
  estDuration: Number,
  instructions: String,
  attachments: [String],
  actualStartTime: Date,
  actualFinishTime: Date
})

const Booking = mongoose.model('Booking', bookingSchema)

module.exports = Booking

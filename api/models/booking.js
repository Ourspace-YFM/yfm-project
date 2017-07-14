const mongoose = require('./init')
    , Schema = mongoose.Schema

const bookingSchema = Schema ({
  jobId: { Schema.Type.ObjectId, ref: 'Job'}
  taskId: {
    [{ type: Schema.Type.ObjectId, ref: 'Task' }],
    required: true
  }
  status: String,
  name: {
    type: String,
    required: true
  }
  installerId: { Schema.Type.Object, ref: 'Company' }
  locationId: { Schema.Type.Object, ref: 'Location' }
  bookedDate: Date,
  bookedTime: {
    type: Date,
    required: function() {
      return this.bookedTime? true : false
    }
  estDuration: Number,
  instructions: String,
  attachments: [type: String],
  actualStartTime: Date,
  actualFinishTime: Date,
})

const Booking = mongoose.model('Booking', bookingSchema)

module.exports = Booking

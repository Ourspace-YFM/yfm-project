const mongoose = require('./init')
    , Schema = mongoose.Schema

const bookingSchema = Schema ({
<<<<<<< HEAD
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
=======
  jobId: { Schema.Type.ObjectId, ref: 'Job'}
  taskId: {
    [{ type: Schema.Type.ObjectId, ref: 'Task' }],
    required: true
  }
  status: String,
>>>>>>> origin/create-fetch-api
  name: {
    type: String,
    required:[true, 'Booking name required']
  },
  status: {
    type: String,
    required: [true, 'Booking status required']
  }
<<<<<<< HEAD
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
=======
  installerId: { Schema.Type.Object, ref: 'Company' }
  locationId: { Schema.Type.Object, ref: 'Location' }
  bookedDate: Date,
  bookedTime: {
    type: Date,
    required: function() {
      return this.bookedTime? true : false
    }
  estDuration: Number,
>>>>>>> origin/create-fetch-api
  instructions: String,
  attachments: [String],
  actualStartTime: Date,
  actualFinishTime: Date
})

const Booking = mongoose.model('Booking', bookingSchema)

module.exports = Booking

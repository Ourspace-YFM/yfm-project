const mongoose = require('mongoose')
mongoose.Promise = Promise
mongoose.connect('mongodb://localhost/yfm')

const db = mongoose.connection

module.exports = mongoose

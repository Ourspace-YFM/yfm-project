const mongoose = require('mongoose')
mongoose.Promise = Promise
mongoose.connect(process.env.MONGO_URL)

const db = mongoose.connection

module.exports = mongoose

const mongoose = require('mongoose')
mongoose.Promise = Promise
MongoClient = require('mongodb').MongoClient
MongoClient.connect(process.env.MONGO_URL)

const db = mongoose.connection

module.exports = mongoose

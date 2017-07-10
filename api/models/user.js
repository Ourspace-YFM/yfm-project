const mongoose = require('./init')
const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = mongoose.Schema({
  roles: [String],
  // For forced password change logging in first time
  lastSignIn: { type : Date, default: null }
})
userSchema.plugin(passportLocalMongoose, {
  usernameField: 'email',
  usernameLowerCase: true,
  session: false
})

const User = mongoose.model('User', userSchema)

module.exports = User

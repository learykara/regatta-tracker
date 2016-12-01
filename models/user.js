const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: {
    roles: Array, // Possible to do array of strings?
    unique: true,
  },
})

const User = mongoose.model('User', userSchema)

module.exports = userSchema

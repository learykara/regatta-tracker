const { Schema } = require('mongoose')

const userSchema = Schema({
  name: {
    type: String,
    unique: true,
  },
})

module.exports = userSchema

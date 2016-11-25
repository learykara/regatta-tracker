const { Schema } = require('mongoose')

const boatSchema = Schema({
  club: String,
  name: {
    type: String,
    index: true,
  },
  rating: Number,
  sail: String,
  skipper: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
})

module.exports = boatSchema

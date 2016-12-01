const mongoose = require('mongoose')

const boatSchema = new mongoose.Schema({
  club: String,
  name: {
    type: String,
    index: true,
  },
  rating: Number,
  sail: String,
  skipper: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
})

const Boat = mongoose.model('Boat', boatSchema)

module.exports = Boat

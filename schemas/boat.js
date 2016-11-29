const { model, Schema } = require('mongoose')

const boatSchema = new Schema({
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

const Boat = model('Boat', boatSchema)

module.exports = Boat

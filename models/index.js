const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/')

mongoose.connection.on('error', function(err) {
  console.error(`Could not connect. Error: ${err}`)
})

mongoose.connection.once('open', function() {
  const userSchema = mongoose.Schema({
    name: {
      type: String,
      unique: true,
    },
  })

  const regattaSchema = mongoose.Schema({
    date: Date,
    pro: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  })

  const boatSchema = mongoose.Schema({
    club: String,
    name: String,
    rating: Number,
    sail: String,
    skipper: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  })
})

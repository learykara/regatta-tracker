const mongoose = require('mongoose')

const regattaSchema = mongoose.Schema({
  date: Date,
  pro: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
})

const Regatta = mongoose.model('Regatta', regattaSchema)

module.exports = Regatta

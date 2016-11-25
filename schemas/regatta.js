const { Schema } = require('mongoose')

const regattaSchema = Schema({
  date: Date,
  pro: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
})

module.exports = regattaSchema

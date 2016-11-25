const mongoose = require('mongoose')

const config = require('./config')

mongoose.Promise = global.Promise

mongoose.connect(config.DATABASE_URL)

mongoose.connection.on('error', function(err) {
  console.error(`Could not connect. Error: ${err}`)
})

mongoose.connection.once('open', function() {
  console.log(`Connection open to ${config.DATABASE_URL}.`)
})

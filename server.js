const express = require('express')

const config = require('./config')
require('./database')

const app = express()

app.use(express.static('public'))

app.listen(config.PORT)

module.exports.app = app

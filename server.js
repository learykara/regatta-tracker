const express = require('express')

const config = require('./config')
const routes = require('./routes')
require('./database')

const app = express()

app.use(express.static('public'))

app.use('/', routes)

app.listen(config.PORT)

module.exports.app = app

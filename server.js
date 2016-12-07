const bodyParser = require('body-parser')
const express = require('express')

const config = require('./config')
const { apiRouter } = require('./routes')

require('./database')

const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))

app.use('/api', apiRouter)

app.listen(config.PORT)

module.exports.app = app

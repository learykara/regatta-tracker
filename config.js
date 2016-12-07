exports.DATABASE_URL = process.env.NODE_ENV === 'production' ?
  'mongodb://localhost/regatta-tracker'
: 'mongodb://localhost/regatta-tracker-dev'

exports.PORT = process.env.PORT || 8080;

// Keep private keys private with .env
// https://www.npmjs.com/package/dotenv
// require('dotenv').config() in server.js -- replace node
// variables with values in .env file (keep outside repo)

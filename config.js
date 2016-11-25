exports.DATABASE_URL = process.env.NODE_ENV === 'production' ?
  'mongodb://localhost/regatta-tracker'
: 'mongodb://localhost/regatta-tracker-dev'

exports.PORT = process.env.PORT || 8080;

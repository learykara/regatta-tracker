const express = require('express')

const { Boat } = require('../schemas')

const apiRouter = express.Router({ mergeParams: true })

apiRouter.get('/boats', (req, res, next) => {
  // How to query for boats in the db if I'm only using a schema not a model?
  Boat.find((err, boats) => {
    if (err) {
      return res.status(500).json({
        message: 'Internal server error',
      })
    }
    res.json(boats)
  })
})



module.exports = apiRouter

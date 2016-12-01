const express = require('express')
const mongoose = require('mongoose')

const { Boat, User } = require('../models')

const apiRouter = express.Router({ mergeParams: true })

/* User API */
apiRouter.post('/users', (req, res) => {
  User.create({
    name: req.body.name,
    roles: req.body.roles,
  })
})
/* End User API */

/* Boat API */
apiRouter.get('/boats', (req, res) => {
  Boat.find((err, boats) => {
    if (err) {
      return res.status(500).json({
        message: 'Internal server error',
      })
    }
    res.json(boats)
  })
})

apiRouter.post('/boats', (req, res) => {
  Boat.create({
    name: req.body.name,
    sail: req.body.sail,
  }, (err, boat) => {
    if (err) {
      res.status(500).json({
        message: 'Internal server error',
      })
    }
    res.status(201).json(boat)
  })
})
/* End Boat API */


module.exports = apiRouter

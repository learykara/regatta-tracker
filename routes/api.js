const express = require('express')
const mongoose = require('mongoose')

const { Boat, User } = require('../models')

const apiRouter = express.Router({ mergeParams: true })

/* User API */
apiRouter.get('/users', (req, res) => {
  User.find((err, users) => {
    if (err) {
      return res.status(500).json({
        message: 'Internal server error',
      })
    }
    users.map(user => user.roles.map(role => console.log(role[0])))
    // Set headers as application/json
    res.json(users)
  })
})

apiRouter.post('/users', (req, res) => {
  User.create({
    name: req.body.name,
    // Why is roles going in as a nested array?
    roles: req.body.roles.split(','),
  }, (err, user) => {
    if (err) {
      res.status(500).json({
        message: 'Internal server error',
      })
    }
    res.status(201).json(user)
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
  const skipper = User.findOne({
    _id: req.body.userId
  }, (err, skipper) => {
    if (err) {
      console.error(err)
      res.status(500).json({
        message: 'Internal server error',
      })
    }
    if (!skipper) {
      res.status(404).json({
        message: 'Skipper not found',
      })
    }
    Boat.create({
      name: req.body.name,
      sail: req.body.sail,
      skipper: skipper,
    }, (err, boat) => {
      if (err) {
        res.status(500).json({
          message: 'Internal server error',
        })
      }
      res.status(201).json(boat)
    })
  })
})
/* End Boat API */


module.exports = apiRouter

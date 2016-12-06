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
    return res.json(users)
  })
})

apiRouter.get('/users/:userId', (req, res) => {
  User.findOne({ _id: req.params.userId }, null, (err, user) => {
    if (err) {
      return res.status(500).json({
        message: 'Internal server error',
      })
    }
    if (!user) {
      return res.status(404).json({
        message: 'Not found',
      })
    }
    return res.json(user)
  })
})

apiRouter.post('/users', (req, res) => {
  User.create({
    name: req.body.name,
    // Why is roles going in as a nested array?
    roles: req.body.roles.split(','),
  }, (err, user) => {
    if (err) {
      return res.status(500).json({
        message: 'Internal server error',
      })
    }
    return res.status(201).json(user)
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
    return res.json(boats)
  })
})

apiRouter.get('/boats/:boatId', (req, res) => {
  Boat.findOne({ _id: req.params.boatId }, null, (err, boat) => {
    if (err) {
      return res.status(500).json({
        message: 'Internal server error',
      })
    }
    if (!boat) {
      return res.status(404).json({
        message: 'Not found',
      })
    }
    return res.json(boat)
  })
})

apiRouter.post('/boats', (req, res) => {
  const skipper = User.findOne({
    _id: req.body.userId
  }, (err, skipper) => {
    if (err) {
      return res.status(500).json({
        message: 'Internal server error',
      })
    }
    if (!skipper) {
      return res.status(404).json({
        message: 'Skipper not found',
      })
    }
    Boat.create({
      name: req.body.name,
      sail: req.body.sail,
      skipper: skipper,
    }, (err, boat) => {
      if (err) {
        return res.status(500).json({
          message: 'Internal server error',
        })
      }
      return res.status(201).json(boat)
    })
  })
})
/* End Boat API */


module.exports = apiRouter

const express = require('express')

const router = express.Router({ mergeParams: true })

router.get('/helloworld', (req, res, next) => {
  res.send('Yo')
})

module.exports = router

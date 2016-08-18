var router = require('express').Router()
var Restaurant = require('../models/restaurant')

router.get('/', function (req, res, next) {
  Restaurant.findAll().then(function (content) {
    res.send(content)
  }).catch(next)
})

module.exports = router

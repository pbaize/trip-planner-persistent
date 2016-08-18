var router = require('express').Router()
var Hotel = require('../models/hotel')

router.get('/', function (req, res, next) {
  Hotel.findAll().then(function (content) {
    res.send(content)
  }).catch(next)
})

module.exports = router

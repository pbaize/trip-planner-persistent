var router = require('express').Router()
var Activity = require('../models/activity')

router.get('/', function (req, res, next) {
  Activity.findAll().then(function (content) {
    res.send(content)
  }).catch(next)
})

module.exports = router

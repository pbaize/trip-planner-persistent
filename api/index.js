var router = require('express').Router()
var activities = require('./activities')
var restaurants = require('./restaurants')
var hotels = require('./hotels')

router.use('/restaurants', restaurants)
router.use('/activities', activities)
router.use('/hotels', hotels)

module.exports = router

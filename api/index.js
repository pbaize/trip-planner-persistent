var router = require('express').Router()
var activities = require('./activities')
var restaurants = require('./restaurants')
var hotels = require('./hotels')
var days = require('./days')

router.use('/restaurants', restaurants)
router.use('/activities', activities)
router.use('/hotels', hotels)
router.use('/days', days)

module.exports = router

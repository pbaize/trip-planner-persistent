var router = require('express').Router()
var days = require('../models/day')

// Get all days.
router.get('/', function (req, res, next) {
    days.findAll({})
    .then(function(elem) {
        res.send(elem)
    })
})

// Get one day.
router.get('/:id', function (req, res, next) {
})

// Delete one day.
router.delete('/:id', function (req, res, next) {
    
})

// Create new day.
router.post('/:id', function (req, res, next) {
    var num = req.params.id
    days.create({
        id: num
    }).then(function() {
        res.redirect('/')
    }).catch(console.log)
})

// Create new attraction.
router.post('/:id/:attr', function (req, res, next) {
    
})

// Delete one attraction.
router.delete('/:id/:attr', function (req, res, next) {
    
})

module.exports = router
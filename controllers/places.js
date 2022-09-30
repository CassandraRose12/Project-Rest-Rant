const router = require('express').Router()
const places = require('../models/places.js')

router.get('/', (req, res) => {
   /* let places = [{
        name: 'Le Diplomate',
        city: 'District of Columbia',
        state: 'D.C.',
        cuisines: 'French',
        pic: '/images/le-dip.jpg'
      }, {
        name: 'Exiles Bar',
        city: 'District of Columbia',
        state: 'D.C.',
        cuisines: 'American',
        pic: '/images/exiles.jpg'
      }]*/
      
    res.render('places/index', {places })
})
router.get('/new', (req, res) => {
    res.render('places/new')
  })

  router.post('/', (req, res) => {
    //console.log(req.body)
    if (!req.body.pic) {
      req.body.pic = '/images/le-dip.jpg'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
  })
  
  

module.exports = router

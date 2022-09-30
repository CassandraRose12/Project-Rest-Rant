const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'Le Diplomate',
        city: 'District of Columbia',
        state: 'D.C.',
        cuisines: 'French, French-American',
        pic: '/images/le-dip.jpg'
      }, {
        name: 'Exiles Bar',
        city: 'District of Columbia',
        state: 'D.C.',
        cuisines: 'Pub, American',
        pic: '/images/exiles.jpg'
      }]
      
    res.render('places/index', { places })
})
router.get('/new', (req, res) => {
    res.render('places/new')
  })
  

module.exports = router

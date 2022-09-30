const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
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
      }]
      
    res.render('places/index', {places })
})
router.get('/new', (req, res) => {
    res.render('places/new')
  })

  router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
  })
  
  

module.exports = router

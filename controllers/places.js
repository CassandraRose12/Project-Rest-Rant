const router = require('express').Router()
const places = require('../models/places.js')

//Index
router.get('/', (req, res) => {
    res.render('places/index', {places })
})
//New
router.get('/new', (req, res) => {
  res.render('places/new')
})
  //Show
  router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        res.render('places/show', { place: places[id], })
    }
})
    //Create
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
    
  router.put('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        
        if (!req.body.pic) {
            
            req.body.pic = '/image/egg-dish'
        }
        if (!req.body.city) {
            req.body.city = 'Anytown'
        }
        if (!req.body.state) {
            req.body.state = 'USA'
        }
  
        // Save the new data into places[id]
        places[id] = req.body
        res.redirect(`/places/${id}`)
    }
  })
   //Edit
   router.get('/:id/edit', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else { 
        res.render('places/edit', { place: places[id], id })
    }
})
  
      //Delete
      router.delete('/:id', (req, res) => {
        let id = Number(req.params.id)
        if (isNaN(id)) {
          res.render('error404')
        }
        else if (!places[id]) {
          res.render('error404')
        }
        else {
          places.splice(id, 1)
          res.redirect('/places')
        }
      })


  




  

module.exports = router

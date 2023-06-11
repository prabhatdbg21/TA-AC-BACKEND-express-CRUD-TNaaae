var express = require('express');
var router = express.Router();
var User = require('../models/user')

router.get('/', (req, res) => {
    res.render("users.ejs");
});

router.get('/new', (req, res) => {
    res.render("userForm.ejs");
});

router.post('/', (req, res, next) => {
     
    // capture data
    console.log (req.body)
    
    // save it to database
    User.create(req.body)
    .then((User) => {
        res.redirect('/users')
    }) 
    .catch((err) =>  res.redirect('/users/new') )  // console.log(err)   // return next(err) in video
    // response
})

module.exports = router;


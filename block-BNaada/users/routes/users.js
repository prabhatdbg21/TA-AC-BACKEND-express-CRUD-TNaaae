var express = require('express');
var router = express.Router();
var User = require('../models/user')

router.get('/', (req, res, next) => {
    
    User.find({})
        .catch((err) => next(err))
        .then((allUser) => res.render('users', {users: allUser}))
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

router.get('/:id', (req, res, next) => {
    var id = req.params.id;  // to capture the id

    User.findById(id)
        .catch((err) => next(err))
        .then((userDet) => {
            console.log(userDet);
            res.render('usersDetails', {user: userDet}); // user is key use in usersDetails.ejs page
        })
})

module.exports = router;
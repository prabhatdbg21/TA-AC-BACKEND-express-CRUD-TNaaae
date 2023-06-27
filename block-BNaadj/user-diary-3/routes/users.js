var express = require('express');
var router = express.Router();
var User = require('../models/user')

router.get('/', (req, res, next) => {
    
    User.find({})
        .catch((err) => next(err))
        .then((allUser) => res.render('users', {users: allUser}))
});

router.post('/', (req, res) => {
    
    // save it to database
    User.create(req.body)
    .then((User) => {
        res.redirect('/users')
    }) 
    .catch((err) =>  res.redirect('/users/new') )  // console.log(err)   // return next(err) in video
    // response
})

router.get('/new', (req, res) => {
    res.render("newUser");
});

router.get('/:id', (req, res, next) => {
    var id = req.params.id;  // to capture the id

    User.findById(id)
        .catch((err) => next(err))
        .then((userDet) => {
            res.render('singleUser', {user: userDet}); // user is key use in usersDetails.ejs page
        })
})

router.get('/:id/edit', (req, res, next) => {
    var id = req.params.id;  // to capture the id

    User.findById(id)
        .catch((err) => next(err))
        .then((userDet) => {
            res.render('editUserForm', {user: userDet}); 
        })
})

router.post('/:id', (req, res, next) => {
    var id = req.params.id;  // to capture the id

    User.findByIdAndUpdate(id, req.body)
        .catch((err) => next(err))
        .then((userDet) => {
            res.redirect("/users/" + id)
        })
})

router.get('/:id/delete', (req, res, next) => {
    var id = req.params.id;  // to capture the id

    User.findByIdAndDelete(id)
        .catch((err) => next(err))
        .then((deletedUser) => {
            res.redirect("/users")
        })
})

module.exports = router;

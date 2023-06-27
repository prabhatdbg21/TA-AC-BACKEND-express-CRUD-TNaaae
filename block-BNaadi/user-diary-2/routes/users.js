var express = require('express');
var router = express.Router();
var User = require('../models/user')

router.post('/', (req, res, next) => {

    // save it to database
    User.create(req.body)
    .then((User) => {
        res.redirect('/users')
    }) 
    .catch((err) =>  res.redirect('/users') ) 
    // response
})

router.get('/', (req, res, next) => {
    
    User.find({})
        .catch((err) => next(err))
        .then((allUser) => res.render('listUsers', {users: allUser}))
});

router.get('/:id', (req, res, next) => {
    var id = req.params.id;  // to capture the id

    User.findById(id)
        .catch((err) => next(err))
        .then((userDet) => {
            res.render('singleUser', {user: userDet}); // user is key use in usersDetails.ejs page
        })
})

router.put('/:id', (req, res, next) => {
    var id = req.params.id;  // to capture the id

    User.findByIdAndUpdate(id, req.body)
        .catch((err) => next(err))
        .then((userDet) => {
            res.redirect("/users")
        })
})

// DELETE
router.delete('/:id/delete', (req, res, next) => {
    var id = req.params.id;  // to capture the id

    Book.findByIdAndDelete(id)
        .catch((err) => next(err))
        .then(() => {
            res.redirect("/books/")
        })
})

module.exports = router;

var express = require('express');
var router = express.Router();
var User = require('../models/user')

router.get('/new', (req, res) => {
    res.render("allbooks.ejs");
});

router.post('/', (req, res, next) => {
     
    // capture data
    console.log (req.body)
    
    // save it to database
    User.create(req.body)
    .then((User) => {
        console.log(User);
        res.redirect('/users/new')
    }) //  res.redirect alwayes do GET request on  /books  // console.log(Book)
    .catch((err) => next(err))  // console.log(err)   // return next(err) in video
    // response
})

module.exports = router;

/*
var express = require('express');
var router = express.Router();
var Book = require('../models/book')

router.get('/', (req, res) => {
    res.render("books");
});

router.get('/new', (req, res) => {
    res.render("addBook.ejs");
});

router.post('/', (req, res, next) => {
     
    // capture data
    console.log (req.body)
    
    // save it to database
    Book.create(req.body)
    .then((Book) => res.redirect('/books')) //  res.redirect alwayes do GET request on  /books  // console.log(Book)
    .catch((err) => next(err))  // console.log(err)   // return next(err) in video
    // response
})

module.exports = router;
*/
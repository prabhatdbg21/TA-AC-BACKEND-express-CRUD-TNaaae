var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render("students", { list: ["ankit", "suraj", "prashant", "ravi"] });
});

router.get('/new', (req, res) => {
    res.render("students", { list: ["ankit", "suraj", "prashant", "ravi"] });
    //res.send('Book form')
});

router.post('/', (req, res) => {
    // grab the data
    // save data to database
    // send a response
});



router.put('/:id', (req, res) => {
    // findByIdAndUpdate
});

router.delete('/:id', (req, res) => {
    // delete using id
})

module.exports = router;
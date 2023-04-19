var express = require('express');
var router = express.Router();

// - create student form => GET request on "/students/new"
router.get('/new', (req, res) => {
    res.render("students");
    //res.send('Book form')
});

// - create a student => POST request on "/students" route
router.post('/', (req, res) => {
    res.send(req.body)
    // grab the data
    // save data to database
    // send a response
});

// list all students => GET request on "/students" route
router.get('/', (req, res) => {
    res.render("list.ejs", { list: ["ankit", "suraj", "prashant", "ravi"] });
});

// - get single student details => GET request on "/students/:id"
router.get('/:id', (req, res) => {
    res.render("studentDetail", {
        student: { name: "rahul", email: "rahul@altcampus.io" },
    })
})

module.exports = router;
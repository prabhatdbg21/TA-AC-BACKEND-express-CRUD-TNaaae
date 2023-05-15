var express = require('express');
var router = express.Router();

// list all students => GET request on "/students" route
router.get('/', (req, res) => {
    res.render("list.ejs", { list: ["ankit", "suraj", "prashant", "ravi"] });
});



/*

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

*/

/*
app.get('/', (req, res) => {
    var sports = ["cricket", "football", "volleyball"]
    res.render('index.ejs', {sports: sports})
});

app.get('/about', (req, res) => {
    // res.locals.message = "Hello world"  // usind res.locals we can add certain extra message in to template which is being rander from any other place
    res.render('about.ejs') 
});
*/

// book routes
/*
app.get('/books/new', (req, res) => {
    // res.render('formpage.ejs')
});

app.post('/books', (req, res) => {
    // grab the data
    // save data to database
    // send a response
});

app.get('/books', (req, res) => {
    // list all books
});

app.get('/books/:id', (req, res) => {
    // capture the book using id from database
    // send response with book details data
});

app.get('/books/:id/edit', (req, res) => {
    // find the book
    // render a update form with book data
});

app.put('/books/:id', (req, res) => {
    // findByIdAndUpdate
});

app.delete('/books/:id', (req, res) => {
    // delete using id
})
*/
// requires
var express = require('express');
var mongoose = require('mongoose');
var path = require('path');

// var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// connect to database
mongoose.connect('mongodb://127.0.0.1:27017/sample')
.then(() => console.log('Connected'))
.catch((error) => console.log(error))

// instantiate the app
var app = express();

// middleware
app.use(express.json()) 
app.use(express.urlencoded({ extended: false}));  // caputure the data from post request and send it to the req.body

// setup view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // all views present in views directery


// routing middlewares
// app.use('/', indexRouter);
app.use('/users', usersRouter);  // url with '/books' only go to book.js  

// routes


// Error handler middlewares
app.use((req, res, next) => {
    res.send('Page not Found');
})

app.use((err, req, res, next) => {
    console.log(err);
    res.send(err);
})

app.listen(3000, () => {
    console.log('server is listening on port 3k')
})

// requires
var express = require('express');
var mongoose = require('mongoose');

var userRouter = require('./routes/users');

// connect to database
mongoose.connect('mongodb://127.0.0.1:27017/bookstore')
.then(() => console.log('Connected'))
.catch((error) => console.log(error))

// instantiate the app
var app = express();

// setup view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // all views present in views directery

// routing middlewares
app.use('/users', userRouter);

// listener
app.listen(3000, () => {
    console.log('server is listening on port 3k')
})





/*
// requires
var express = require('express');
var mongoose = require('mongoose');
var path = require('path');

var indexRouter = require('./routes/index');
var booksRouter = require('./routes/books');

// connect to database
mongoose.connect('mongodb://127.0.0.1:27017/bookstore')
.then(() => console.log('Connected'))
.catch((error) => console.log(error))

// instantiate the app
var app = express();

// setup view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // all views present in views directery

// capture form data
app.use(express.urlencoded ({extended: false}))   // urlencoded to capture form data  // extended: true for nested form   // capture the data from form and keep it into req.body 

// setup static directory                    // for adding css and image
app.use(express.static(path.join(__dirname, "public")));

// routing middlewares
app.use('/', indexRouter);
app.use('/books', booksRouter);

// Error handler middlewares
// 404
app.use((req, res, next) => {
    res.send('Page not Found');
})
// custome error handler middleware
app.use((err, req, res, next) => {
    res.send(err);
})

// listener
app.listen(3000, () => {
    console.log('server is listening on port 3k')
})
*/
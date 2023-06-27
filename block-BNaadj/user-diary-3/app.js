// requires
var express = require('express');
var mongoose = require('mongoose');
var path = require('path');

var userRouter = require('./routes/users');

// connect to database
mongoose.connect('mongodb://127.0.0.1:27017/users3')
.then(() => console.log('Connected'))
.catch((error) => console.log(error))

// instantiate the app
var app = express();

// setup view engine
app.set("view engine", "ejs");
app.set('views',  path.join(__dirname, "views")); // all views present in views directery

// capture form data
app.use(express.urlencoded ({extended: false})) 

// routing middlewares
app.use('/users', userRouter);

// Error handler middlewares
app.use((req, res, next) => {
    res.send('Page not Found');
})

// Custom error handler
app.use((err, req, res, next) => {
    console.log(err);
    res.send(err);
})

// listener
app.listen(3000, () => {
    console.log('server is listening on port 3k')
})
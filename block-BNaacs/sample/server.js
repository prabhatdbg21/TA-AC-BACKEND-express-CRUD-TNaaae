// requires
var express = require('express');
var mongoose = require('mongoose');
var path = require('path');

// connect to database
mongoose.connect('mongodb://127.0.0.1:27017/sample')
.then(() => console.log('Connected'))
.catch((error) => console.log(error))

// instantiate the app
var app = express();

// middleware
app.use(express.json())  

app.use((req, res, next) => { 
    res.locals.message = "Hi Anand"
    next()
})

// setup view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // all views present in views directery


// routes
app.get('/', (req, res) => {
    res.render('index.ejs')
})

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

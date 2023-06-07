var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: { type: String, required: true },  // any book must have title
    subject: String,
    marks: Number,
    result: String
}, {timestamps: true}) // give us created and updated time

var User = mongoose.model('User' , userSchema);  // models name must be singular and start with capital letter

module.exports = User;




/*
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
    title: { type: String, required: true },  // any book must have title
    description: String,
    price: Number,
    author: String
}, {timestamps: true}) // give us created and updated time

var Book = mongoose.model('Book' , bookSchema);  // models name must be singular and start with capital letter

module.exports = Book;
*/
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: { type: String, required: true },  // any book must have title
    email: String,
    age: Number
}, {timestamps: true}) // give us created and updated time

var User = mongoose.model('User' , userSchema);  // models name must be singular and start with capital letter

module.exports = User;
var express = require('express');
var router = express.Router();

// list all users => GET request on "/users" route
router.get('/', (req, res) => {
    // handle action
    res.render('users.ejs')
    //res.render("list.ejs", { list: ["ankit", "suraj", "prashant", "ravi"] });  // d
});

// - create new user form => GET request on "/users/new"
router.get('/new', (req, res) => {
    // render the create form
    res.render('userForm.ejs');
});
router.post('/', (req, res) => {    
    // capute form data
});

// - get single user details => GET request on "/users/:id"
router.get('/:id', (req, res) => {        // :id is fix value so for fix value we use it in last
    // single user detail
    res.render('singleUser.ejs')
})

// - update user => GET request on "/users/:id/edit"
router.get('/:id/edit', (req, res) => {       
    // edit form
})
// GET request on "/users/:id
router.put('/:id', (req, res) => {       
    // capture the data from the update form
})

// - delete use => GET request on "/users/:id"
router.delete('/:id', (req, res) => {       
    // delete that user
})

module.exports = router;

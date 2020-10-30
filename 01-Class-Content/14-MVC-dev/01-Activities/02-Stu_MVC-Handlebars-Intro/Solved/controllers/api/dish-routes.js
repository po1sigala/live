// Add a comment indicating how this file fits into the MVC framework (is it a Model, a View, or a Controller?) and what it is responsible for handling.
// This file is a Controller. It routes commands to the Model and View parts.

const router = require('express').Router();

// Add a comment describing the purpose of this route
// GET route for getting all of the dishes that are on the menu
router.get('/', (req, res) => {
    res.render('all');
  });
  

module.exports = router

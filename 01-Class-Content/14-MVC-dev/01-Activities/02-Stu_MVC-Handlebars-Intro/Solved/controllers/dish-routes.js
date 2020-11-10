// Is this a Model, a View, or a Controller? What it is responsible for handling?
// This file is a Controller. It routes commands to the Model and View parts.

const router = require('express').Router();

// Add a comment describing the purpose of this route
// GET route for getting all of the dishes that are on the menu
router.get('/', async (req, res) => {
  // Add a comment describing the purpose of this method
  // This method is rendering the 'all' Handlebars.js template. This is how we connect each route to the correct template.
  res.render('all');
});

module.exports = router;

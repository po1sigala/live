// TODO: Add a comment indicating how this file fits into the MVC framework (is it a Model, a View, or a Controller?) and what it is responsible for handling.

const router = require('express').Router();

// TODO: Add a comment describing the purpose of this route
router.get('/', (req, res) => {
//TODO: Add a comment describing the purpose of this method
  res.render('all');
});

module.exports = router;

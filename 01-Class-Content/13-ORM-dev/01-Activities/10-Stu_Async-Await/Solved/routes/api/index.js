const router = require('express').Router();
const books = require('./Books');

router.use('/books', books);

module.exports = router;
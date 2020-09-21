const router = require('express').Router();
const bookRoutes = require('./api/bookRoutes');

router.use('/api/books', bookRoutes);

module.exports = router;

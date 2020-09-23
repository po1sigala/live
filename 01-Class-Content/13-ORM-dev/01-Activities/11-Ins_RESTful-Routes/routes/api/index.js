const router = require('express').Router();

const userRoutes = require('./shopperRoutes');

router.use('/shopper', shopperRoutes);

module.exports = router;

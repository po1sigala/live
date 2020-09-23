const router = require('express').Router();

const shopperRoutes = require('./shopperRoutes');

router.use('/shoppers', shopperRoutes);

module.exports = router;

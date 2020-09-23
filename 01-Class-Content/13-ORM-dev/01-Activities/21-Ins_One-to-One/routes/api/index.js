const router = require('express').Router();
const driverRoutes = require('./driverRoutes');
const licenseRoutes = require('./licenseRoutes');

router.use('/drivers', driverRoutes);
router.use('/licenses', licenseRoutes);

module.exports = router;

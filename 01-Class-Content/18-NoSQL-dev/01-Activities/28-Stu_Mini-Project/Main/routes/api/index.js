const router = require('express').Router();
const appRoutes = require('./assignmentRoutes');
const studentRoutes = require('./studentRoutes');

router.use('/apps', appRoutes);
router.use('/students', studentRoutes);

module.exports = router;

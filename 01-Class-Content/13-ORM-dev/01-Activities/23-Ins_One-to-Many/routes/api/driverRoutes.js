const router = require('express').Router();
const { Driver, Car } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const driverData = await Driver.findAll({
      include: [{ model: Car }],
    });
    res.status(200).json(driverData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const driverData = await Driver.findByPk(req.params.id, {
      include: [{ model: Car }],
    });

    if (!driverData) {
      res.status(404).json({ message: 'No driver found with that id!' });
      return;
    }

    res.status(200).json(driverData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

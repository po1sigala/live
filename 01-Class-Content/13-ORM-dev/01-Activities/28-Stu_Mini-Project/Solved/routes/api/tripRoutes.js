const router = require('express').Router();
const { Trip } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const tripData = await Trip.create(req.body);
    res.status(200).json(tripData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const tripData = await Trip.destroy({
      where: { id: req.params.id }
    });
    res.status(200).json(tripData);
  } catch (err) {
    res.status(404).json(err);
  }
});

module.exports = router;

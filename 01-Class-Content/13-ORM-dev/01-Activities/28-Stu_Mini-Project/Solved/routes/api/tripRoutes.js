const router = require('express').Router();
const { Trip } = require('../../models');

router.post('/', async (req, res) => {
  const tripData = await Trip.create(req.body).catch((err) =>
    res.status(400).json(err)
  );

  res.status(200).json(tripData);
});

router.delete('/:id', async (req, res) => {
  const tripData = await Trip.destroy({
    where: { id: req.params.id }
  }).catch((err) => res.status(400).json(err));

  res.status(200).json(tripData);
});

module.exports = router;

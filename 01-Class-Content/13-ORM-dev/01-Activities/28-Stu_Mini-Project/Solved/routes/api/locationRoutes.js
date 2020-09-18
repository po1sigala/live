const router = require('express').Router();
const { Location, Traveller, Trip } = require('../../models');

router.get('/', async (req, res) => {
  const locationData = await Location.findAll().catch((err) =>
    res.status(500).json(err)
  );

  res.status(200).json(locationData);
});

router.post('/', async (req, res) => {
  const locationData = await Location.create(req.body).catch((err) =>
    res.status(400).json(err)
  );

  res.status(200).json(locationData);
});

router.get('/:id', async (req, res) => {
  const locationData = await Location.findByPk(req.params.id, {
    include: [{ model: Traveller, through: Trip, as: 'location_travellers' }]
  }).catch((err) => res.status(500).json(err));

  res.status(200).json(locationData);
});

router.delete('/:id', async (req, res) => {
  const locationData = await Location.destroy({
    where: {
      id: req.params.id
    }
  }).catch((err) => res.status(500).json(err));

  res.status(200).json(locationData);
});

module.exports = router;

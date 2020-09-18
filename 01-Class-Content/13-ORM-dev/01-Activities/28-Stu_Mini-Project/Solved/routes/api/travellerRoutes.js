const router = require('express').Router();
const { Traveller, Trip, Location } = require('../../models');

router.get('/', async (req, res) => {
  const travellerData = await Traveller.findAll().catch((err) =>
    res.status(500).json(err)
  );

  res.status(200).json(travellerData);
});

router.post('/', async (req, res) => {
  const travellerData = await Traveller.create(req.body).catch((err) =>
    res.status(400).json(err)
  );

  res.status(200).json(travellerData);
});

router.get('/:id', async (req, res) => {
  const travellerData = await Traveller.findByPk(req.params.id, {
    include: [{ model: Location, through: Trip, as: 'trip_locations' }]
  }).catch((err) => res.status(500).json(err));

  res.status(200).json(travellerData);
});

router.delete('/:id', async (req, res) => {
  const travellerData = await Traveller.destroy({
    where: {
      id: req.params.id
    }
  }).catch((err) => res.status(500).json(err));

  res.status(200).json(travellerData);
});

module.exports = router;

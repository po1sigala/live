const router = require('express').Router();
const { Traveller } = require('../../models');

router.get('/', async (req, res) => {
  const travellerData = await Traveller.findAll().catch((err) =>
    res.status(500).json(err)
  );
});

router.post('/', async (req, res) => {});

module.exports = router;

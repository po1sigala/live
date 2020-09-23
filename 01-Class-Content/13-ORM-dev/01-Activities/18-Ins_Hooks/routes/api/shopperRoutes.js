const router = require('express').Router();
const Shopper = require('../../models/Shopper.js');


// GET one Shopper
router.get('/:id', async (req, res) => {
    try {
      const shopperData = await Shopper.findByPk(req.params.id);
      if (!shopperData) {
        res.status(404).json({ message: 'No Shopper with this id!' });
        return;
      }
      res.status(200).json(shopperData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


// POST create a new Shopper
router.post('/', async (req, res) => {
    try {
      const shopperData = await Shopper.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      });
      res.status(200).json(shopperData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

// PUT update a Shopper
router.put('/:id', async (req, res) => {
    try {
      const shopperData = await Shopper.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (!shopperData[0]) {
        res.status(404).json({ message: 'No Shopper with this id!' });
        return;
      }
      res.status(200).json(shopperData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;

const router = require('express').Router();
const Shopper = require('../../models/Shopper.js');

// GET all users
router.get('/', async (req, res) => {
  try {
    const userData = await Shopper.findAll();
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a new user
router.post('/', async (req, res) => {
  try {
    const userData = await Shopper.create({
      username: req.body.username,
      email: req.body.email,
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET one user
router.get('/:id', async (req, res) => {
  try {
    const userData = await Shopper.findByPk(req.params.id);
    if (!userData) {
      res.status(404).json({ message: 'No shopper with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE a user
router.put('/:id', async (req, res) => {
  try {
    const userData = await Shopper.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!userData[0]) {
      res.status(404).json({ message: 'No shopper with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a user
router.delete('/:id', async (req, res) => {
  try {
    const userData = await Shopper.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!userData) {
      res.status(404).json({ message: 'No shopper with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

const router = require('express').Router();
const User = require('../../models/User.js');

// Get all users
router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll();
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new user
router.post('/', async (req, res) => {
  try {
    const userData = await User.create({
      username: req.body.username,
      email: req.body.email,
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Get one user
// TODO: Incorporate try/catch to catch the error
// TODO: Return a 404 status code with the message 'No user with this id!'
router.get('/:id', async (req, res) => {
  const userData = await User.findByPk(req.params.id).catch((err) =>
    res.status(500).json(err)
  );
  res.status(200).json(userData);
});

// Update a user
router.put('/:id', async (req, res) => {
  try {
    const userData = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    // TODO: Return a 404 status code with the message 'No user with this id!'
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a user
// TODO: Incorporate try/catch to catch the error
// TODO: Return a 404 status code with the message 'No user with this id!'
router.delete('/:id', async (req, res) => {
  const userData = await User.destroy({
    where: {
      id: req.params.id,
    },
  }).catch((err) => res.status(500).json(err));
  res.status(200).json(userData);
});

module.exports = router;

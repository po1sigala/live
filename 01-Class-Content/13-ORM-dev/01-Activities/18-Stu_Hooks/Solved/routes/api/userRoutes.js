const router = require('express').Router();
const User = require('../../models/User.js');


// GET /api/users/1
router.get('/:id', async(req, res) => {
    try {
        const userData = await User.findByPk(req.params.id);
        res.status(200).json(userData);
    } catch(err) {
        res.status(404).json(err)
    }

});


// POST /api/users
router.post('/', async(req, res) => {
    try {
        const userData = await User.create(req.body);
        res.status(200).json(userData)
    } catch(err) {
        res.status(400).json(err)
    }

});

// PUT /api/users/1
router.put('/:id', async (req, res) => {
    try {
      const userData = await User.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (!userData[0]) {
        res.status(404).json({ message: 'No user with this id!' });
        return;
      }
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;

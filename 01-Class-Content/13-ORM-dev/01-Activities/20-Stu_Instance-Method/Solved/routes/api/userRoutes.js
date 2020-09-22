const router = require('express').Router();
const User = require('../../models/User.js');



// POST create a new user
router.post('/', async (req, res) => {
    try {
      const userData = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      });
      res.status(200).json(userData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

// POST user login
  router.post('/login', (req, res) => {
    // try {
        const userData = User.findOne({ where: { email: req.body.email } })
        if (!userData) {
        res.status(400).json({ message: 'No user with that email address!' });
        return;
        }
        console.log(userData)
        const validPassword = userData.checkPassword(req.body.password);
            if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' });
            return;
            }
         res.json({ user: userData, message: 'You are now logged in!' });
        
      
    // } catch (err) {
    //     res.status(400).json(err)
    // }
  });

// GET one user
router.get('/:id', async (req, res) => {
    try {
      const userData = await User.findByPk(req.params.id);
      if (!userData) {
        res.status(404).json({ message: 'No user with this id!' });
        return;
      }
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  });



// PUT update a user
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
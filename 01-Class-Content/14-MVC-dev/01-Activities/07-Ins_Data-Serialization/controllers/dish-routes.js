const router = require('express').Router();
const Dish = require('../models/Dish');

// get one dish
router.get('/dish/:id', async (req, res) => {
  try {
  // Search the database for a dish with an id that matches params
  const dishData = await Dish.findByPk(req.params.id);
  // We use .get({ plain: true }) on the object to serialize it so that it only includes the data that we need. 
  const dish = dishData.get({ plain: true });
  // Then, the 'dish' template is rendered and dish is passed into the template.
  res.render('dish', dish);
  } catch (err) {
      res.status(500).json(err);
  }
});

module.exports = router;


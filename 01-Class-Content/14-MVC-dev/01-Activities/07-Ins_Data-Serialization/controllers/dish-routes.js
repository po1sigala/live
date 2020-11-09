const router = require('express').Router();
const sequelize = require('../config/connection');
const Dish = require('../models/Dish');


router.get('/dish/:id', (req, res) => {
  //Search the database for a dish with an id that matches params
  Dish.findByPk({
    where: {
      id: req.params.id,
    },
    attributes: ['id', 'dish_name', 'description', 'guest_name', 'has_nuts'],
  })
    .then((dbDishData) => {
      // We use .get({ plain: true }) on the object to serialize it so that it only includes the data that we need. 
      const dish = dbDishData.get({ plain: true });
      //Then, the 'dish' template is rendered and dish is passed into the template.
      res.render('dish', dish);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
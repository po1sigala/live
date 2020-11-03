const router = require('express').Router();
const sequelize = require('../config/connection');
const Dish = require('../models/Dish');

router.get('/', (req, res) => {
  Dish.findAll({
    attributes: ['id', 'dish_name', 'description', 'guest_name', 'has_nuts'],
  })
    .then((dbDishData) => {
      const dishes = dbDishData.map((dish) => dish.get({ plain: true }));
      res.render('all', { dishes });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Dish.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ['id', 'dish_name', 'description', 'guest_name', 'has_nuts'],
  })
    .then((dbDishData) => {
      const dish = dbDishData.get({ plain: true });
      res.render('dish', dish);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

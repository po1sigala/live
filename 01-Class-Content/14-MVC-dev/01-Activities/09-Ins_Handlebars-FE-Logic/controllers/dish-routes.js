const router = require('express').Router();
const sequelize = require('../config/connection');
const Dish = require('../models/Dish');

// route to get all dishes
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

//route to get one dish
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

//route to create/add a dish
router.post('/', (req, res) => {
  Dish.create({
    dish_name: req.body.dish_name,
    description: req.body.description,
    guest_name: req.body.guest_name,
    has_nuts: req.body.has_nuts,
  })
    .then((dbDishData) => res.json(dbDishData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

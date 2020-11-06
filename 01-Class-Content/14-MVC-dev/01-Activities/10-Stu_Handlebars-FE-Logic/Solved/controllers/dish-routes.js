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
router.get('/dish/:id', (req, res) => {
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

//TODO: According to MVC, what is the role of this action method?
//This action method is the Controller. It accepts input and sends data to the Model and the View.
router.put('/dish/:id', (req, res) => {
  //TODO: Where is this action method sending the data from the body of the fetch request? Why?
  //It is sending the data to the Model so that one dish can be updated with new datat in the database.
  Dish.update(
    {
      dish_name: req.body.dish_name,
      description: req.body.description,
      guest_name: req.body.guest_name,
      has_nuts: req.body.has_nuts,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    //TODO: If the database is updated successfully, what happens to the updated data below?
    //The updated data (dbDishData) is then sent back to handler that dispatched the fetch request.
    .then((dbDishData) => {
      if (!dbDishData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbDishData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

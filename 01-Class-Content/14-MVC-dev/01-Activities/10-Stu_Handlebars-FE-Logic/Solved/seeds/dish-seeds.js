const Dish = require('../models/Dish');

const dishData = [
  {
    dish_name: 'French Bread with Brie Cheese',
    description: 'French baguette with warm brie',
    guest_name: 'Ivan',
    has_nuts: false,
  },
  {
    dish_name: 'Cheese Plate with Spanish Chorizo',
    description:
      'Manchego, Iberico, Cabrales, fig jam, grapes, pecans, and Spanich Chorizo',
    guest_name: 'Isa',
    has_nuts: true,
  },
  {
    dish_name: 'Fish Tacos',
    description:
      'Battered/fried fish, corn tortillas, fresh slaw with jalepenos and cilantro, pickled red onion',
    guest_name: 'Carlos',
    has_nuts: false,
  },
  {
    dish_name: 'Tropical Fruit Salad',
    description: 'Guava, papaya, pineapple, mango, and star fruit',
    guest_name: 'Sonia',
    has_nuts: false,
  },
  {
    dish_name: 'Pork Gyoza',
    description:
      'Homemade japanese dumplings stuffed with a pork and green onion filling, served with peanut dipping sauce',
    guest_name: 'Karissa',
    has_nuts: true,
  },
  {
    dish_name: 'Yebeg Tibs with Injera Bread',
    description:
      'Marinated lamb dish with rosemary, garlic, onion, tomato, jalapeño and the East African spice berbere',
    guest_name: 'Paulette',
    has_nuts: false,
  },
  {
    dish_name: 'Cape Malay Curry',
    description: 'Chicken and vegitable curry dish with basmati rice',
    guest_name: 'Samuel',
    has_nuts: false,
  },
];

const seedDishes = () => Dish.bulkCreate(dishData);

module.exports = seedDishes;

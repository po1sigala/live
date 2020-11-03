const router = require('express').Router();

//We are using hardcoded data here, where would our data usually come from? Remember - we haven't yet set up a database or Sequelize in our app.
const dishList = {

dishes: [
   
    { 
        dish_name: 'French Bread with Brie Cheese', 
        description: "French baguette with warm brie", 
        has_nuts: false
    },
    { 
        dish_name: 'Cheese Plate with Spanish Chorizo', 
        description: "Manchego, Iberico, Cabrales, fig jam, grapes, pecans, and Spanich Chorizo", 
        has_nuts: true
    },
    { 
        dish_name: 'Fish Tacos', 
        description: "Battered/fried fish, corn tortillas, fresh slaw with jalepenos and cilantro, pickled red onion",
        has_nuts: false
        },
    { 
        dish_name: 'Tripical Fruit Salad', 
        description: "Guava, papaya, pineapple, mango, and star fruit", 
        has_nuts: false
    },
    { 
        dish_name: 'Pork Gyoza', 
        description: "Homemade japanese dumplings stuffed with a pork and green onion filling, served with peanut dipping sauce", 
        has_nuts: true 
    },
    { 
        dish_name: 'Yebeg Tibs with Injera Bread', 
        description: "Marinated lamb dish with rosemary, garlic, onion, tomato, jalapeño and the East African spice berbere", 
        has_nuts: false
    },
    { 
        dish_name: 'Cape Malay Curry', 
        description: "Chicken and vegitable curry dish with basmati rice",
        has_nuts: false
    }
]

}




router.get('/', (req, res) => {
    res.render('all', dishList);
  });


router.get('/:num', (req, res) => {
    return res.render('dish', dishList.dishes[req.params.num - 1]);
})
  

module.exports = router
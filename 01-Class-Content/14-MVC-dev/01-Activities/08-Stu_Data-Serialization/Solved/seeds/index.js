const seedDishes = require('./dish-seeds');
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedDishes();
  console.log('--------------');
  process.exit(0);
};

seedAll();

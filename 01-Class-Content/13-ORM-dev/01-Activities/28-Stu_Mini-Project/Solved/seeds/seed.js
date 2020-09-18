const sequelize = require('../config/connection');
const { Traveller, Location } = require('../models');

const travellerSeedData = require('./travellerSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Traveller.bulkCreate(travellerSeedData);

  await Location.bulkCreate();

  process.exit(0);
};

seedDatabase();

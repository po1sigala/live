const sequelize = require('../config/connection');
const { Traveller, Location } = require('../models');

const travellerSeedData = require('./travellerSeedData.json');
const locationSeedData = require('./locationSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Traveller.bulkCreate(travellerSeedData);

  await Location.bulkCreate(locationSeedData);

  process.exit(0);
};

seedDatabase();

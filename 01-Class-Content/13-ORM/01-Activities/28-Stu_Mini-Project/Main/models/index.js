const Traveller = require('./Traveller');
const Location = require('./Location');
const Trip = require('./Trip');

Traveller.hasMany(Trip, {
  foreignKey: 'traveller_id',
  onDelete: 'CASCADE'
});

Trip.belongsTo(Traveller, {
  foreignKey: 'traveller_id'
});

Location.hasMany(Trip, {
  foreignKey: 'location_id',
  onDelete: 'CASCADE'
});

Trip.belongsTo(Location, {
  foreignKey: 'location_id'
});

Traveller.belongsToMany(Location, {
  // Define the third table needed to store the foreign keys
  through: Trip,
  // Define an alias for when data is retrieved
  as: 'planned_trips',
  foreignKey: 'traveller_id'
});

Location.belongsToMany(Traveller, {
  // Define the third table needed to store the foreign keys
  through: Trip,
  // Define an alias for when data is retrieved
  as: 'location_travellers',
  foreignKey: 'location_id'
});

module.exports = { Traveller, Location, Trip };

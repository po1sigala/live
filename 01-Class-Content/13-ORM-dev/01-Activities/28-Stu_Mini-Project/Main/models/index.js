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
  through: Trip,
  as: 'trip_locations',
  foreignKey: 'traveller_id'
});

Location.belongsToMany(Traveller, {
  through: Trip,
  as: 'location_travellers',
  foreignKey: 'location_id'
});

module.exports = { Traveller, Location, Trip };

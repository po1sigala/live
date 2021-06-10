const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastAccessed: { type: Date, default: Date.now },
});

const Department = mongoose.model('Department', departmentSchema);

// Will add data only if collection is empty to prevent duplicates
// Note that two documents can have the same name value
Department.find({}).exec(function (err, collection) {
  if (collection.length === 0) {
    Department.insertMany(
      [
        { name: 'Produce' },
        { name: 'Dairy' },
        { name: 'Meat' },
        { name: 'Wine' },
        { name: 'Wine' },
        { name: 'Wine' },
        { name: 'Flowers' },
      ],
      function(err) {
        if (err) return handleError(err);
      }
    );
  }
});

module.exports = Department;

const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastAccessed: { type: Date, default: Date.now },
});

const Department = mongoose.model('Department', departmentSchema);

// Will add data only if collection is empty to prevent duplicates
// More than one document can have the same name value
Department.find({}).exec(function (err, collection) {
  if (collection.length === 0) {
    Department.insertMany(
      [
        { name: 'Kids' },
        { name: 'Kids' },
        { name: 'Kids' },
        { name: 'Romance' },
        { name: 'Mystery' },
        { name: 'Contemporary' },
        { name: 'Biography' },
      ],
      function(err) {
        if (err) return handleError(err);
      }
    );
  }
});

module.exports = Department;

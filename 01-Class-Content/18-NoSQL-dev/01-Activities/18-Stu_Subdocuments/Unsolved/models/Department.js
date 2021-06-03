const mongoose = require('mongoose');

// TODO: Add subdocument to departmentSchema
const departmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastAccessed: { type: Date, default: Date.now },
});

// TODO: Use mongoose.model() to create model

// TODO: Create an instance of the Department model that includes a subdocument with the data for three book

module.exports = Department;

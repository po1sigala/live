const mongoose = require('mongoose');

// Child documents or subdocuments can be embedded into a parent document

// The bookSchema defines the shape for the employee subdocument
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: Number,
});

// departmentSchema provides the shape of the parent document
const departmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  // This will include an array that holds all the employees' information
  books: [bookSchema],
  lastAccessed: { type: Date, default: Date.now },
});

// Uses mongoose.model() to create model
const Department = mongoose.model('Department', departmentSchema);

// Uses model to create new instance including subdocument
const bookData = [
  { title: 'Diary of Anne Frank', price: 10 },
  { title: 'One Thousand Years of Solitude', price: 20 },
  { title: 'History of Hogwarts', price: 5 },
];

Department.create({ name: 'Books', books: bookData }, function (err, small) {
  if (err) return handleError(err);
});

module.exports = Department;

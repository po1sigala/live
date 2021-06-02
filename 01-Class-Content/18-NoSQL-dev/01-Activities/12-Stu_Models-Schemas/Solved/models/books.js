// Require schema and model from mongoose
const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

// Construct a new instance of the schema class
const bookSchema = new mongoose.Schema({
  // Configure individual properties using Schema Types
  title: { type: String, required: true },
  author: { type: String, required: false },
  // The type of data is set to 'String' and required is set to false, meaning it will accept null values
  publisher: String,
  stockCount: Number,
  price: Number,
  inStock: Boolean,
  // Use built in date method to get current date
  lastAccessed: { type: Date, default: Date.now },
});

// Using mongoose.model() to compile a model based on the schema 'bookSchema'
const Book = mongoose.model('Book', bookSchema);

// Create a new instance of the model, a document
Book.create({ 
  title: 'Diary of Anne Frank',
  author: 'Anne Frank',
  publisher: 'Scholastic',
  stockCount: 10,
  price: 10,
  inStock: true },
  function (err) {
    if (err) return handleError(err);
});

// Create a new instance with only required title and author
Book.create({ title: 'Oh the Places You Will Go!', author: 'Dr. Seuss' }, function (err) {
  if (err) return handleError(err);
});

// Create a new instance with only required title
Book.create({ title: 'Harold and the Purple Crayon'}, function (err) {
  if (err) return handleError(err)
});

module.exports = Book;

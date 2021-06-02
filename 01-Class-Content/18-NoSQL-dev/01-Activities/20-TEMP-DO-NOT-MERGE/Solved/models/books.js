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
Book.create([
  { title: 'Hello, World', price: 5},
  { title: 'Hello World 2.0', price: 10},
  { title: 'Hello, World 3,0', price: 7},
  { title: 'Hello World 4.0', price: 20},
  { title: 'Hello, World 5.0', price: 2},
  { title: 'Hello World Infinity', price: 20},
  
]);

module.exports = Book;

const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: false },
  publisher: String,
  stockCount: Number,
  price: Number,
  inStock: Boolean,
  lastAccessed: { type: Date, default: Date.now },
});

const Book = mongoose.model('Book', bookSchema);

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

Book.create({ title: 'Oh the Places You Will Go!', author: 'Dr. Seuss' }, function (err) {
  if (err) return handleError(err);
});

Book.create({ title: 'Harold and the Purple Crayon'}, function (err) {
  if (err) return handleError(err)
});

module.exports = Book;

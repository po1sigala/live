// Import Mongoose
const { Schema, model } = require('mongoose');

// User schema
const userSchema = new Schema({
  first: String,
  last: String,
  age: Number,
});

// Create a virtual property `fullName` with a getter and setter
userSchema
  .virtual('fullName')
  // Getter
  .get(function () {
    return `${this.first} ${this.last}`;
  })
  // Setter to set the first and last name
  .set(function (v) {
    const first = v.split(' ')[0];
    const last = v.split(' ')[1];
    this.set({ first, last });
  });

// Define a model
const User = model('User', userSchema);

// Create a user
const ada = new User();

// Set the `first` and `last` name using the `fullName`
ada.fullName = 'Ada Lovelace';

// Log the full name, first name, and last name
console.log('🚀  ada.fullName:', ada.fullName);
console.log('🚀  ada.first:', ada.first);
console.log('🚀  ada.last:', ada.last);

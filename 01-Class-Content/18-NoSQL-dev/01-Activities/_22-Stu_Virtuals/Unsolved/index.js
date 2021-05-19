// Import Mongoose
const { Schema, model } = require('mongoose');

// TODO: Create a User schema called `userSchema`
/* 
  first: String,
  last: String,
  age: Number
*/

// TODO: Create a virtual property `fullName`

// TODO: Create a getter for the virtual that returns the full name of the user (first + last)

// TODO: Create a setter for the virtual that sets the value of the first and last name, given just the `fullName`

// Define a model
const User = model('User', userSchema);

// Create a user
const ada = new User();

// Set the `first` and `last` name using the `fullName`
ada.fullName = 'Ada Lovelace';

// Log our name
console.log('🚀  ada.fullName:', ada.fullName);
console.log('🚀  ada.first:', ada.first);
console.log('🚀  ada.last:', ada.last);

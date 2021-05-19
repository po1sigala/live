const { Schema, model } = require('mongoose');

// TODO: Create a User schema called `userSchema`.
/* 
  first: String,
  last: String,
  age: Number
*/

// TODO: Mongoose will not include virtuals by default, so modify the schema such that it does

// TODO: Create a virtual property `fullName` on the userSchema

// TODO: Create a getter for the virtual that returns the full name of the user (first + last)

// TODO: Create a setter for the virtual that sets the value of the first and last name, given just the `fullName`

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;

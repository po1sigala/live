// So far, we have been storing one piece of data in variables
var name = "Andre";
var pets = 3; 
var isStudent = true;

// To store groups of data in a single variable, you use arrays
var names = ["Andre", "Karl", "Rashida", "Olivia"];

// Since arrays store more than one piece of data, they have a property called length
console.log(names.length);

// Just like variables, the entire array can be logged
console.log(names);

// To log just one of the pieces of data in the array, use index
console.log(names[1]); 

// Arrays are zero-indexed, so the index of first element in the array is 0
console.log(names[0]); 

// You can also use index to replace data in an array
// Returns "Olivia"
console.log(names[3]);

//Replaces Olivia with Carter
names[3] = "Carter"; 

// Logs "Carter"
console.log(names[3]);

// Declares student variable and assigns value "Abdul"
var student = "Abdul";

// Each variable name should be unique, start with a letter, and should be descriptive
var city = "New York";

// Variables hold different types of data, not just text!  
var age = 32;
var isAwesome = true;

// To re-assign a variable, use only the name  
age = 43;
city = "Melbourne";

// Variables can be used to log the their assigned value
// Logs Abdul

console.log(student); 

// Logs New York
console.log(city); 
 
// Pro-Tip: Don't put quotes around variable names!
// Logs student because "student" is read as a value
console.log("student");

// Logs "Abdul" because student (no quotes) is read as a variable that holds the value "Abdul"
console.log(student);

// Variables and values can be concatenated in a single console log using "+"
// Logs "student: Abdul"

console.log("student" + ": " + student);

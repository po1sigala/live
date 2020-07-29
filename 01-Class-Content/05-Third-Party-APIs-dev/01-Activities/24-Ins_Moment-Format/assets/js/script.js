// Print the following answers in the console.
// 1. What is your birthday in the following format: Jan 1st, 1999?
var birthday = moment("1-1-1999", "M-D-YYYY");
var birthdayFormat = birthday.format("MMM Do, YYYY");
$("#1a").text(birthdayFormat);

// 2. What is the day of the week today?
var now = moment();
var day = now.format("[Today is] dddd");
$("#2a").text(day);

// 3. Parse the following date, 11/3/2020, and convert it into any time/date format.
var reformatDate = moment("11/3/20", "MM-DD-YY").format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#3a").text(reformatDate);

// 4. I need to place my recycling bin on the curb on every odd week of the year for collection. Do I need to put out my recycling bin out this week?
var week = now.format("w");
var takeOut;
// Check odd, then even
if(week % 2) {
  takeOut = true;
} else {
  takeOut = false;
}
console.log("It is currently week", week);  
$("#4a").text(takeOut);
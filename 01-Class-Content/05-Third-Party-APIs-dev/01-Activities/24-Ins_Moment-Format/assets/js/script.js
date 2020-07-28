// Print the following answers in the console.
// TODO: What is today's date in the following format: Jan 1st, 1999?
var now = moment();
console.log(now);

// Current Date
console.log(now.format("MM/DD/YY"));

// Current day
console.log(now.format("[Today is] dddd"));

// Parse the following date, 11/3/2020, and convert it into any time/date format.
console.log(moment("11/3/20", "MM-DD-YY").format("dd MMM Do, YYYY, hh:mm:ss"));
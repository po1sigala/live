// Print the following answers in the console.
// 1. What is today's date in the following format: Jan 1st, 1999?
var now = moment();
console.log(now.format("MM Do, YYYY"));

// 2. What is the day of the week today?
console.log(now.format("[Today is] dddd"));

// 3. Parse the following date, 11/3/2020, and convert it into any time/date format.
console.log(moment("11/3/20", "MM-DD-YY").format("dd MMM Do, YYYY, hh:mm:ss"));

// 4. I need to place my recycling bin on the curb on every odd week of the year for collection. Do I need to put out my recycling bin out this week?
console.log(now.format("w"));  
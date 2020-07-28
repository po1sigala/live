// Moment Methods

// Print the following answers in the console.
var today = moment();
// 1. What day out of this year is Christmas? (dayNum of 365)
var newYearsDay = moment("2020-01-01");
var christmasDay = moment("20201225");
var dayNum = christmasDay.diff(newYearsDay, "days");
console.log(dayNum); // 359


// 2. Programmatically find the 100th day of the current year.

// 2a. Find the start of this year
var startOfThisYear = moment().startOf('year');

// 2b. Find 100 days after the beginning of this year
var hundredDays = startOfThisYear.add("100", "days").format("dddd MMMM Do, YYYY");
console.log(hundredDays); // Friday April 10th, 2020

// 4. How much time until I graduate on June 15, 2022?
console.log(today.to(moment("2022-06-15")));

// 4. Check if the Unix time, 1009872000, is before today, then convert into a date to verify
console.log(moment("1009872000", "X").isAfter(today)); // false

console.log(moment("1009872000", "X").format("dddd MMMM Do, YYYY"));



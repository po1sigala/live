// Print the following answers in the console.

// What day of this year is Christmas?
var newYearsDay = moment("2020-01-01");
var christmasDay = moment("20201225");
var daysDiff = newYearsDay.diff(christmasDay, "days");
console.log(daysDiff); // 359


// Programmatically find the 100th day of the current year?
// 1. Find the start of this year
var startOfThisYear = moment().startOf('year');
// 2. Find 100 days after the beginning of this year
var hundredDays = startOfThisYear.add("100", "days").format("dddd MMMM Do, YYYY");
console.log(hundredDays); // Friday April 10th, 2020

// Check if newYearsDay is before Christmas
newYearsDay.isBefore(christmasDay); // false
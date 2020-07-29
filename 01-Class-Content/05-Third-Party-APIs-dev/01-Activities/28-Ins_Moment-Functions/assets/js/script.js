// Moment Methods

// Print the following answers in the console.
// 1. What day out of 365(6) is Christmas? (dayNum of 365)
var today = moment();
var newYearsDay = moment("2020-01-01");
var christmasDay = moment("20201225");
var dayNum = christmasDay.diff(newYearsDay, "days");
console.log(dayNum); // 359
$("#1a").text(dayNum);

// 2. Programmatically find the 100th day of the current year.
// 2a. First select the start of this year
var startOfThisYear = today.startOf("year");

// 2b. Find 100 days after the beginning of this year
var hundredDays = startOfThisYear.add("100", "days").format("dddd MMMM Do, YYYY");
$("#2a").text(hundredDays); // Friday April 10th, 2020

// Display the variable today in a date format. 
// How did this change from the original declaration?
console.log("Is this still today? ", today.format("dddd MMM Do, YYYY")); // Friday April 10th, 2020

// 3. How much time until I graduate this course? (enter in your grad date)
var gradDate = moment().to(moment("2021-06-15"));
$("#3a").text(gradDate); // in a year

// 4. Is the Unix time, 160948800, after today? Format the date to verify.
// 4a. The date is after today 
var inFuture = moment("160948800", "X").isAfter(moment());
$("#4a").text(inFuture); // false

// 4b. The date formatted legibly 
var date = moment("160948800", "X").format("dddd MMMM Do, YYYY"); 
$("#4a").append("<br>" + date); // Thursday February 6th, 1975

// 5. Calculate how many minutes until the beginning of the next hour.
// 5a. First select the start of the next hour
var nextHour = moment().add("1", "hour").startOf("hour");

// console.log(nextHour.format("dddd MMM Do, YYYY [and] HH:mm:ss"));

var minutesTo = nextHour.diff(moment(), "minutes");
$("#5a").text(minutesTo); 
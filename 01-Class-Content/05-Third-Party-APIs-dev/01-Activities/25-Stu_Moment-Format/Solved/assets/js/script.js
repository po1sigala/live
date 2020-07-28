// Print the following answers in the console.
// TODO: What is today's date in the following format: Jan 1st, 1999?
console.log(moment().format("MMM Do, YYYY"));

// TODO: What day of the week will 1/1/2022 be?
console.log(moment("1-1-2022", "M-D-YYYY").format("ddd MMM Do, YYYY"));

// TODO: What day of the year is today? (out of 365)
console.log(moment().format("DDD"));

// TODO: What is the current time in the following format: HH:MM:SS
console.log(moment().format("hh:mm:ss"));

// TODO: What is the current Unix Timestamp?
console.log(moment().format("X"));

// TODO: Parse the following Unix timestamp, 1318781876, and convert into any time/date format.
console.log(moment.unix(1318781876).format("MMM Do, YYYY, hh:mm:ss"));
// We use Promise.all to resolve an array of promises

const apiCallDurations = [3000, 4000, 5000, 6000];
const maxDuration = 9999;

// Here we set up a function called `callApi` which will resolve if the request isn't taking too long and reject if it is too long
const callAPI = (duration) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // Check if the request duration is longer than maxDuration, if so call the reject() function with a new error, "Request timed out"
      // Otherwise, call resolve() with a message `Response received: ${duration}ms`
    }, duration);
  });

// Promise.all() takes an array, so here we declare one in memory
const promises = [];

// Map through API call durations and push a callAPI() promise for each request and push it to the promises array

// Call Promise.all() by passing in the array of promises

// Add a `.then` statement that will console log the response when all the promises resolve

// Add a `.catch` statement that will catch any rejects if any of the requests fail

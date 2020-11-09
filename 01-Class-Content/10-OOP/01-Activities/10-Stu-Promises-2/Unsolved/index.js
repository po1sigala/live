// We use Promise.all to resolve an array of promises

const apiCallDurations = [3000, 4000, 5000, 6000];
const maxDuration = 9999;

// Here we set up a function called `callApi` which will resolve if the request isn't taking too long and reject if it is too long
const callAPI = (duration) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // TODO: Check if the duration is longer than maxDuration and reject() or resolve() the promise
    }, duration);
  });

// Promise.all() takes an array, so here we declare one in memory
const promises = [];

// TODO: Iterate over the apiCallDurations and push a callAPI() promise for each one onto the promises array

// TODO: Use Promise.all() to capture when the array of promises has been resolved or if any of them were rejected

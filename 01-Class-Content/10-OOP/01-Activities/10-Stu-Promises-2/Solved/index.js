// We use Promise.all to resolve an array of promises

const apiCallDurations = [3000, 4000, 5000, 6000];
const maxDuration = 9999;

// Here we set up a function called `callApi` which will resolve if the request isn't taking too long
const callAPI = (duration) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // If the movie is too long we reject the promise
      if (duration >= maxDuration) {
        reject(new Error(`This request timed out`));
      } else {
        // If the movie isn't too long then we resolve the promise
        resolve(`Response received: ${duration}ms`);
      }
    }, duration);
  });

// Promise.all() takes an array, so here we declare one in memory
const promises = [];

// Here we create an array of promises for which to run Promise.all with
apiCallDurations.map((duration) => promises.push(callAPI(duration)));
console.log('Promises array before the timeouts have finished: ', promises);

// Promise.all will resolve when all promises in the array have been resolved
// Promise.all will reject if any of the promises in that array was rejected
Promise.all(promises)
  .then((response) => console.log('Response from Promise.all():', response))
  .catch((err) => console.error(err));

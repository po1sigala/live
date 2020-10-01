// We use Promise.all to resolve an array of promises

const movieDurations = [3000, 4000, 5000, 6000];

// Here we set up a function called `watchMovie` which will resolve if the movie isn't too long and has been watched
const watchMovie = (movieDuration) =>
  new Promise((resolve, reject) => {
    const maxDuration = 9999;
    setTimeout(() => {
      // If the movie is too long we reject the promise
      if (movieDuration >= maxDuration) {
        reject(new Error(`One of these movies is too long!`));
      } else {
        // If the movie isn't too long then we resolve the promise
        resolve(`Watched movie in ${movieDuration}`);
      }
    }, movieDuration);
  });

// Promise.all() takes an array, so here we declare one in memory
let promises = [];

// Here we create an array of promises for which to run Promise.all with
movieDurations.map((duration) => promises.push(watchMovie(duration)));
console.log('Promises array before the timeouts have finished: ', promises);

// Promise.all will resolve when all promises in the array have been resolved
// Promise.all will reject if any of the promises in that array was rejected
Promise.all(promises)
  .then((response) => console.log('Response from Promise.all():', response))
  .catch((err) => console.error(err));

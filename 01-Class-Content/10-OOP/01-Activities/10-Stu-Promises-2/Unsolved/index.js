// We use Promise.all to resolve an array of promises

const movieDurations = [3000, 4000, 5000, 6000];
const maxDuration = 9999;

const watchMovie = (movieDuration) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // Check if the movie is longer than maxDuration, if so call the reject() function with a new error, "Movie too long"
      // Otherwise, call resolve() with a message `Watched movie in ${movieDuration}`
    }, movieDuration);
  });

// Promise.all() takes an array, so here we declare one in memory
const promises = [];

// Map through movie durations and push a watchMovie() call for each movie and push it to the promises array

// Call Promise.all() by passing in the array of promises

// Add a `.then` statement that will console log the response when all the promises resolve

// Add a `.catch` statement that will catch any rejects if any of the promises fail

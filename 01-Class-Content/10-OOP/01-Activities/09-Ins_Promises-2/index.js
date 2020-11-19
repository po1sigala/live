// Promise.all() accepts an iterable and returns a promise containing the results of those promises;

const p1 = Promise.resolve('Resolved!');
const p2 = 12345678;
const p3 = new Promise((resolve, reject) => {
  const time = 1000;

  if (time < 1000) {
    reject(new Error('Something went wrong'));
  } else {
    setTimeout(() => {
      resolve('Hello, I waited 1 second');
    }, time);
  }
});

console.log('Status of p3:', p3);

Promise.all([p1, p2, p3])
  .then((values) => {
    console.log('\nThe returned array from our Promise.all() call:');
    console.log(values);
  })
  .catch((err) => new Error(err));

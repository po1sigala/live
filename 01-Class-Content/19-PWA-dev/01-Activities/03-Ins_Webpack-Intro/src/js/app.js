console.log('Hello webpack!');

const current = new Date(Date.now());

console.log(`The current time is: ${current.toString()}`);

const start = Date.now();

console.log('starting timer...');
// expected output: starting timer...x  x

// Simple countdown of 2 seconds.
setTimeout(() => {
  const millis = Date.now() - start;

  console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);
  // expected output: seconds elapsed = 2
}, 2000);

// logs each second
const counter = () => {
  setInterval(() => {
    console.log('seconds counter');
  }, 1000);
};

counter();

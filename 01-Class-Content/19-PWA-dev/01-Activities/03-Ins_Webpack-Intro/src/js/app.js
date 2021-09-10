console.log("Hello webpack!");

const current = new Date(Date.now());

alert(`The current time is: ${current.toString()}`);

const start = Date.now();

console.log('starting timer...');
// expected output: starting timer...x  x 

setTimeout(() => {
  const millis = Date.now() - start;

  console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);
  // expected output: seconds elapsed = 2
}, 2000);


const counter = () => {

  setInterval(() => {
    console.log("seconds counter")
  }, 1000);
}

counter();
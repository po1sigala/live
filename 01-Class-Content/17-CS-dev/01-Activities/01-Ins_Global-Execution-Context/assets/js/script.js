// Global execution context
const carNoise = 'Honk';
// Global execution context goFast
// Functional execution context speed
function goFast(speed) {
  // Functional execution context for makeNoise and sound
  function makeNoise(sound) {
    console.log(`My speed is at ${speed}, time to ${sound}`);
  }

  // Call a function to place on the call stack
  makeNoise(carNoise);
}

// Call a function to place on the call stack
// confirm is a Web API, once resolved is stored in the callback queue
if(confirm("Do you want to go fast?")) {
  goFast(80);
}

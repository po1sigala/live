// 1) Where is carNoise stored?
// Global execution context (GEC)
const carNoise = 'Honk';
// 2) Where is goFast stored?
// Global execution context (GEC)
function goFast(speed) {
  // 5) When is speed assigned a value? Where is this value stored?
  // When goFast is invoked, the argument of the function is assigned to the parameter, speed, 
  // in the functional execution context of goFast
  // 6) Where is makeNoise stored?
  // makeNoise is stored in the function execution context of goFast
  function makeNoise(sound) {
    // carNoise is then assigned to sound in the function execution context of makeNoise
    // console.log is then placed on the call stack which then logs the statement
    console.log(`My speed is at ${speed}, time to ${sound}`);
  }

  // 7) What happens in the following statement?
  // makeNoise is placed on the call stack which creates a new function execution context
  makeNoise(carNoise);
}

// 3) What happens in the following statement?
// Since confirm is a Web API, once resolved, goes to the callback queue, then in the call stack
if(confirm("Do you want to go fast?")) {
  // 4) What happens in the following statement?
  // goFast is placed on the call stack which creates a new FEC
  goFast(80);
}

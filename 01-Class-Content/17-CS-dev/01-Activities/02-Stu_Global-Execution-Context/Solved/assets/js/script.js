// 1) Where is carNoise stored?
// Global execution context (GEC)
const carNoise = 'Honk';
// 2) Where is goFast stored?
// Global execution context (GEC)
// 5) When is speed assigned a value? Where is this value stored?
// When goFast is invoked. 80 assigned to speed in the functional execution context or FEC of goFast
function goFast(speed) {
  // 6) Where is makeNoise stored?
  // makeNoise is stored in the functional context of goFast
  function makeNoise(sound) {
    console.log(`My speed is at ${speed}, time to ${sound}`);
  }

  // 7) What happens in the following statement?
  // makeNoise is placed on the call stack which creates a new FEC
  // carNoise is then assigned to sound
  makeNoise(carNoise);
}

// 3) What happens in the following statement?
// Since confirm is a Web API, once resolved it's stored in the callback queue
if(confirm("Do you want to go fast?")) {
  // 4) What happens in the following statement?
  // goFast is placed on the call stack which creates a new FEC
  goFast(80);
}

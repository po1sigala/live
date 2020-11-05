// 1) Where is carNoise stored?
//
const carNoise = 'Honk';
// 2) Where is goFast stored?
// 
// 5) When is speed assigned a value? Where is this value stored?
// 
function goFast(speed) {
  // 6) Where is makeNoise stored?
  //
  function makeNoise(sound) {
    console.log(`My speed is at ${speed}, time to ${sound}`);
  }

  // 7) What happens in the following statement?
  // 
  makeNoise(carNoise);
}

// 3) What happens in the following statement?
// 
if(confirm("Do you want to go fast?")) {
  // 4) What happens in the following statement?
  // 
  goFast(80);
}

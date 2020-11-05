// Function returns the index of the target if found
function indexOfNum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if( arr[i] === target) {
      break;
    }
  }

  return i;
}

module.exports = indexOfNum;

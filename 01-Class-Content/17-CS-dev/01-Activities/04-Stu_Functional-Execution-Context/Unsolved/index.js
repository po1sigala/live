// what is the index for the target number?
function indexOfNum(arr = [1,2], target = 1) {
  for (let i = 0; i < arr.length; i++) {
    let foundIndex;
    if( arr[i] === target) {
      foundIndex = i;
    }
  }

  return foundIndex;
}

module.exports = indexOfNum;

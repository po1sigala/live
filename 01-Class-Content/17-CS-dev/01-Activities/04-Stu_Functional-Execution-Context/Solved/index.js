// function accepts an array and the target to search for
function indexOfNum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === target) {
      // i exists in the functional execution context of indexOfNum, but not outside the function
      return i;
    }
  }
}

module.exports = indexOfNum;

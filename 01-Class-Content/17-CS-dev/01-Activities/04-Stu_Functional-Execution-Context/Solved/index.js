// what is the index for the target number?
function indexOfNum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if( arr[i] === target) {
      return i;
    }
  }
}

console.log(indexOfNum());

module.exports = indexOfNum;

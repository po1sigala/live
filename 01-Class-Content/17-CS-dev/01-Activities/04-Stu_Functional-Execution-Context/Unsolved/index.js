// returns the average value of an array of numbers
function avg(array) {
  function sum() {
    let total = 0;
    for(let i = 0; i < array.length; i++) {
      total += array[i];
    }
    // returns the sum of the array to the function invocation
  }
  
  return total/array.length;
}

module.exports = avg;

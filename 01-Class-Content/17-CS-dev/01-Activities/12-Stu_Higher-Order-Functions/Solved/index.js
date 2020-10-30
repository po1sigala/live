const grades = [56, 78, 99, 85];

// We receive the accumalator, currentValue, index, and the array from the reduce method.
function findAverage(accumalator, currentValue, index, array) {
  // Check to see if we are at the end of the given array.  
  if (index === array.length - 1) {
    // Once we have reached the end of the array we divide by how many elements are in the given array.  
    return (accumalator + currentValue) / array.length;
  }

  // Add the current value to our total.
  return accumalator + currentValue;
}

// Pass the 'findAverage' function into the reduce method.
console.log(grades.reduce(findAverage));

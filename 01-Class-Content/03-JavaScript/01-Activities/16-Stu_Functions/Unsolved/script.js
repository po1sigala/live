// isEqual using function declaration
function isEqual(x, y) {
  if (x === y) {
    console.log('They are equal in type and value');
  } else if (x == y) {
    console.log('They are equal in value');
  } else {
    console.log('They are not equal');
  }
  return;
}

// Logs "They are equal in type and value"
isEqual(10, 10);

// Logs "They are equal in value"
isEqual('10', 10);


// TODO: Rewrite isEqual as a function expression called 'isEqualTakeTwo`.
// Refer to sample function expression as needed!

// Logs "They are not equal"
isEqualTakeTwo(10, true);


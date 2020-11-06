// the Fibonacci sequence 1 1 2 3 5 8 13 21 34 55 89
function fibonacci(number) {
  // The base case or exit condition is required for all recursive functions
  // Ensures terms 0 and 1 will return 1 as shown in the sequence above
  if (number <= 1) {
    return 1;
  }

  // Returns the sum of the two previous numbers until we reach the base case.
  // The fibonacci function recursively calls itself untill it can no longer go down. In other words, it has reached its base case.
  return fibonacci(number - 1) + fibonacci(number - 2);
}

module.exports = fibonacci;

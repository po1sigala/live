// the Fibonacci sequence 1 1 2 3 5 8 13 21 34 55 89
function fibonacci(number) {
  // The base case or exit condition is required for all recursive functions
  // Ensures terms 0 and 1 will return 1 as shown in the sequence above
  if (number <= 1) {
    return 1;
  }

  // The current term is the sum of the previous two terms.
  return fibonacci(number - 1) + fibonacci(number - 2);
}

module.exports = fibonacci;

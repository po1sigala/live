// the Fibonacci sequence 1 1 2 3 5 8 13 21 34 55 89
function fibonacci(number) {
  // The base case or exit condition is required for all recursive functions
  // Returning 1 ends the recursive calls, exiting the loop
  if (number <= 1) {
    return 1;
  }

  // The current term is evaluated by adding the sum of two preceding terms
  // By calling itself, we form a loop. 
  // With each subsequent call smaller arguments are used until the base condition is reached
  return fibonacci(number - 1) + fibonacci(number - 2);
}

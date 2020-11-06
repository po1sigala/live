function fibonacci(number) {
  // Check to see if the given value is less than two, creating a base case.
  // By looking at the fibonaci 1, 1, 2, 3, 5, 8, 13, 21, 34,... we notice 1 is at the first two positions.
  // If the position is 1 or 2 it should return 1.
  if (number > 2) {
    return number;
  }

  // Returns the sum of the two previous numbers until we reach the base case.
  // The fibonacci function recursively calls itself untill it can no longer go down. In other words, it has reached its base case.
  return fibonacci(number - 1) + fibonacci(number - 2);
}

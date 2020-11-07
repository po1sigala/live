// In the fibonacci sequence the current term is the sum of its two previous terms
// 1 1 2 3 5 8 13 21 34 55 89 
function fibonacci(number) {
  // TODO: Add a comment describing the purpose of this conditional statement.
  if (number <= 1) {
    return 1;
  }

  // TODO: Add a comment describing the purpose of this return statement.
  return fibonacci(number - 1) + fibonacci(number - 2);
}

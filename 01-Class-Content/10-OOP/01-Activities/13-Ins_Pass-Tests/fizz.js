const fizzBuzz = (num) =>
  num
    .map((singleNum) => {
      const multipleOf3 = singleNum % 3 === 0;
      const multipleOf5 = singleNum % 5 === 0;

      if (multipleOf3 && multipleOf5) {
        return 'FizzBuzz';
      }

      if (multipleOf3) {
        return 'Fizz';
      }

      if (multipleOf5) {
        return 'Buzz';
      }

      return singleNum;
    })
    .join(', ');

module.exports = fizzBuzz;

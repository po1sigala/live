const OverloadDemo = function () {
  this.area = function (x, y) {
    console.log('this.area -> x', x);
    !y
      ? console.log('this.area -> y Not provided')
      : console.log('this.area -> y', y);

    if (y) {
      return `the area of the rectangle is ${x * y} sq units`;
    }
    return `the area of the square is ${Math.pow(x, 2)} sq units`;
  };
};

const square = new OverloadDemo();
console.log('square.area(5)', square.area(5, 7));
// console.log('square.area(5)', square.area(5));

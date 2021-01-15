
// We change the `message` variables scope by using `let` instead of `var`.
const addGreetingMessage = (name) => {
  let message = "How are you?"

  if(name.length > 0){
      let message = "Hello " + name
      console.log(message)
  }

  console.log(message)
}

addGreetingMessage('Tammy')

// We use `let` instad of `const` so we can use the `callout` variable name twice without the worrying about hoisting.
const calloutCounter = () => {
  let callout = 'Outside of the loop'
  let counter = 5

  while( counter > 0) {
      let callout = 'Inside the loop';
      console.log(counter, callout)
      counter--
  }

  console.log(callout);
}

calloutCounter()

// We use `let` to make sure our `index` variables can only be accessed within their scope.
// By using `const` we can insure that `line` and `element` will not be renamed.
const countMatrix = (matrix) => {
  for (let index = 0; index < matrix.length; index++) {
    const line = matrix[index];
    for (let index = 0; index < line.length; index++) {
      const element = line[index];
      console.log(element);
    }
  }
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

countMatrix(matrix);
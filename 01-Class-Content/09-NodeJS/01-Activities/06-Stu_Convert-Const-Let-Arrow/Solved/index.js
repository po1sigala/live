
//TODO: add comments
const addGreetingMessage = (name) => {
  let message = "How are you?"

  if(name.length > 0){
      let message = "Hello " + name
      console.log(message)
  }

  console.log(message)
}

addGreetingMessage('Tammy')

//TODO: add comments
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

//TODO: add comments
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
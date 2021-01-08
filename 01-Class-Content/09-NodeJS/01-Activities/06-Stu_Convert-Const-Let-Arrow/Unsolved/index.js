
//TODO: Fix the declarations so that the function works properly.
const addGreetingMessage = (name) => {
  var message = "How are you?"

  if(name.length > 0){
      var message = "Hello " + name
      console.log(message)
  }

  console.log(message)
}

addGreetingMessage('Tammy')

//TODO: Fix the declarations so that the function works properly.
const calloutCounter = () => {
  const callout = 'Outside of the loop'
  var counter = 5

  while( counter > 0) {
      var callout = 'Inside the loop';
      console.log(counter, callout)
      counter--
  }

  console.log(callout);
}

calloutCounter()

//TODO: Fix the declarations so that the function works properly.
const countMatrix = (matrix) => {
  for (var index = 0; index < matrix.length; index++) {
    var line = matrix[index];
    for (var index = 0; index < line.length; index++) {
      var element = line[index];
      console.log(element);
    }
  }
}

var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

countMatrix(matrix);
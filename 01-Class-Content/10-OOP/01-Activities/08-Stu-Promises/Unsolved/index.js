// First we start with grabbing the response from the user and store it in a variable
const userInput = process.argv[2];
console.log('Current user activity:', userInput);

// We then create a boolean `studentDistracted` to help decipher whether or not the student is coding
const studentDistracted = userInput !== 'coding';

// NOTE: The code below is an example function that uses callbacks
const callback = (message) => console.log(message);
const errorCallback = (message) => console.log(message);

const practiceCoding = (cb, errCb) => {
  if (studentDistracted) {
    errCb({
      issue: 'Distracted',
      message: 'Coding stopped',
    });
  } else {
    cb('We are coding!');
  }
};

practiceCoding(callback, errorCallback);

// NOTE: Rewrite the above function so that it returns a promise instead
const practiceCodingPromise = () => {
  // Your code here
};

// Finally, call the function practiceCodingPromise() and make sure you include a `.then`, and `.catch`

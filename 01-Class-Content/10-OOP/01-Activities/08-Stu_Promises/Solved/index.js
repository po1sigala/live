// First we start with grabbing the response from the user and store it in a variable
const userInput = process.argv[2];
console.log('Current user activity:', userInput);

// Provide some instructions and stop execution to the user if they forgot to provide input
if (!userInput) {
  console.error(
    '\nPlease pass in the current activity of the student \nUsage: `node index <action>`'
  );
  process.exit();
}

// We then create a boolean `studentDistracted` to help decipher whether or not the student is coding
const studentDistracted = userInput !== 'coding';

// NOTE: The code below is a function that uses callbacks
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

// Rewrite the above function so that it returns a promise instead
const practiceCodingPromise = () =>
  new Promise((resolve, reject) =>
    studentDistracted
      ? reject(new Error('Coding stopped - Student is distracted'))
      : resolve('We are coding!')
  );

practiceCodingPromise()
  .then(() => console.log('We are coding in promises!'))
  .catch((err) => console.error('Promise rejected:', err));

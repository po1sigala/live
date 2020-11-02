// Follow the thread of execution ordered by number and answer the following questions.

// 1) Where is the variable, greeting, stored?
// Global Execution Context
const greeting = 'Hello';

// 2) Where is sayHello stored?
// Global Execution Context
function sayHello() {
  // 5) Where is the variable, body, stored?
  // Functional Execution Context
  const body = 'World';

  // 6) Explain what happens in this statement.
  // Hint: Name the data structures in the correct order.
  // console.log is stored in the Callback queue, then passed by the Event Loop into the Call Stack for processing.
  console.log(`${greeting} ${body}`);
}

// 3) Explain what happens in this statement.
// Hint: Name the data structures in the correct order.
// Alert is first stored in the Callback queue, then passed by the Event Loop into the Call Stack for processing.
alert("What's up doc?");

// 4) What happens with this statement?
// Stored in the Call Stack for processing.
sayHello();

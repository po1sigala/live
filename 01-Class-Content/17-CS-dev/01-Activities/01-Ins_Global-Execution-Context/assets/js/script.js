// Follow the thread of execution ordered by number and answer the following questions.

// 1) Where is the variable, greeting, stored?
// Global execution context
const greeting = 'Hello';

// 2) Where is sayHello stored?
// Global execution context
function sayHello() {
  // 5) Where is the variable, body, stored?
  // Functional execution context
  const body = 'World';

  // 6) Explain what happens in this statement.
  // Hint: Name the data structures in the correct order.
  // console.log is stored in the callback queue, then passed by the event Loop into the call stack for processing.
  console.log(`${greeting} ${body}`);
}

// 3) Explain what happens in this statement.
// Hint: Name the data structures in the correct order.
// Alert is first stored in the callback queue, then passed by the event Loop into the call stack for processing.
alert("What's up doc?");

// 4) What happens with this statement?
// Stored in the call stack for processing.
sayHello();

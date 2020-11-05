// Follow the thread of execution 
// 1) greeting is stored in the global execution context
const greeting = 'Hello';

// 2) sayHello is stored in the global execution context
function sayHello(name) {
  // 5) Once the sayHello execution context is created, "Gabby" is assigned to name
  // 6) body is stored in the function execution context of sayHello
  const salutation = 'how are you?';

  // 7) The global execution context is accessible as well as the local function execution context
  console.log(`${greeting} ${name}, ${salutation}`);
}

// 3) The alert is a Web API, once resolved, is stored in the callback queue then the call stack
alert("What's up doc?");

// By calling sayHello, it is placed on the call stack which creates a new execution context
sayHello("Gabby");

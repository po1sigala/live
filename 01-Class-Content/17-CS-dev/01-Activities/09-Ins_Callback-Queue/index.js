// Follow the thread of execution
function outer() {
  // timer is set to 10 milliseconds, this resolves first then stores in the callback queue
  setTimeout(() => {
    console.log("Hello world")
  }, 10);

  function inner() {
    // Although the timer is zero, this log occurs after the statement below due to the event loop
    setTimeout(() => {
      console.log("Are you listening?")
    }, 0);
    console.log("Yes, I'm listening");
  }

  // inner function is called
  inner();
  console.log("I like turtles")
}

// outer function is called
outer();

// console
// Yes, I'm listening
// I like turtles
// Are you listening?
// Hello world
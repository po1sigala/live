// Follow the thread of execution
function answer() {
  // 
  setTimeout(() => {
    console.log("Hello world")
  }, 10);

  function response() {
    // Although the timer is zero, this log occurs after the statement below due to the event loop
    setTimeout(() => {
      console.log("Are you listening?")
    }, 0);
    console.log("Yes, I'm listening");
  }

  response();
  console.log("I like turtles")
}

answer();
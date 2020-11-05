// In the browser, this in the Global Execution Context is the window
const globalThis = this;

function myFunc() {
  console.log('globalThis', globalThis);
  console.log('myFuncThis', this);
  // In the FEC, a new reference to this is created
  console.log(globalThis === this);
}

// function call goes on the call stack
myFunc();

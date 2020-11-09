const counter = document.getElementById('counter');
const sleep = document.getElementById('sleep');
// represents a large resource to block the call stack
const block = milliSeconds => {
  // get the current time
  var startTime = new Date().getTime(); 
  // block stack until time's up
  while (new Date().getTime() < startTime + milliSeconds); 
}

// track click count
counter.addEventListener('click', event => {
  counter.innerHTML = `Click count: ${event.detail}`;
});

sleep.addEventListener('click', () => {
  block(8000);
});

block(8000);

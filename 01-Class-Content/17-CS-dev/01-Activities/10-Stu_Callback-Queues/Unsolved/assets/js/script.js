const counter = document.getElementById('counter');
const sleep = document.getElementById('sleep');
// represents an API network request
const block = milliSeconds => {
  // get the current time
  var startTime = new Date().getTime(); 
  // block stack until time's up
  while (new Date().getTime() < startTime + milliSeconds); 
}

counter.addEventListener('click', event => {
  counter.innerHTML = `Click count: ${event.detail}`;
});

sleep.addEventListener('click', event => {
  block(80);
});

block(18000);

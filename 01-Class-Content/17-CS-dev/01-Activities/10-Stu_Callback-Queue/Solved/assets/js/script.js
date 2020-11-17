const counter = document.getElementById('counter');
const sleep = document.getElementById('sleep');

// represents a blocking process such as an API network request
const block = milliSeconds => {
  // get the current time
  var startTime = new Date().getTime(); 
  // block stack until time's up
  while (new Date().getTime() < startTime + milliSeconds); 
}

counter.addEventListener('click', event => {
  counter.innerHTML = `Click count: ${event.detail}`;
});

sleep.addEventListener('click', () => {
  block(8000);
});

// Sends the blocker to the callback queue with a delay to free up UI on page load
setTimeout(() => {
  block(8000);
}, 8000);

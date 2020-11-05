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

sleep.addEventListener('click', event => {
  setTimeout(() => {
    block(18000);
  }, 0);
});

setTimeout(() => {
  block(18000);
}, 10000);

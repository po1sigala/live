const buttonEl = document.getElementById('my-button');

const clickHandler = function () {
// Create a 'count' variable which will be a part of the clickHadler function's lexical environment.
  let count = 0;

  // return an inner function which creates closure. 
  return function () {
  
   // Increase the locally scoped 'count' variable by one. 
    count++;
   //Use a template literal to display the 'count' variable onto the button element. 
    this.textContent = `Clicks: ${count}`;
  };
};

buttonEl.addEventListener('click', clickHandler());
// TODO: Add a comment describing the purpose of this route
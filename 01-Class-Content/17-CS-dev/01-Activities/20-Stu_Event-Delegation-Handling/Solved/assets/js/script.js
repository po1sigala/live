// Select the HTML element that we want to attach our event listener too.
const buttons = document.getElementsByTagName('button');

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

// Loop through the buttons array and for each button attach the `clickHandler` to it.
// Now each button has a backpack with its own reference to `count` instead of a reference to a global variable.
// Instead of doing a costly read and/or write on the DOM, we now only mutate the private `count`
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', clickHandler());
}
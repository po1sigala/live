// Select the desired button in the HTML document.
const buttonEl = document.getElementById('my-button');

// Create the function we are going to use when the button is clicked.
const clickHandler = function() {
  // Store our `data-count` attribute inside of a variable where we will track how many times the button has been clicked.  
  let count = parseInt(this.getAttribute('data-count'));

  // Increase the `count` variable by one.
  count++;

  // Set the `count` variable to the `data-count` attribute inside the HTML document.
  this.setAttribute('data-count', count);

  // Display our `count` variable inside of the button.
  this.textContent = `Clicks: ${count}`;
};

// Bind our newly created function to the 'click' event listener.
buttonEl.addEventListener('click', clickHandler);
// Ensure the document is rendered when manipulating DOM elements
$(document).ready(function () {
  // Assemble: Create/select DOM elements
  var rootEl = $("#root");
  rootEl.prepend("<h1>Tic Tac Toe</h1>");

  // TODO: Starting from the root element, select all the boxes and turn them white in a single statement. 
  // HINT: Use the `.css` function to change element's background color


  // TODO: Starting from `rootEl`, what is the statement that will use "O" to block the "X" from winning
  // HINT: Use the `.closest`, or `.parent` methods to go UP the DOM tree


  // TODO: Starting from the bottom row, middle square or `.item-c2`, what is the statement that will win the game using "O"
  // HINT: Use the ".closest()", or ".parent()" methods to go up the DOM tree

});

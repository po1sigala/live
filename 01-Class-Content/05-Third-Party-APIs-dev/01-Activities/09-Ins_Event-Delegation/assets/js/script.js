function renderLetters() {
  var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

  // Dynamically create buttons
  // Create a for-loop to iterate through the letters array.
  for (var i = 0; i < letters.length; i++) {
    // Create button
    var letterBtn = $("<button>");
    // Assign style to the button  
    letterBtn.addClass("letter-button letter letter-button-color");
    // Assign the letter to the data-letter attribute
    letterBtn.attr("data-letter", letters[i]);
    // Display the letter
    letterBtn.text(letters[i]);
    // Attach the letter element
    $("#buttons").append(letterBtn);
  }
}

$(document).ready(function() {
  // Assemble the DOM elements
  var renderLetterEl = $("<button class='buttons'>Display</button>");
  var listEl = $("#buttons");
  listEl.append(renderLetterEl); 
  // Display button will display the letters
  var displayEl = $("#display");
  // Clear button will clear the refrigerator of letters
  var clearEl = $("#clear");
  // Hide the Clear button until the letters are displayed
  clearEl.hide();
  
  // Delegate event listener to the parent element, <div id="buttons"> 
  listEl.on("click", ".letter-button", function() {
    var fridgeMagnet = $("<div>");
    fridgeMagnet.addClass("letter fridge-color");
    fridgeMagnet.text($(this).attr("data-letter"));
    displayEl.append(fridgeMagnet);
  });

  // Renders the letters on the Display button
  renderLetterEl.on("click", function() {
    renderLetters();
    renderLetterEl.hide();
    clearEl.show();
  })
  // Clears the refrigerator of letter on click
  clearEl.on("click", function() {
    displayEl.empty();
  });
});

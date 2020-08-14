// Function returns a random character that includes alphanumeric and special character values
function getPasswordCharacter() {
  return String.fromCharCode(Math.floor(Math.random() * 77) + 34);
}

// Function returns a string of concatenated characters of length num
function passwordGenerator(num) {
  var password = "";
  for (var i = 0; i < num; i++) {
    password += getPasswordCharacter();
  }
  return password;
}

// The ready function detects the state of readiness of the web page to be manipulated
$(document).ready(function() {
  // Assemble DOM elements
  var rootEl = $("#root");
  var newButton = $("<button>");
  var passwordEl = $("<div>");
  // Apply text, style
  newButton.text("Generate Password").attr("class", "fancy");
  // Attach to page
  rootEl.prepend("<h1>Password Generator</h1>");
  rootEl.append(newButton);
  rootEl.append(passwordEl);

  // Generate a password of length 15
  newButton.click(function() {
    passwordEl.text(passwordGenerator(15));
  });
});
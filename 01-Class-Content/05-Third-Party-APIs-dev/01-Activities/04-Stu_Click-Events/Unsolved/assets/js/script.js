// Returns a random character that includes alphanumeric and special character values
function getPasswordCharacter() {
  return String.fromCharCode(Math.floor(Math.random() * 77) + 34);
}

// Returns a string of concatenated characters of length num
function passwordGenerator(num) {
  var password = "";
  for (var i = 0; i < num; i++) {
    password += getPasswordCharacter();
  }
  return password;
}

// Assemble DOM elements
var rootEl = $("#root");
var newButton = $("<button>");
var passwordEl = $("<div>");

// Apply text and style in a chain
newButton.text("Generate Password").attr("class", "fancy");

// Attach to page
rootEl.prepend("<h1>Password Generator</h1>");
rootEl.append(newButton);
rootEl.append(passwordEl);

// TODO: Fix the following click event listener so the newButton will render a 15 character password on click
rootEl.dblclick(function () {
  passwordEl.text(getPasswordCharacter());
});

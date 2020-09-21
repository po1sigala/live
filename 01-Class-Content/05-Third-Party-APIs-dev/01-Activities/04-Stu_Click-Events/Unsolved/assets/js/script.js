var passwordBtnEl = $('#password-btn');
var passwordDisplayEl = $('#password-display');

// Returns a random character that includes alphanumeric and special character values
function getPasswordCharacter() {
  return String.fromCharCode(Math.floor(Math.random() * 77) + 34);
}

// Returns a string of concatenated characters of length num
function passwordGenerator(num) {
  var password = '';
  for (var i = 0; i < num; i++) {
    password += getPasswordCharacter();
  }
  return password;
}

// TODO: Fix the following click event listener so the `#password-button` will render a 15 character password on click
passwordBtnEl.on('dblclick', function () {
  var newPassword = passwordGenerator(2);
  passwordDisplayEl.text(newPassword);
});

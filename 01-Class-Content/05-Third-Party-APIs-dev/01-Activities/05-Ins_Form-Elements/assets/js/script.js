$(document).ready(function () {
  // Assemble DOM elements
  var buttonEl = $("<button class='fancy' type='submit'>Submit</button>");
  var firstEl = $("<input placeholder='First Name' type='text'>");
  var lastEl = $("<input placeholder='Last Name' type='text'>");
  var emailEl = $("<input placeholder='Email' type='text'>");
  var emailLabelEl = $("<label class='email'>Email:</label>");
  var firstLabelEl = $("<label>First Name:</label>");
  var lastLabelEl = $("<label>Last Name:</label>");
  var gitHubLabelEl = $("<label>GitHub:</label>");
  var gitHubEl = $("<input placeholder='GitHub' type='text'>");
  var formEl = $(".pizza");
  var toppingEl = $(".group");

  // Map the HTML structure
  // <h1></h1>
  // <form>
  //   <label>
  //     <input> </input>
  //   </label>
  //   <button > </button>
  // </form>
  // Arrange the Form Elements
  firstLabelEl.append(firstEl);
  lastLabelEl.append(lastEl);
  emailLabelEl.append(emailEl);
  gitHubLabelEl.append(gitHubEl);

  // Add the text input fields to the page
  formEl.prepend(gitHubLabelEl);
  formEl.prepend(emailLabelEl);
  formEl.prepend(lastLabelEl);
  formEl.prepend(firstLabelEl);

  // Insert the button after the fieldset
  buttonEl.insertAfter(toppingEl);

  // Submit event on the form
  formEl.submit(function (event) {
    // Prevent the default behavior
    event.preventDefault();
    console.log("First Name:", firstEl.val());
    console.log("Last Name:", lastEl.val());
    console.log("Email:", emailEl.val());
    console.log("GitHub:", gitHubEl.val());
    // Select all checked options
    var checkedEl = $("input:checked");
    var selected = [];
    // Loop through checked options to store in array
    $.each(checkedEl, function () {
      selected.push($(this).val());
    });
    console.log("Toppings: ", selected.join(", "));
    // Clear input fields
    $("input:text").val("");
    $("input:checkbox").prop("checked", false);
  });
});

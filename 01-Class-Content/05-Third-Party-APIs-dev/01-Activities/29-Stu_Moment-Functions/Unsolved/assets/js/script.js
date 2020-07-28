$(document).ready(function () {
  var rootEl = $("#root");
  var formEl = $("<form class='form-group'>");
  var buttonEl = $("<button class='calc'>Calculate</button>")
  var inputEl = $("<input placeholder='MM/DD/YYYY' class='form-input' type='date'>");
  var labelEl = $("<label class='form-label'>Enter a date</label>");
  var diffEl = $("#time");
  
  formEl.append(labelEl);
  formEl.append(buttonEl);
  labelEl.append(inputEl);
  rootEl.append(formEl);

  formEl.on("submit", function(event) {
    event.preventDefault();
    var date = inputEl.val();
    // TODO: Add code to render the time difference in the <div id="time">
    // HINT: Several methods have correct answers


  })
});
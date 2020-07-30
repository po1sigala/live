$(document).ready(function () {
  var inputEl = $(".form-input");
  var formEl = $(".form-group");
  var answerEl = $("#answer");

  formEl.on("submit", function(event) {
    event.preventDefault();
    var date = inputEl.val();
    var radioType = $("input[type='radio']:checked").val();
    // Format the date and find the difference in the requested time 
    switch(radioType) {
      case "seconds":
        var seconds;
        answerEl.text("in " + seconds + " seconds");
      case "hours":
        var hours;
        answerEl.text("in " + hours + " hours");
      break;
      case "days":
        var days;
        answerEl.text("in " + days + " days");
      break;
    }
  })
});
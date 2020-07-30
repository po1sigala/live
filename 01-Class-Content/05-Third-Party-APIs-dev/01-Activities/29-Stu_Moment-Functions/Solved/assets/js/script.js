$(document).ready(function () {
  var inputEl = $(".form-input");
  var formEl = $(".form-group");
  var answerEl = $("#answer");

  formEl.on("submit", function(event) {
    event.preventDefault();
    var date = inputEl.val();
    var userDate = moment(date);
    var radioType = $("input[type='radio']:checked").val();

    switch(radioType) {
      case "seconds":
        var seconds = userDate.diff(moment(), "seconds");
        answerEl.text("in " + seconds + " seconds");
      break;
      case "hours":
        var hours = userDate.diff(moment(), "hours");
        answerEl.text("in " + hours + " hours");
      break;
      case "days":
        var days = userDate.diff(moment(), "days");
        answerEl.text("in " + days + " days");
      break;
    }
  })
});
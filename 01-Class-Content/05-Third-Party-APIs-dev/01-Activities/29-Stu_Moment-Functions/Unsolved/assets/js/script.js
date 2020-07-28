$(document).ready(function () {
  var inputEl = $(".form-input");
  var formEl = $(".form-group");
  var answerEl = $("#answer");

  formEl.on("submit", function(event) {
    event.preventDefault();
    var date = inputEl.val();
    var radioType = $("input[type='radio']:checked").val();

    switch(radioType) {
      case "time":
        var diff = moment(date).fromNow();
        answerEl.text(diff);
      break;
      case "hours":
        var hours = moment(date).diff(moment(), "hours");
        answerEl.text("in " + hours + " hours");
      break;
      case "days":
        var days = moment(date).diff(moment(), "days");
        answerEl.text("in " + days + " days");
      break;
    }
  })
});
// console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
// console.log(moment("20111031", "YYYYMMDD").fromNow());

$(document).ready(function () {
  var rootEl = $("#root");
  var timeEl = $("<div>Loading . . .</div>");
  var formEl = $("<form class='form-group'>");
  var buttonEl = $("<button class='calc'>Calculate</button>")
  var inputEl = $("<input placeholder='MM/DD/YYYY' class='form-input' type='text'>");
  var labelEl = $("<label class='form-label'>Enter a date</label>");
  var diffEl = $("#time");
  
  formEl.append(labelEl);
  formEl.append(buttonEl);
  labelEl.append(inputEl);
  rootEl.append(formEl);
  rootEl.append(timeEl);

  formEl.on("submit", function(event) {
    event.preventDefault();
    var date = inputEl.val();
    var today = moment().startOf('day');
    var userDate = moment(date, "MM/DD/YYYY");
    var dateDiff = userDate - today;
    var daysDiff = Math.round(moment.duration(dateDiff).asDays());
    var diff = moment(date, "MM/DD/YYYY").fromNow();
    
    console.log("diff", dateDiff);
    // future
    if (dateDiff > 0) {
      diffEl.text(diff);
      diffEl.append(" or" +  "<br>" + daysDiff + " days");
    }else if(dateDiff < 0) {
      diffEl.text(diff);
      diffEl.append(" or" + "<br>" + daysDiff + " days");
    }else if(dateDiff === 0) {
      diffEl.append("<br>" + "That's today!") 
    }
    else {
      return;
    }
  })
});








// function countdown() {
  //   var eventTime = 1366549200; // Timestamp - Sun, 21 Apr 2013 13:00:00 GMT
  //   var currentTime = 1366547400; // Timestamp - Sun, 21 Apr 2013 12:30:00 GMT
  //   var diffTime = eventTime - currentTime;
  //   var duration = moment.duration(diffTime * 1000, "milliseconds");
  //   var interval = 1000;

  //   setInterval(function () {
  //     duration = moment.duration(duration - interval, "milliseconds");
  //     timeEl.text(
  //       duration.hours() +
  //         ":" +
  //         duration.minutes() +
  //         ":" +
  //         duration.seconds()
  //     );
  //   }, interval);
  // }

  // console.log(moment().format('LTS'));
  // setInterval(function () {
  //   timeEl.text(moment().format("LTS"));
  // }, 1000);
  // countdown();
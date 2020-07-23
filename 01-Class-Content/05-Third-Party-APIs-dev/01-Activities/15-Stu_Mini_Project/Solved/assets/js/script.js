// save reference to important DOM elements
var timeDisplayEl = $('#time-display');
var trainModalBtnEl = $('#train-modal');
var trainDisplayEl = $('#train-display');
var trainModalEl = $('#train-modal');
var trainFormEl = $('#train-form');
var trainNameInputEl = $('#train-name-input');
var destinationInputEl = $('#destination-input');
var firstTrainInputEl = $('#first-train-input');
var trainFrequencyInputEl = $('#train-frequency-input');

// handle displaying the time
function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}

// handle printing train data to the page
function printTrainData(name, destination, firstTime, frequency) {
  // create row for data
  var trainRowEl = $('<tr class="train-row">').attr('data-first-train', firstTime);

  // create cell for name and add to train row
  $('<td>').addClass('train-name').text(name).appendTo(trainRowEl);
  // create cell for destination and add to train row
  $('<td>').addClass('train-destination').text(destination).appendTo(trainRowEl);
  // create cell for frequency and add to train row
  $('<td>').addClass('train-frequency').text(frequency).appendTo(trainRowEl);

  // calculate time until the next train comes
  var timeToNextTrain = getNextTrainMins(firstTime, frequency);
  $('<td>').addClass('next-train-mins').text(timeToNextTrain).appendTo(trainRowEl);

  // print next train time
  var nextTrainTime = moment().add(timeToNextTrain, 'minutes').format('hh:mm a');
  $('<td>').addClass('next-train-time').text(nextTrainTime).appendTo(trainRowEl);

  trainDisplayEl.append(trainRowEl);
  trainModalEl.modal('hide');
}

function getNextTrainMins(firstTrainTime, frequency) {
  // convert first train time into a moment object, but subtract a day to ensure it's a time in the past (makes it easier)
  console.log(firstTrainTime);
  var firstTrainTimeParsed = moment(firstTrainTime, 'HH:mm').subtract(1, 'day');

  // get time between now and first train time in minutes
  var timeDiffTotal = moment().diff(firstTrainTimeParsed, 'minutes');
  console.log(timeDiffTotal);

  // calculate how many minutes off we are by getting remainder of minutes between the overall time difference and the frequency of the train coming
  var minuteDiff = timeDiffTotal % frequency;
  console.log(minuteDiff);
  var timeToNextTrain = parseInt(frequency - minuteDiff);
  console.log(timeToNextTrain);

  return timeToNextTrain;
}

// handle updating train times
function updateSchedule() {
  $('.train-row').each(function (i, rowHTML) {
    // convert rowHTML to jQuery object
    var trainRowEl = $(rowHTML);
    // get first train time
    console.log(trainRowEl);
    var firstTrain = trainRowEl.attr('data-first-train');
    // get frequency of train departures from <td>
    var frequency = trainRowEl.find('.train-frequency').text();
    console.log(firstTrain);
    // get time to next train
    var timeToNextTrain = getNextTrainMins(firstTrain, frequency);
    trainRowEl.find('.next-train-mins').text(timeToNextTrain);

    // print next train time
    var nextTrainTime = moment().add(timeToNextTrain, 'minutes').format('hh:mm a');
    trainRowEl.find('next-train-time').text(nextTrainTime);
  });
}

// handle train form submission
function handleTrainFormSubmit(event) {
  event.preventDefault();

  var trainName = trainNameInputEl.val().trim();
  var trainDestination = destinationInputEl.val().trim();
  var firstTrainTime = firstTrainInputEl.val().trim();
  var trainFrequency = trainFrequencyInputEl.val().trim();

  printTrainData(trainName, trainDestination, firstTrainTime, trainFrequency);

  trainFormEl[0].reset();
}

trainFormEl.on('submit', handleTrainFormSubmit);
trainDisplayEl.sortable();

setInterval(displayTime, 1000);
setInterval(updateSchedule, 30000);

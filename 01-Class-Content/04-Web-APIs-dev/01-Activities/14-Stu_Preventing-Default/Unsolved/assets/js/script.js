var tipEl = document.querySelector("#tip-percentage");
var totalEl = document.querySelector("#total");
var submitEl = document.querySelector("#submit");

function calculateTip(total, tipPercentage) {
  var roundedResult = (total * tipPercentage).toFixed(2);
  return roundedResult;
}

// Add Your Code Below
function calculateTotal(total, tipAmount) {
  return parseFloat(total) + parseFloat(tipAmount);
}

function addTip(event) {
  
}

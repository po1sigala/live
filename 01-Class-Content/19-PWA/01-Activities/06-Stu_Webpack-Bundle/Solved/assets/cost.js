const { monthlyInterest } = require('./convertInterest');
const { loanCost } = require('./costCalc');
const { months } = require('./monthlyTerms');

const loanEl = document.getElementById('loan');
const rateEl = document.getElementById('rate');
const termEl = document.getElementById('term');
const loanCostEl = document.getElementById('loan-cost');
const submitBtn = document.getElementById('submit');

function submit(e) {
  e.preventDefault();
  // Get values from user inputs
  const principle = parseInt(loanEl.value, 10);
  const rate = parseFloat(rateEl.value);
  const term = parseInt(termEl.value, 10);
  // Convert into values for loan formula
  const monthlyRate = monthlyInterest(rate);
  const payNum = months(term);
  // Calculate loan formula
  const costTotal = loanCost(principle, monthlyRate, payNum);
  // Render Monthly Loan Amount
  loanCostEl.innerText = `$${costTotal.toFixed(2)}`;
}

// Submit Button Event Listener
submitBtn.onclick = submit;

const { monthlyInterest } = require('./convertInterest');
const { loanPayment } = require('./loanCalc');
const { months } = require('./monthlyTerms');

const loanEl = document.getElementById('loan');
const rateEl = document.getElementById('rate');
const termEl = document.getElementById('term');
const monthlyPaymentEl = document.getElementById('monthly-payment');
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
  console.log(payNum);
  // Calculate loan formula
  const monthlyPayment = loanPayment(principle, monthlyRate, payNum);

  monthlyPaymentEl.innerText = `$${monthlyPayment.toFixed(2)}`;
}

submitBtn.onclick = submit;

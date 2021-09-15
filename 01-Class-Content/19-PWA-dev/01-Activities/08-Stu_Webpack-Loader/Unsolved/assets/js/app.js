// ES Modules import the JavaScript functions
import monthlyInterest from './convertInterest';
import loanPayment from './loanCalc';
import months from './monthlyTerms';
import getData from './getData';
// Import the CSS module
import '../css/style.css';

const loanEl = document.getElementById('loan');
const rateEl = document.getElementById('rate');
const termEl = document.getElementById('term');
const monthlyPaymentEl = document.getElementById('monthly-payment');
const submitBtn = document.getElementById('submit');
const rateBtn = document.getElementById('get-rate');
const currentRateEl = document.getElementById('current-rate');

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
  const monthlyPayment = loanPayment(principle, monthlyRate, payNum);
  // Render Monthly Loan Amount
  monthlyPaymentEl.innerText = `$${monthlyPayment.toFixed(2)}`;
}

// Async function returns a promise from mock API
// Disclaimer: this is fake data
async function getRate() {
  // Call to Mock API
  const currentRate = await getData(6.11);
  console.log(currentRate);
  return currentRate;
}

// Displays the current rate
async function displayRate(e) {
  e.preventDefault();
  rateBtn.remove();
  const getRateEl = document.createElement('p');
  const currentRate = await getRate();
  getRateEl.className = 'current';
  getRateEl.textContent = `The current rate is ${currentRate}%`;
  currentRateEl.appendChild(getRateEl);
}

// Click Event Listeners
submitBtn.onclick = submit;
rateBtn.onclick = displayRate;

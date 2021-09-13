const { mortgagePayment } = require('./mortgage');
const convertInterest = require('./convertInterest');
const { months } = require('./monthlyTerms');

const loanEl = document.getElementById('loan');
const rateEl = document.getElementById('rate');
const termEl = document.getElementById('term');
const monthlyPaymentEl = document.getElementById('monthly-payment');
const submitBtn = document.getElementById('submit');

// const
function submit(e) {
  e.preventDefault();
  const principle = parseInt(loanEl.value, 10);
  console.log(principle);

  const rate = parseFloat(rateEl.value);
  // const monthlyRate = convertInterest.monthlyInterest(rate);
  const monthlyRate = rate / 12 / 100;
  console.log(monthlyRate);

  const term = parseInt(termEl.value, 10);
  // const payNum = months(term);
  const payNum = term * 12;

  const monthlyPay = mortgagePayment(principle, monthlyRate, payNum);
  monthlyPaymentEl.innerText = monthlyPay;
  console.log(monthlyPay);



  // const total = mortgage.mortgagePayment(
  //   Number(balanceEl.innerText),
  //   priceEl.value
  // );
  // balanceEl.innerText = total;
  // addToList(expenseEl.value, priceEl.value);
}

submitBtn.onclick = submit;

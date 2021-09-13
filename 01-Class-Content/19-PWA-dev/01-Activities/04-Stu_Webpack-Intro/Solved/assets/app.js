const mortgage = require('./mortgage');
const convertInterest = require('./convertInterest');

const loanEl = document.getElementById('loan');
const rateEl = document.getElementById('rate');
const termEl = document.getElementById('term');
const monthlyPaymentEl = document.getElementById('monthly-payment');
const submitBtn = document.getElementById('submit');

// const montlyInterest = convertInterest.monthlyInterest(rate);

// function addToList(name, price) {
//   expensesListEl.innerHTML += `<li class="list-group-item">Name: ${name}
//     <span class="ml-4">Price: ${price}</span></li>`;
// }

function submit(e) {
  e.preventDefault();
  console.log(loanEl.value);
  console.log(rateEl.value);
  console.log(termEl.value);
  // const total = mortgage.mortgagePayment(
  //   Number(balanceEl.innerText),
  //   priceEl.value
  // );
  // balanceEl.innerText = total;
  // addToList(expenseEl.value, priceEl.value);
}



submitBtn.onclick = submit;

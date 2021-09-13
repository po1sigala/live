const loanEl = document.getElementById('loan');
const rateEl = document.getElementById('rate');
const termEl = document.getElementById('term');
const monthlyPaymentEl = document.getElementById('monthly-payment');
const submitBtn = document.getElementById('submit');

function submit(e) {
  e.preventDefault();
  const principle = parseInt(loanEl.value, 10);

  const rate = parseFloat(rateEl.value);
  const monthlyRate = rate / 12 / 100;

  const term = parseInt(termEl.value, 10);
  const payNum = term * 12;

  const ratePow = (1 + rate) ** payNum;
  const monthlyPayment = (principle * monthlyRate * ratePow) / (ratePow - 1);

  monthlyPaymentEl.innerText = `$${monthlyPayment}`;
}

submitBtn.onclick = submit;

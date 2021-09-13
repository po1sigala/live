const loanPayment = (principle = 300000, rate = 0.00416, term = 360) => {
  const ratePow = (1 + rate) ** term;

  return (principle * rate * ratePow) / (ratePow - 1);
};

module.exports = {
  loanPayment,
};

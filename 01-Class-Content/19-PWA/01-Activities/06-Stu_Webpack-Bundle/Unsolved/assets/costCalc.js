const loanCost = (principle = 300000, rate = 0.00416, term = 360) => {
  const ratePow = (1 + rate) ** term;
  const monthly = (principle * rate * ratePow) / (ratePow - 1);
  const totalAmount = monthly * term;
  return totalAmount - principle;
};

module.exports = {
  loanCost,
};

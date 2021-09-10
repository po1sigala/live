module.exports = function (data, successRate = 0.98, maxLatencyMs = 1000) {
  // eslint-disable-next-line no-new
  new Promise((resolve, reject) => {
    const successRoll = Math.random();
    // interval: [0, maxLatencyMs]
    const latency = Math.floor(Math.random() * (maxLatencyMs + 1));

    if (successRoll <= successRate) {
      setTimeout(() => resolve(data), latency);
    } else {
      // eslint-disable-next-line prefer-promise-reject-errors
      setTimeout(() => reject('API failed to return data'), latency);
    }
  });
};

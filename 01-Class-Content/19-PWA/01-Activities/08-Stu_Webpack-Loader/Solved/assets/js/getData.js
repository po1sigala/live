const getData = (data, successRate = 0.98, maxLatencyMs = 1000) =>
  new Promise((resolve, reject) => {
    const successRoll = Math.random();
    const latency = Math.floor(Math.random() * (maxLatencyMs + 1));

    if (successRoll <= successRate) {
      setTimeout(() => resolve(data), latency);
    } else {
      setTimeout(() => reject(new Error('fail')), latency);
    }
  });

export default getData;

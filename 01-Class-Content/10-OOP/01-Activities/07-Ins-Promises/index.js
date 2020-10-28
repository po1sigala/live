// Promise example using a real-life promise
// The real-life promise in this scenario is a kid asking his parents for a Nintendo Switch

const goodGrades = false;

// Promise
const willGetSwitch = new Promise((resolve, reject) => {
  // Check for a desireable outcome, if so resolve the promise
  if (goodGrades) {
    const reward = {
      name: 'Nintendo Switch',
      desired: true,
    };
    resolve(reward);

    // Otherwise reject the promise
  } else {
    const issue = new Error('Child has bad grades');
    reject(issue);
  }
});

// Another promise to call only if we get the reward
const playGames = (reward) => {
  const message = `I am playing games on my new ${reward.name}`;
  return Promise.resolve(message);
};

willGetSwitch
  .then(playGames)
  .then((resolved) => console.log(resolved))
  .catch((err) => console.error(err));

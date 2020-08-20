fetch('https://api.github.com/orgs/nodejs/public_members')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Github Organization Users \n----------');
    console.log(data);
  });

fetch('https://api.github.com/orgs/nodejs/repos')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Github Repo Issues \n----------');
    console.log(data);
  });

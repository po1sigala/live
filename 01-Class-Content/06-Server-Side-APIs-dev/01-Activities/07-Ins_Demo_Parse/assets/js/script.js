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
    for (var i = 0; i < data.length; i++) {
      console.log(data[i].name);
  }
});

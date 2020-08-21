var requestUrl = 'https://api.github.com/repos/nodejs/node/issues?per_page=5';

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    for (var i = 0; i < data.length; i++) {
      console.log('Github Repo Issues \n----------');
      console.log(data[i].url);
      console.log(data[i].user.login);
    }
  });

fetch('https://api.github.com/gists/public?since=2020-06-01&per_page=30')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

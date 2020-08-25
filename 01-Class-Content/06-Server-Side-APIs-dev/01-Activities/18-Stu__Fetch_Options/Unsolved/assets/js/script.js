fetch('https://api.github.com/repos/nodejs/node/issues?per_page=5', {
  // Put your fetch option below this line
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

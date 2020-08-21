// Add parameter to documentation to the end of the requestUrl
var requestUrl = 'https://api.github.com/repos/nodejs/node/issues';

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    // loop through the response
    //console log each issue url and each user login
  });

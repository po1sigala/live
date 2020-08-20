var badRequestUrl = 'https://api.github.com/orgs/nodejs/oreps?per_page=5';

var responseText = document.getElementById('response-text');

function getApi(URL) {
  fetch(URL)
    .then(function (response) {
      //Check the console first to see the response.status
      //Then write the conditional based on that response.status value
      console.log(response.status);
      //Write the conditional after this line
    })
    .then(function (data) {
      console.log(data);
    });
}

getApi(badRequestUrl);

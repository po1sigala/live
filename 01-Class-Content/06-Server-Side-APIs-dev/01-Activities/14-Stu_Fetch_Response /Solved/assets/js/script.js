var badRequestUrl = 'https://api.github.com/orgs/nodejs/oreps?per_page=5';

var responseText = document.getElementById('response-text');

function getApi(URL) {
  fetch(URL)
    .then(function (response) {
      console.log(response.status);
      //Conditional for the the response.status
      if (response.status === 404) {
        // Place the response.status on the page
        responseText.textContent = response.status;
        return response.json();
      }
    })
    .then(function (data) {
      console.log(data);
    });
}

getApi(badRequestUrl);

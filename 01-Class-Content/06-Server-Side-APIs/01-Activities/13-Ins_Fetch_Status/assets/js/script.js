var requestUrl = 'https://api.github.com/orgs/nodejs/repos?per_page=5';

var responseText = document.getElementById('response-text');

function getApi(requestUrl) {
  fetch(requestUrl)
    .then(function (response) {
      console.log(response)
        responseText.textContent = "This confirms that the fetch request is successful."
    })
}

getApi(requestUrl);

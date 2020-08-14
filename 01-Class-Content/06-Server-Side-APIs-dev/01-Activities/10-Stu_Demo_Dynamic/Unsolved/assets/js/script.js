var userContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');
var requestUrl = 'https://api.github.com/users?per_page=5';
fetchButton.addEventListener('click', getApi);

function getApi() {
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      //loop through the data and generate your html
    });
}

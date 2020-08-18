var repoList = document.querySelector('ul');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  // replace {USERNAME} with your github username
  var requestUrl = 'https://api.github.com/users/{USERNAME}/repos';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = data[i].html_url;
        repoList.appendChild(listItem);
      }
    });
}

fetchButton.addEventListener('click', getApi);

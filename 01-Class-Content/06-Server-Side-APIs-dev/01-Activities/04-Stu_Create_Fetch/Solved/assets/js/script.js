var repoList = document.querySelector('ul');
var fetchButton = document.getElementById('fetch-button');
fetchButton.addEventListener('click', getApi);

// replace {USERNAME} with your github username
var requestUrl = 'https://api.github.com/users/{USERNAME}/repos';

function getApi() {
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (i = 0; i < data.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = data[i].html_url;
        repoList.appendChild(listItem);
      }
    });
}

var usersContainer = document.getElementById('users');
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
      for (i = 0; i < data.length; i++) {
        var userName = document.createElement('h3');
        var userUrl = document.createElement('p');
        userName.textContent = data[i].login;
        userUrl.textContent = data[i].url;
        usersContainer.append(userName);
        usersContainer.append(userUrl);
      }
    });
}

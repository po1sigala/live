var issueContainer = document.getElementById('issues');
var fetchButton = document.getElementById('fetch-button');

fetchButton.addEventListener('click', getApi);

function getApi() {
  fetch('https://api.github.com/repos/nodejs/node/issues?per_page=5')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      for (i = 0; i < data.length; i++) {
        var userName = document.createElement('h3');
        var issueBody = document.createElement('p');
        userName.textContent = data[i].user.login;
        issueBody.textContent = data[i].body;
        issueContainer.append(userName);
        issueContainer.append(issueBody);
      }
    });
}

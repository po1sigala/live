requestUrl = 'https://api.github.com/orgs/nodejs/repos';

var message = document.querySelector('#my-message');

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    message.textContent = 'You did it!';
  });

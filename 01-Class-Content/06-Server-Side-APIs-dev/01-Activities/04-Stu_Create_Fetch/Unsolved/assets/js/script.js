var repoList = document.querySelector('ul');
var fetchButton = document.getElementById('fetch-button');
fetchButton.addEventListener('click', getApi);

// Insert the api url to get a list of your repos
var requestUrl = '';

//when clicked triggers getApi function call when fetchButton is clicked

function getApi() {
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //looping over the fetch response and inserting the url of your repos into a list
      for (i = 0; i < data.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = data[i].html_url;
        repoList.appendChild(listItem);
      }
    });
}

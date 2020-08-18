var tableBody = document.getElementById('repo-table');
var fetchButton = document.getElementById('fetch-button');

fetchButton.addEventListener('click', getApi);

function getApi() {
  //fetch request gets a list of all the repos for the node.js organization

  fetch('https://api.github.com/orgs/nodejs/repos')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //Loop over the data to generate a table, each table row will have a link to the repo url
      for (var i = 0; i < data.length; i++) {
        var createTableRow = document.createElement('tr');
        var tableData = document.createElement('td');
        var link = document.createElement('a');
        link.textContent = data[i].html_url;
        link.href = data[i].html_url;
        tableData.appendChild(link);
        createTableRow.appendChild(tableData);
        tableBody.appendChild(createTableRow);
      }
    });
}

var listItem = document.createElement('li');
var requestUrl = 'https://api.github.com/users?per_page=5';
var usersList;

fetch(requestUrl)
  .then(function (response) {
    if (response.status === 200) {
      if (window.location.href === 'index.html') {
        window.location.replace('users.html');
        usersList = document.getElementById('users');
        console.log(usersList);
      }
      return response.json();
    }
  })
  .then(function (data) {
    //Using console.log to examine the data

    console.log(usersList);
    console.log(data);
    for (var i = 0; i < data.length; i++) {
      var usersList = document.getElementById('users');
      //Creating a h3 element and a p element
      var userName = document.createElement('h3');
      var userUrl = document.createElement('p');

      //Setting the text of the h3 element and p element.
      userName.textContent = data[i].login;
      userUrl.textContent = data[i].url;

      //Appending the dynamically generated html to the div associated with the id="users"
      //Append will attach the element as the bottom most child.
      listItem.append(userName);
      listItem.append(userUrl);
      console.log(listItem);
      usersList.appendChild(listItem);
    }
  });

# 06.1 Part-Time Lesson Plan: Introduction to Fetch

## Overview

In this class, we will request data from server-side APIs using Fetch and consume that data.

## Instructor Notes

* Complete activities `01-Ins_Demo_Curl` through `10-Stu_Demo_Dynamic`.

* Students will be using Fetch today to make requests. Take a few moments before class to get familiar with the [Fetch documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).

* We will only be hitting the [GitHub API](https://docs.github.com/en/rest), so check out the documentation and get familiarized. Students will rely heavily on it in class and may need help finding answers.

* Students will be repeatedly asked to refer to the GitHub Documentation, so be sure to have the link on hand just in case.

* This is students first exposure

## Learning Objectives

By the end of class, students will be able to

* Understand the client-server model.

* Use cURL to make a simple request to an API.

* Understand and explain the Fetch API and why we use it.

* Use JavaScript to render data obtained with `fetch()` on the page.

* Understand and explain the differences between Fetch, AJAX, and XHR. 

* Understand the structure of an API parameter.

## Time Tracker

| Start  | #   | Activity Name                       | Duration |
|---     |---  |---                                  |---       |
| 6:30PM | 1   | Instructor Do: Fetch Introduction   | 0:10     |
| 6:40PM | 2   | Instructor Demo: cURL Demo          | 0:05     |
| 6:45PM | 3   | Student Do: cURL Debug              | 0:15     |
| 7:00PM | 4   | Instructor Review: cURL Debug       | 0:10     |
| 7:10PM | 5   | Instructor Demo: Create Fetch       | 0:05     |
| 7:15PM | 6   | Student Do:  Create Fetch           | 0:15     |
| 7:30PM | 7   | Instructor Review: Create Fetch     | 0:10     |
| 7:40PM | 8   | Instructor Demo: Different APIs     | 0:05     |
| 7:45PM | 9   | Student Do: Reverse APIs            | 0:15     |
| 8:00PM | 10  | BREAK                               | 0:15     |
| 8:15PM | 11  | Instructor Review: Reverse AP       | 0:10     |
| 8:25PM | 12  | Instructor Demo: Parse JSON         | 0:05     |
| 8:30PM | 13  | Student Do: Parse JSON              | 0:15     |
| 8:45PM | 14  | Instructor Review: Parse JSON       | 0:10     |
| 8:55PM | 15  | Instructor Demo: Dynamic HTML       | 0:05     |
| 9:00PM | 16  | Student Do: Dynamic HTML            | 0:15     |
| 9:15PM | 17  | Instructor Review: Dynamic HTML     | 0:15     |
| 9:30PM | 18  | END                                 | 0:00     |

---

## Class Instruction

### 1. Instructor Do: Fetch Introduction (10 mins)

* Welcome students to class.
  
* Inform students that today is going to be about `fetch`. Fetch allows us to make `requests` to server-side APIs and receive a `response` that we can work with.
  
* Server-side APIs are a way organizations can offer developers, and eventually end users a way of receiving and consuming data.

* Normally, APIs documentation will explain how to interact it to make proper requests and receive successful responses.

* Open up your browser and go to `https://api.github.com` and point out the following:

  * These are all endpoint URLs for GitHub's API.
  
  * The root-endpoint is the part of the URL they all have in common, in GitHub's case it's `https://api.github.com`.

  * To make a specific request, we attach a `path` to the `root-endpoint`, leaving us with a complete `endpoint`.

* Open the [Fetch Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) and scroll to the first code block, pointing out the following:

  * Fetch requests begin with the URL of the server you are looking to receive data from. In this case, our `root-endpoint` would be `http://example.com` with our `path` being `/movies.json`. Making a request to only a root-endpoint normally does not yield any results.

  ```js
    fetch('http://example.com/movies.json')
  ```

  * Upon completion of our request, the `.then` statement allows us to do work with the response. In this case, we are using the built-in `.json()` to convert the response to JSON. Assure students that we will cover JSON more later on in today's class. For now, all they need to know is it is a nicer way of formatting returned data for our viewing.
  
  ```js
  .then(function(response){
    return response.json();
  })
  ```
  
  * Next, we use `.then()` to finally console log our JSON formatted `data`.
  
  ```js
  .then(function(data){
    console.log(data)
  });
  ```

  * We can also use a tool called `cURL` to make simple requests via our terminal. Let's examine what this simpler request looks like.

### 2. Instructor Demo: cURL Demo (5 min)
  
* Open your terminal and type `curl https://api.github.com/users`, demonstrating the following:

  * GitHub returned a list of the last 30 users who made a profile!

* Ask the class the following questions (☝️) and call on students for the answers (🙋).

  * ☝️ What happened when I entered the curl command to GitHub.

  * 🙋 We asked GitHub for user information via our terminal!

  * ☝️ What is the `root-endpoint` in the above URL?

  * 🙋 `https://api.github.com`

  * ☝ What is the `path` that gives us `users`?

  * 🙋 `/users.`

  * ☝️ What is a good use case for cURL?

  * 🙋 We can use it to quickly make sure our API URL is correct or working without the need for JavaScript.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to Slack the instruction text to the students in their class-specific channel.

### 3. Student Do: cURL Debug (15 min)

* Direct students to the activity instructions found in `02-Stu_Curl_Debug/README.md`.

* Break your students into pairs that will work together on this activity.

```md
# cURL Debug

In this activity, you will work with a partner using `cURL`.

## Instructions

* Be sure to work with your partner!

* As a developer, I want to test the API I plan to use with `cURL`.

* When I make a request with cURL, then I should receive a response from the server, but right now the terminal returns nothing.

* Open up your terminal and type  `curl http://api.github.com` and hit `enter`.

  * If all goes as expected, the terminal should have gone to the next line without returning any info.

* Using the following questions, try to debug and fix the code:

  * What error messages are being logged, if any?

  * Where must this error be stemming from?

  * What is a good keyword or phrase you can Google to find resources to help you debug?

## 💡 Hint(s)

* Sometimes as we start our development journey, it's easy to focus too hard on looking for large mistakes, when the problem can be caused by a small one.

## 🏆 Bonus

* If you have fully completed the above tasks, here is something you and your partner can work through as an added challenge:

  * If you wanted to save your cURL response text to a file, how would you do so?

* Use [Google](https://www.google.com) or another search engine to answer the above.
```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help while circulating through room.

### 4. Instructor Review: cURL Debug (10 mins)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with cURL? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

  * ✔️ Typos can lead to lack of `response`

  * Go to [GitHub API Docs](https://docs.github.com/en/rest/overview/resources-in-the-rest-api#root-endpoint)

  * 🔑 When we examine the URL we entered, we can see that it is using `http` instead of `https`. Simple typos will cause our requests to not hit the proper endpoint, yielding no results.

    ```bash
    curl http://api.github.com
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What would we reference to know if our API URL is correct.

  * 🙋 The documentation.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 Stick around for Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

## 5. Instructor Demo: Create Fetch (5 min)

* Open `03-Ins_Demo-Fetch/index.html` in the browser and show the following:

  * 🔑 We hit the `Click Me` button and a list of NodeJS GitHub repositories appears.
  
* Open `03-Ins_Demo-Fetch/assets/js/script.js` in your IDE and show the following statements:
  
  * We set our request URL to a variable. This is the URL that our `fetch` method will use to request data. The `path` we are making a request too here is `/orgs/nodejs/repos`.

  ```js
  var requestUrl = 'https://api.github.com/orgs/nodejs/repos';
  ```

  * 🔑 We pass the `requestUrl` variable as an argument to the `fetch` method.

  ```js
  fetch(requestUrl)
  ```

  * 🔑 We then take the response and convert it into JSON and `return` the formatted response.

  ```js
  .then(function (response) {
    return response.json();
  })
  ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What do we need to pass through fetch to get an API to send back data?

  * 🙋 We need a proper endpoint as provided by the documentation.

  * ☝️ How is a request like this useful?

  * 🙋 It allows us as developers to quickly access all the data of a particular GitHub organization, or consume all the data from any available endpoint quickly.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to Slack the instruction text to the students in their class-specific channel.

### 6. Student Do: Create Fetch (15 min) 

* Direct students to the activity instructions found in `04-Stu_Create-Fetch/README.md`.

* Break your students into pairs that will work together on this activity.

```md
# Create a fetch request

In this activity, you will work with a partner to request data from GitHub using the Fetch API.

## Instructions

* Be sure to work with your partner!

* Open up the script file [script.js](./Unsolved/assets/js/script.js)

  * As a user, when I click the button, I want a list of repo URLs to appear on the page.

* Go to [GitHub API Docs](https://docs.github.com/en/rest/reference/repos#list-repositories-for-a-user) and find the endpoint to list the repositories for your GitHub username

* Use this information to create the correct URL for the fetch request and assign it to the requestUrl variable.

## 💡 Hint(s)

* The end points are written after the root URL of the API.

## 🏆 Bonus

* If you have fully completed the above tasks, here is something you and your partner can work through as an added challenge:

  * In fetch requests we use the URL, what is the difference between URL and URI?

* Use [Google](https://www.google.com) or another search engine to answer the above.
```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help while circulating through room.

### 7. Instructor Review: Create Fetch (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with `Creating a Fetch Request`? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

  * ✔️ `root-endpoint` + `path`  = `endpoint`.

  * ✔️ `/users/{username}/repos`.

* Open `04-Stu_Create-Fetch/Solved/assets/js/script.js` in your IDE and explain the following:

  * We create a function called `getApi`.

  ```js
  function getApi() {
  ```

  * 🔑 We save the full endpoint we would like to make a request to in a variable called `requestUrl`, replacing `{USERNAME}` with the username we would like to search.

  ```js
  var requestUrl = 'https://api.github.com/users/{USERNAME}/repos';
  ```

  * We then pass the `requestUrl` variable as an argument to our `fetch` method.

  ```js
  fetch(requestUrl)
  ```

  * We take the response and convert it into JSON. Lastly we `return` the JSON formatted response.

  ```js
  .then(function (response) {
    return response.json();
  })
  ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we build our requestUrl?

  * 🙋 We attach our desired endpoint to the root endpoint.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 Read the [GitHub Docs](https://docs.github.com/en/rest), and stick around for Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 8. Instructor Demo: Different APIs (5 min)

* Open `05-Ins_Different_APIs/assets/js/script.js` in your IDE and show the following:

* There is more than one way to request data from a server-side API.
  
  * 🔑 An `XMLHttpRequest` or `XHR` for short was the predecessor to `fetch`. `XHR` requests involve much more code than a simple `fetch.`

  ```js
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      console.log('XMLHttpRequest Response \n-------------');
      console.log(xhr.response);
    }
  };
  xhr.open('GET', requestUrl);
  xhr.send();
  ```

  * 🔑 `AJAX` is another alternative to `Fetch`. `AJAX` requests require the use of the third-party library, jQuery, to work.
  
  ```js
  $.ajax({
    url: requestUrl,
    method: 'GET',
  }).then(function (response) {
    console.log('Ajax Reponse \n-------------');
    console.log(response);
  });
  ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why are we only using `fetch` if there are all these other options?

  * 🙋 Fetch is simple and quick to use, and requires no third party libraries. This allows us to get up and running quickly!

  * ☝️ How do we learn about these different methods of making API requests?

  * 🙋 We read their documentation.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to Slack the instruction text to the students in their class-specific channel.

### 9. Student Do: Reverse API calls (15 min)

* Direct students to the activity instructions found in `06-Stu_Reverse_APIs/README.md.`

* Break your students into pairs that will work together on this activity.

```md
# Reverse API calls

In this activity, you will work with a partner to reverse engineer the different ways code can be used make API calls.

## Instructions

 Be sure to work with your partner!

* Open the [index.html](index.html) file in your browser and open the console.

  * There are three responses in the console, examine the differences between them.

* Open [script.js](./assets/js/script.js) to examine the code.

  * Add code comments to explain the code for the three different API methods.  

## 💡 Hint(s)

* You may have to use Google to examine the differences between the 3 methods.

## 🏆 Bonus

* If you have fully completed the above tasks, here is something you and your partner can work through as an added challenge:

  * Whenever we do a fetch request, it goes through the DNS system. What is DNS?

* Use [Google](https://www.google.com) or another search engine to answer the above.
```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help while circulating through room.

### 10. BREAK (8PM - 15 mins)

### 11. Instructor Review: Reverse API calls  (10 min)

* Open up `06-Stu_Reverse_APIs/Solved/index.html`.

* Use the prompts and talking points below to review the following key (🔑) points:

  * ✔️ More than one way to make API calls.

  * ✔️ XHR requires more code, harder to consume.

  * ✔️ AJAX is similar to `fetch`, handles errors differently.

* Open `06-Stu_Reverse_APIs/Solved/assets/js/script.js` in your IDE and explain the following: 

  * 🔑 With XHR, we first check if `xhr.readtyState` equals `XMLHttpRequest.DONE`.

  ```js
  if (xhr.readyState === XMLHttpRequest.DONE) {
  ```

  * 🔑 When the above condition is met, we log our XHR response.

  ```js
    console.log('XMLHttpRequest Response \n-------------');
    .log(xhr.response);
  }
  ```

  * 🔑 XHR initializes the api call with `.open`. and sends the request with `.send`.

  ```js
  xhr.open('GET', requestUrl);
  xhr.send();
  ```

  * 🔑 jQuery uses `.ajax` to send the request to the API.   Upon completion the response is returned.

  ```js
  $.ajax({
    url: requestUrl,
    method: 'GET',
  }).then(function (response) {
    console.log('Ajax Response \n-------------');
    console.log(response);
  });
  ```

  * 🔑 AJAX and fetch are structured similarly but do not function exactly the same. `Fetch` will try to resolve the response with a 404/500 error, while `AJAX` would not.  

  ```js
  fetch(requestUrl)
      .then(function (response) {
      return response.json();
  })
  .then(function (data) {
      console.log('Fetch Response \n-------------');
      console.log(data);
  });
  ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is the difference between AJAX and fetch?

  * 🙋 Fetch will try to resolve the data even if there is a 404/500 error and is built into the browser.

  * ☝️ What can we do if we are working with an API method we aren't familIar with?

  * 🙋 Look up that method's documentation.

* Answer any questions before proceeding to the next activity.

### 12. Instructor Demo: Parse JSON (5 min)

* Open up `07-Ins_Demo_Parse/index.html` in the browser to the console. Expand the array under GitHub Organization Users.

  * 🔑 We need to examine the API response to know how to access the data we want to extract.

  * 🔑 The response we receive is an array, meaning we can loop through the data, accessing whatever specific data we want.

  ```js
  fetch('https://api.github.com/orgs/nodejs/repos')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    for (var i = 0; i < data.length; i++) {
      console.log(data[i].name);
    }
  });
  ```
  
* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can we iterate over an array of data?

  * 🙋 We can use a `for` loop, just like we would any other time we want to iterate over something!

  * ☝️ What should we do before we use our data from an API response.

  * 🙋 We should examine the data so we know what values we want from it.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to Slack the instruction text to the students in their class-specific channel.

### 13. Student Do: Parse JSON (15 mins) 

* Direct students to the activity instructions found in `08-Stu_Parse_JSON/README.md`

* Break your students into pairs that will work together on this activity.

```md
# Parsing JSON

* In this activity, you will work with a partner to use the GitHub documentation to add a parameter to a fetch request and display the proper response in the console.

## Instructions

* Be sure to work with your partner!

* Navigate to the [GitHub API Docs](https://docs.github.com/en/rest/reference/issues#list-repository-issues).

* Open [script.js](./Unsolved/assets/js/script.js) and examine the code.

* Using the documentation, implement the following:

  * Add a `path` to the end of the `requestUrl` variable such that the response is limited to 5 issues.

  * After doing so, open the `index.html` in your browser and examine the response in the console.

  * Note the issue URL and the login of the user who wrote the issue

  * In the `script.js` file, loop through the data and `console.lo`g the issue URL and the user login.

## 💡 Hint(s)

* Documentation will typically give you a list of parameters you can work with, in most cases these start with a question mark

## 🏆 Bonus

* If you have fully completed the above tasks, here is something you and your partner can work through as an added challenge:

  * We connect to these API servers through DNS, but they are attached to an ip address, research how this works

* Use [Google](https://www.google.com) or another search engine to answer the above.
```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help while circulating through room.

### 14. Instructor Review: Parse JSON (10 mins)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with reading the documentation? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

  * ✔️ Response limit parameter after `?` in URL.

  * ✔️ Parameters dictate different aspects of response.

  * ✔️ Documentation for parameters.

* Navigate to the [GitHub API Docs](https://docs.github.com/en/rest/reference/issues#list-repository-issues) and show the following in the `parameter` list:

  * The `per_page` parameter can be used to limit the amount of data that comes back in our response.

* Open [script.js](./Solved/assets/js/script.js) in your IDE and explain the following: 

  * 🔑 We add the `per_page` parameter to the end of our `requestUrl` variable and set the parameter to 5.

  ```js
  var requestUrl = 'https://api.github.com/repos/nodejs/node/issues?per_page=5';
  ```

  * 🔑 We pass our completed `requestUrl` variable as an argument to our `fetch`. Upon completion of our request, we take the `response` and convert it to JSON in our `return`.

  ```js
  fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  ```

  * 🔑 We loop through the data and console.log the properties from our API response. We use dot notation on our `data` iterator, logging the `.url` and `.user.login` properties.

  ```js
  .then(function (data) {
      for (var i = 0; i < data.length; i++) {
          .log('Github Repo Issues \n----------');
          console.log(data[i].url);
          console.log(data[i].user.login);
      }
  });
  ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Where are parameters added to an endpoint?

  * 🙋 They are normally chained on the end of our endpoint URL.

  * ☝️ Where do we find a list of parameters for a given endpoint?

  * 🙋 It can almost always be found on the documentation page.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 Read the [GitHub Docs](https://docs.github.com/en/rest), and stick around for Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 15. Instructor Demo: Generate Dynamic Elements. (5 mins)

* Open `09-Ins_Demo_Dynamic/index.html` in your browser and demonstrate the following:

  * 🔑 When we hit the `Click Me` button, the page is populated with dynamically generated HTML.

  * 🔑 We see a list of the last 5 issues from the node repo and long with the users who posted them.

* Open `09-Ins_Demo_Dynamic/assets/js/script.js` in your IDE and explain the following.

  * We first grab our root elements we will append too later.

  ```js
  var issueContainer = document.getElementById('issues');
  var fetchButton = document.getElementById('fetch-button');
  ```

  * We make our `fetch` request and then loop through the data. When we loop, we create new HTML elements, give them the content of the response, and append them to the page!

  ```js
  var userName = document.createElement('h3');
  var issueBody = document.createElement('p');
  userName.textContent = data[i].user.login;
  issueBody.textContent = data[i].body;
  issueContainer.append(userName);
  issueContainer.append(issueBody);  
  ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Can this all be done without a third party library?

  * 🙋 Yes! Fetch and other features of vanilla JavaScript will allow us to achieve this.

  * ☝️ How is this useful?

  * 🙋 This allows us to display our API responses on our webpages....dynamically!

  * ☝️ How would we build this?

  * 🙋 We loop over the data provided by the fetch response. On each loop we create an HTML element, give it the content of our response, and append it to the page.

* Let the students know that they only need to generate the dynamic elements,the fetch request has been provided for them in this upcoming activity.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `10-Stu_Demo_Dynamic/README.md`.

### 16. Student Do: Generate Dynamic Elements.(15 mins)

* Direct students to the activity instructions found in `10-Stu_Demo_Dynamic/README.md`.

* Break your students into pairs that will work together on this activity.

```md
# Using fetch data to generate dynamic HTML.

In this activity, you will work with a partner to write the code to generate the dynamic HTML from the fetch request.

## Instructions

* Be sure to work with your partner!

* Open [index.html](./Unsolved/index.html) to examine the response in the console. Then open [script.js](./Unsolved/assets/js/script.js) to implement the following features:

* As a developer I want to take the response data and generate dynamic html.

* As a developer, what I want to show in the `usersContainer` is the user login and the URL of a the GitHub profile from the search.

## 💡 Hint(s)

* Use the previous three exercises as references if needed to put this together.

## 🏆 Bonus

* If you have fully completed the above tasks, here is something you and your partner can work through as an added challenge:

  * Sometimes we need to use data that isn't from third party APIs.  The data maybe stored in json format within a file.  Research how to use fetch to read json from a data file.

* Use [Google](https://www.google.com) or another search engine to answer the above.
```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help while circulating through room.

### 17. Instructor Review: Generate Dynamic Elements. (15 mins)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with generating html from fetch data? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

  * ✔️ `document.getElementById`

  * ✔️ `for loop`

  * ✔️ dot notation

  * ✔️ `document.createElement`

  * ✔️ `.append`

* Open [script.js](./Solved/assets/js/script.js) in your IDE and explain the following:

  * 🔑 We use `document.getElementById` to target our `users` and `fetch-button` divs. We save them to the variables `usersContainer` and `fetchButton` respectively.

  ```js
  var usersContainer = document.getElementById('users');
  var fetchButton = document.getElementById('fetch-button');
  ```

  * We use fetch to make a request to receive some data. We are sure to convert it to JSON so it can be more easily consumed.

  ```js
  fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  ```

  * 🔑 We use a `for loop` to iterate through the response data.

  ```js
  for (var i = 0; i < data.length; i++) 
  ```

  * 🔑 On each iteration, we create an `H3` and `p` tag.

  ```js
  var userName = document.createElement('h3');
  var userUrl = document.createElement('p');
  ```

  * 🔑 We take the `.login` and `.url` properties off of the current iteration of our `data` array, making those the `textContent` of the `userName` and `userUrl` tags we created.

  ```js
  userName.textContent = data[i].login;
  userUrl.textContent = data[i].url;
  ```

  * 🔑 We finally append the created elements with their newly added text content to the the `div

  ```js
  usersContainer.append(userName);
  usersContainer.append(userUrl);
  ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why do we look at the response data properties?

  * 🙋 So we know what data we need to use.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 Read the [GitHub Docs](https://docs.github.com/en/rest), and stick around for Office Hours to ask for help.

* Answer any questions before ending the class.

### 18. END (0 min)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete [this anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

---
© 2020 Trilogy Education Services, LLC, a 2U, Inc. brand.  Confidential and Proprietary.  All Rights Reserved.
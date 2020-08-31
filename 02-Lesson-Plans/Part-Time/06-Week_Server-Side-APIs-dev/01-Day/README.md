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

Open [jQuery Docs](https://api.jquery.com/jquery.ajax/) in your browser and demonstrate the following:

* There is more than one way to request data from a server-side API. This is how we would request data from APIs using jQuery.
  
  ```js
  $.ajax({
      method: "GET",
      url: "https://api.github.com",
  });
  ```

* Open Chrome DevTools in the browser and go to the console.  
  
* In the console copy this and paste `fetch('https://api.github.com').then(function(response){return response.json()}) .then(console.log)`, demonstrating the following:

  * 🔑 We use fetch because it is built in the browser.

  * 🔑 This allows us to avoid using third party libraries such as jQuery.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

    * ☝️ How do we learn about using fetch?

    * 🙋 We use the documentation.

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

* Open the [index.html](index.html) file in your browser

* Open Chrome DevTools in the browser and go to the console. 

* There are three responses in the console, examine the differences between them.

* Open [script.js](./assets/js/script.js) to examine the code.

* Add comments to explain the code for the three different API methods.  

## 💡 Hint(s)

* You may have to use Google to examine the differences between the 3 methods.

## 🏆 Bonus

* If you have fully completed the above tasks, here is something you and your partner can work through as an added challenge:

  * Whenever we do a fetch request, it goes through the DNS system. How are these URLs attached to DNS?

* Use [Google](https://www.google.com) or another search engine to answer the above.
```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help while circulating through room.

### 10. BREAK (8PM - 15 mins)

### 11. Instructor Review: Reverse API calls  (10 mins) 

* Open up `06-Stu_Reverse_APIs/Solved/index.html`.

* Use the prompts and talking points below to review the following key (🔑) points:

    * ✔️ There are many methods that can be used to request API data.

    * ✔️ XHR data requires more to write and the data is harder to consume.

    * ✔️ AJAX and fetch programmatically are structured very similarly, but handle errors differently.

* Open `06-Stu_Reverse_APIs/Solved/assets/js/script.js` in your IDE and explain the following: 

    
    ```js
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            console.log('XMLHttpRequest Response \n-------------');
            .log(xhr.response);
        }
    };
    ```
     * 🔑 XHR, we check the readyState to be `DONE` before we handle the response. 
  
    ```js
    xhr.open('GET', requestUrl);
    xhr.send();
    ```

    * 🔑 XHR initializes the api call with `.open`. and sends the request with `.send`.

    ```js
    // JQuery Ajax
    $.ajax({
        url: requestUrl,
        method: 'GET',
    }).then(function (response) {
        console.log('Ajax Response \n-------------');
        console.log(response);
    });
    ```

     * 🔑 jQuery uses `.ajax` to send the request to the API.   Upon completion the response is returned.
  
    ```js
    // Browser Fetch Method

    fetch(requestUrl)
        .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log('Fetch Response \n-------------');
        console.log(data);
    });
    ```

    * 🔑 AJAX and fetch are structured similarly but they do not work exactly the same.  Fetch will still try to resolve the response with a 404/500 error.  

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

    * ☝️ What is the difference between AJAX and fetch?

    * 🙋 Fetch will try to resolve the data even if there is a 404/500 error and is built into the browser.

    * ☝️ What can we do if we are working with an API method we aren't familIar with?

    * 🙋 Look up that method's documentation.

* Answer any questions before proceeding to the next activity.

### 12. Instructor Demo: Parse JSON (5 min)

  * Open up `07-Ins_Demo_Parse/index.html` in the browser to the console. Expand the array under GitHub Organization Users.

    * 🔑 We need to examine our API data to know what properties we wish to use from the data.

    * 🔑 Because this is an array, we can loop over each element and grab values from the object properties in each element.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

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

  * Add a parameter to the end requestUrl that will limit the results to just 5 issues.

  * After doing so, run the page in the browser, it will console.log the results.

  * Examine the results and note the issue url and the login of the user who wrote the issue

  * Loop through the data in the area in the script.js file and console.log the issue url and the user login.

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

    * ✔️ Parameters are added to the after API endpoints starting with a question mark.

    * ✔️ The response results are filtered based on the parameters used.

    * ✔️ Read the documentation to discover which parameters are available.

* Navigate to the [GitHub API Docs](https://docs.github.com/en/rest/reference/issues#list-repository-issues). Scroll down until you get to the per_page parameter.

    * 🔑 This is the parameter for per_page, we need to add this to the end of our request URL.

* Open `[script.js](./Solved/assets/js/script.js)` in your browser into the console and explain the following: 

    ```js
    var requestUrl = 'https://api.github.com/repos/nodejs/node/issues?per_page=5';
    ```
    * 🔑 The parameter is added to the end of the request URL.

    ```js
    fetch(requestUrl)
    ```

    * 🔑 We fetch the request URL with the parameter.

    ```js
    .then(function (response) {
      return response.json();
    })
    ```
    
    * 🔑 Upon completion of our request, we return the `response.json()`.

    ```js
    .then(function (data) {
        for (var i = 0; i < data.length; i++) {
            .log('Github Repo Issues \n----------');
            console.log(data[i].url);
            console.log(data[i].user.login);
        }
    });
  ```
    * 🔑 We loop through the data and console.log the properties from our API response.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

    * ☝️ Where do we add the parameter in the request URL?

    * 🙋 At the end.

    * ☝️ What can we do if we don't completely understand this?

    * 🙋 Read the [GitHub Docs](https://docs.github.com/en/rest), and stick around for Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 15. Instructor Demo: Generate Dynamic Elements. (5 mins) 

* Open `09-Ins_Demo_Dynamic/index.html` in your browser and demonstrate the following:

    * 🔑 When we click on the button, dynamically generate HTML appears on the screen.

    * 🔑 We see a list of the last 5 issues from the node repo and long with the users who posted them.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

    * ☝️ How would we build this?

    * 🙋 We loop over the data provided by the fetch response.

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

* As a developer, the data I want to show in the `usersContainer` is the user login and the URL of their GitHub profile. 

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

  * ☝️ How comfortable do you feel with `generating html from fetch data`? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

    * ✔️ We received the response data from our fetch request.

    * ✔️ We determine what properties we need to use from the response.

    * ✔️ We access those properties' values in order to display them on the page.

* Open `[index.html](./Solved/index.html)` in your browser into the console and explain the following: 

    * Here is the console.log of the data. We look through this to find the properties we need.  We are using login and url

* Open `[script.js](./Solved/assets/js/script.js)` in your browser into the console and explain the following: 

    ```js
    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //Using console.log to examine the data
      console.log(data);
    ```

    * 🔑 We received the response data from our fetch request.
  
    ```js
     for (var i = 0; i < data.length; i++) 
    ```

    * 🔑 We loop through the response data.

    ```js
     for (var i = 0; i < data.length; i++) {
        //Creating a h3 element and a p element
        var userName = document.createElement('h3');
        var userUrl = document.createElement('p');
    ```

    * 🔑 We create elements..

    ```js
        //Setting the text of the h3 element and p element.
        userName.textContent = data[i].login;
        userUrl.textContent = data[i].url;
    ```

    * 🔑 We take each property from the response as use the property's value as text content for our elements.
  
    ```js
        //Appending the dynamically generated html to the div associated with the id="users"
        //Append will attach the element as the bottom most child.
        usersContainer.append(userName);
        usersContainer.append(userUrl);
      }
    ```

    * 🔑 We append each element to `<div id="users">`.

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
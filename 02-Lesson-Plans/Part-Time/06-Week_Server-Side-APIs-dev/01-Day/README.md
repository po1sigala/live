# 06.1 Part-Time Lesson Plan: Introduction to Fetch

## Overview 

In this class, we will request data from server-side APIs using Fetch and consume that data.

## Instructor Notes

* Complete activities `01-Ins_Demo_Curl` through `10-Stu_Demo_Dynamic`.

* Take a few moments before class to get familiar with the [Fetch documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch), and [GitHub API](https://docs.github.com/en/rest) as students will rely heavily on it in class and may need help finding answers.

* Throughout the class will be working with Fetch Requests.
  
* They will use the API data to dynamically generate HTML.

* Students will be repeatedly asked to refer to the GitHub Documentation.

## Learning Objectives



* Client-Server Model
  
* Light introduction to cURL

* Fetch

* Render fetched data

* Fetch vs AJAX vs XHR 

* Light introduction to API parameters.



## Time Tracker
@TODO ADD ACTIVITY TITLES for Instructor Demo, Student Do, and Instructor Review
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
  
* Inform students that this unit is all about requesting and consuming data from server-side APIs using Fetch.
  
* Explain that server-side APIs is a way for companies to exchange data. This can be thought of as a contract to exchange data. The rules of the contract is the API's documentation. As long as you follow the rules, the server will send back the data to your application.

* Open up your browser and go to `https://api.github.com`

* Explain to the class these are all endpoints URLs for githubs API.  Point out the location of the root in a few of these.
  
* Explain to them that these URLs all have `https://api.github.com` in common and that is the root endpoint.

* The root-endpoint is the starting point of the API you're requesting from. 

* The other endpoints start with the foward slash and come after the root endpoint. This allows us to request specific data from the API.

* Open the [Fetch Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) and then scroll down to the first code block, a basic fetch request.

  * Explain to the students that fetch begins with the URL of the server you are looking to receive data from
  
  * After the fetch request is completed, with the .then statement use to do something with the response. In this case we are using the built in `.json()` to convert the response to JSON.
  
  * Let them know we will discuss what is JSON a little later in the class.
  
  * After converting the response to JSON, we use another .then statement to do something with the data, in this example we console.log the data.
  
  * Let them know that this data is typically used to render dynamically generate elements.

### 2. Instructor Demo: cURL Demo (5 min) 

* Open your terminal to show the following:
  
* Type `curl https://api.github.com/users` and then press the enter or return key.

  * GitHub returned a list of the last 30 users who made a profile!

    * ☝️ What happened when I entered the curl command to GitHub.

    * 🙋 We asked GitHub for user informatiojn via our terminal!

    * ☝️ What is a good use case for cURL?

    * 🙋 We can use it to make sure our API URL is correct or working.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to Slack the instruction text to the students in their class-specific channel.

### 3. Student Do: cURL Debug (15 min) 

* Direct students to the activity instructions found in `02-Stu_Curl_Debug/README.md`.

* Break your students into pairs that will work together on this activity.

```md
# cURL Debug

In this activity, you will work with a partner using cURL

## Instructions

* Be sure to work with your partner!

* As a developer, I want to test the API I plan to use with cURL.

* When we use cURL, we should receive a response from the server, but right now the terminal returns nothing.

* Open up your terminal/gitbash.

* Copy `curl http://api.github.com` 

* Paste what you copied into the terminal and press enter or the return key

  * After pressing the enter or return key, something is definitely wrong.

  * If all goes as expected, the terminal should have gone to the next line without returning any info.

* Sometimes our errors do not give us any feedback, and referring to documentation may be the only way to reach a resolution

  * Go to [GitHub API Docs](https://docs.github.com/en/rest/overview/resources-in-the-rest-api#schema)

  * Under the "In the Article" subnavigation on the right, find the entry for "Root endpoint" and compare it with the failed cURL command we used.

## 💡 Hint(s)

* Sometimes as we start our development journey, it's easy to focus too hard on looking for large mistakes, when the problem can be caused by a small one.

## 🏆 Bonus

* If you have fully completed the above tasks, here is something you and your partner can work through as an added challenge:

  * If you wanted to save your cURL reponse text to a file, how would you do so?

* Use [Google](https://www.google.com) or another search engine to answer the above.


```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help while circulating through room.

### 4. Instructor Review: { ACTIVITY NAME } (10 mins) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Ask the class how many caught the error, although a minor one.

  * 🙋 The letter S was missing from the URL, it should be `https://api.github.com`

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

    * ✔️ Small Errors are common.

    * ✔️ They can prevent our request from working.

    * ✔️ Double checking the API URL is crucial.

* Open up your browser and go to `https://api.github.com`


    * 🔑 Double checking your work helps prevent small errors turning into big ones.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

    * ☝️ What would we reference to know if our API URL is correct.

    * 🙋 The documentation

    * ☝️ What can we do if we don't completely understand this?

    * 🙋 Stick around for Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.


* Open `03-Ins_Demo-Fetch/index.html` in the browser and show the following:

    * 🔑 We click on the button, there is a slight delay, and the data appears.
    
    * 🔑 Earlier in the class we use the term consuming the API, that means that we accept the data response from the server and did something with it.
  
* Open `03-Ins_Demo-Fetch/assets/js/script.js` in your IDE and show the following statements:
  
    * We set the request URL, that the fetch function will use to request data.
    
    ```js
    var requestUrl = 'https://api.github.com/orgs/nodejs/repos'; 
    ```
    * 🔑 We pass the requestUrl to fetch, note the root endpoint and the endpoint that follows.

     ```js
    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    ```
    * 🔑 The fetch request is sent and then we take the response and convert it into JSON.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

    * ☝️ What do we need to pass through fetch to get an API to send back data?

    * 🙋 We pass through the URL of the API we wish to use.

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

    * ✔️ The documentation has everything you need. `/users/{username}/repos` 

    * ✔️ We attached to the endpoint to the root endpoint. 

    * ✔️ We now use the URL combine to make our fetch request.

* Open `04-Stu_Click-Events/Solved/assets/js/script.js` in your IDE and explain the following: 

    * 🔑 We place take the endpoint and attached it to our root endpoint in the requestUrl variable.
    
    ```js
    function getApi() {
    // replace {USERNAME} with your github username
    var requestUrl = 'https://api.github.com/users/{USERNAME}/repos';
    ```

    * 🔑 We then pass the requestUrl as an argument.

    ```js
    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    ```

    * 🔑 The fetch request will go out to the API server when the button is clicked.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

    * ☝️ How do we build our requestUrl?

    * 🙋 We combine the endpoint with the root endpoint.

    * ☝️ What can we do if we don't completely understand this?

    * 🙋 Read the [GitHub Docs](https://docs.github.com/en/rest), and stick around for Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 8. Instructor Demo: Different APIs (5 min) 

Open [jQuery Docs](https://api.jquery.com/jquery.ajax/) in your browser and demonstrate the following:* Let the class know that there is more than one way to get data from an API.

    * 🔑 Explain to them that this is how we would request data from APIs using jQuery.

    * 🔑 State that there is more than one way to request data from an API.
    
* Open Chome DevTools in the browser and go to the console.  * In the console type or copy this and paste `fetch('https://api.github.com').then(response => response.json()) .then(console.log)`.  Press the enter or return key.

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

In this activity, you will work with a partner to reverse engineer the code to different technologies to call APIs.

## Instructions

 Be sure to work with your partner!

* Open the [index.html](index.html) file in your browser

* Open up Chrome DevTools to the console.

* Examine the differences between three responses in the console

* Open [script.js](./assets/js/script.js) to examine the code.

* Comment on the differences between the 3 methods to return an API call. Also comment on the differences on the format of the data that was returned.

## 💡 Hint(s)

* No hints, just observe.

## 🏆 Bonus

* If you have fully completed the above tasks, here is something you and your partner can work through as an added challenge:

  * Whenever we do a fetch request, it goes through the DNS system. How are these URLs attached to DNS?

* Use [Google](https://www.google.com) or another search engine to answer the above.

```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help while circulating through room.

### 10. BREAK (8PM - 15 mins)

### 11. Instructor Review: Reverse API calls  (10 mins) 

* Open up @TODO filename in the browser into the console.

* Use the prompts and talking points below to review the following key (🔑) points:

    * ✔️ Different ways to retrieve data from APIs will lead to different forms of data being returned.

    * ✔️ XHR data requires more to write and the data is harder to consume.

    * ✔️ AJAX and fetch data both came back as an array.

* Open `@TODO/folder/file` in your IDE and explain the following: 

    
    ```js
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            console.log('XMLHttpRequest Response \n-------------');
            .log(xhr.response);
        }
    };
    xhr.open('GET', requestUrl);
    xhr.send();
    ```

    * 🔑 XHR requires a lot more configuration to work properly.

    ```js
    // JQuery Ajax
    $.ajax({
        url: requestUrl,
        method: 'GET',
    }).then(function (response) {
        console.log('Ajax Reponse \n-------------');
        console.log(response);
    });

    // Browser Fetch Method

    fetch(requestUrl)
        .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log('Fetch Reponse \n-------------');
        console.log(data);
    });
    ```
    * 🔑 AJAX and fetch looks almost the same.  They also return the data in the same format.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

    * ☝️ Why do we use fetch?

    * 🙋 Because it is built into the browser.

    * ☝️ What can we do if we are working with an API method we aren't familar with?

    * 🙋 Look up that method's documentation.

* Answer any questions before proceeding to the next activity.

### 12. Instructor Demo: Parse JSON (5 min)

  * Open up `07-Ins_Demo_Parse/index.html` in the browser to the console. Expand the array under GitHub Organization Users.


    * 🔑 We need to examine our API data to know what properties we wish to use from the data.

    * 🔑 Because this is an array, we can loop over each element and grab values from the object properties in each element.}

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

  * Loop through the data in the area the script js file and console.log the issue url and the user login.

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

  * ☝️ How comfortable do you feel with `reading the documentation`? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

    * ✔️ Read the documenation

    * ✔️ Add the parameter

    * ✔️ console.log the data in a loop.

* Navigate to the [GitHub API Docs](https://docs.github.com/en/rest/reference/issues#list-repository-issues). Scroll down until you get to the per_page parameter.

    * 🔑 This is the paramater for per_page, we need to add this to the end of our request URL.

* Open `[script.js](./Solved/assets/js/script.js)` in your browser into the console and explain the following: 

    ```js
    var requestUrl = 'https://api.github.com/repos/nodejs/node/issues?per_page=5';
    ```
    * 🔑 The parameter is added to the end of the request URL.

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

    * ✔️ Examine the data from the response in the console.

    * ✔️ Determine what properties we need to use.

    * ✔️ Loop through the data and generate HTML.

* Open `[index.html](./Solved/index.html)` in your browser into the console and explain the following: 

    * Here is the console.log of the data. We look through this to find the properties we need.  We are using login and url

* Open `[script.js](./Solved/assets/js/script.js)` in your browser into the console and explain the following: 

    ```js
     for (var i = 0; i < data.length; i++) 
    ```

    * 🔑 We loop through the data

    ```js
     for (var i = 0; i < data.length; i++) {
        //Creating a h3 element and a p element
        var userName = document.createElement('h3');
        var userUrl = document.createElement('p');

        //Setting the text of the h3 element and p element.
        userName.textContent = data[i].login;
        userUrl.textContent = data[i].url;

        //Appending the dynamically generated html to the div associated with the id="users"
        //Append will attach the element as the bottom most child.
        usersContainer.append(userName);
        usersContainer.append(userUrl);
      }
    ```

    * 🔑 We generate dynamic HTML using that data.

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
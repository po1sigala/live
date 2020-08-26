# 06.1 Part-Time Lesson Plan: Introduction to Fetch

## Overview 

In this class, we will request data from server-side APIs using Fetch and consume that data.

## Instructor Notes

* Complete activities `01-Ins_Demo_Curl` through `10-Stu_Demo_Dynamic`.

* Take a few moments before class to get familiar with the [Fetch documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch), and [GitHub API](https://docs.github.com/en/rest) as students will rely heavily on it in class and may need help finding answers.

* Throughout the class will be working with Fetch Requests.
  
* @TODO

* @TODO

## Learning Objectives



* Client-Server Model
  
* Light introduction to cURL

* Fetch

* Render fetched data

* Fetch vs AJAX vs XHR 



## Time Tracker

| Start  | #   | Activity Name                      | Duration |
|---     |---  |---                                 |---       |
| 6:30PM | 1   | Instructor Do: jQuery Introduction | 0:10     |
| 6:40PM | 2   | Instructor Demo: jQuery Elements   | 0:05     |
| 6:45PM | 3   | Student Do: jQuery Elements        | 0:15     |
| 7:00PM | 4   | Instructor Review: jQuery Elements | 0:10     |
| 7:10PM | 5   | Instructor Demo: Click Events      | 0:05     |
| 7:15PM | 6   | Student Do: Click Events           | 0:15     |
| 7:30PM | 7   | Instructor Review: Click Events    | 0:10     |
| 7:40PM | 8   | Instructor Demo: Form Elements     | 0:05     |
| 7:45PM | 9   | Student Do: Form Elements          | 0:15     |
| 8:00PM | 10  | BREAK                              | 0:15     |
| 8:15PM | 11  | Instructor Review: Form Elements   | 0:10     |
| 8:25PM | 12  | Instructor Demo: DOM Traversal     | 0:05     |
| 8:30PM | 13  | Student Do: DOM Traversal          | 0:15     |
| 8:45PM | 14  | Instructor Review: DOM Traversal   | 0:10     |
| 8:55PM | 15  | Instructor Demo: Event Delegation  | 0:05     |
| 9:00PM | 16  | Student Do: Event Delegation       | 0:15     |
| 9:15PM | 17  | Instructor Review: Event Delegation| 0:15     |
| 9:30PM | 18  | END                                | 0:00     |

---

## Class Instruction

### 1. Instructor Do: Fetch Introduction (10 mins)

* Welcome students to class.
  
* Inform students that this unit is all about requesting and consuming data from server-side APIs using Fetch.
  
* Explain that server-side APIs is a way for companies to exchange data. This can be thought of as a contract to exchange data. The rules of the contract is the API's documentation. As long as you follow the rules, the server will send back the data to your application.

* Ask the students the following question: 

  * ☝️ Why do companies offer APIs?

  * 🙋 Some companies do so as a way to sell a service.  Financial/Investment companies offer little to no API options unless you pay for access.  Other companies offer APIs to expand their reach.  For example Yelp offers their API to allow businesses to integrate Yelp into their websites.

  * ☝️ Where do we get started learning jQuery?

  * 🙋 By visiting the documentation!

* Open the [Fetch Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) and then scroll down to the first code block, a basic fetch request.

  * Explain to the students that fetch begins with the URL of the server you are looking to receive data from
  
  * After the fetch request is completed, with the .then statement use to do something with the response. In this case we are using the built in `.json()` to convert the response to JSON.
  
  * Let them know we will discuss what is JSON a little later in the class.
  
  * After converting the response to JSON, we use another .then statement to do something with the data, in this example we console.log the data.
  
  * Let them know that this data is typically used to render dynamically generate elements.

### 2. Instructor Demo: cURL Demo (5 min) 

* Open your terminal to show the following:
  
* Type `curl https://api.github.com/users` and then press the enter or return key.

  * Github returned a list of the last 30 users who made a profile!

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What happened when I entered the curl command to github

  * 🙋 We asked github for user informatiojn via our terminal!

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

### 4. Instructor Review: cURL Debug (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Ask the class how many caught the error, although a minor one.

  * 🙋 The letter S was missing from the URL, it should be `https://api.github.com`

* Explain to the class, sometimes our problems with working with APIs is we didn't right the URL properly and not that the API itself isn't working.

  * ☝️ Ask the class this is called the root endpoint, what does that mean?

  * 🙋 The root endpoint is the starting point of the API, you are requesting from.

* Open up your browser and go to `https://api.github.com`

* Explain to the class these are all endpoints URLs for githubs API.  Point out the location of the root in a few of these.
  
  * ☝️ Pointing to the root end to the foward slash after .com `https://api.github.com`

  * 🙋 The endpoint is what starts with the foward slash after the root endpoint.

* Emphasize again that root endpoint is the starting point of API request.

* The endpoint that starts with the foward slash and that allows us to request specific data from the API.
  

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

    * ☝️ What is the difference between root endpoint vs the endpoint

    * 🙋 The root endpoint is the starting point of the URL, the endpoint is what comes after the .com and allows us to request specific data.

    * ☝️ What can we do if we don't completely understand this?

    * 🙋 @TODO Documentation/API REFERENCE

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to Slack the instruction text to the students in their class-specific channel.

### 5. Instructor Demo: Intro Fetch (5 min) 

* Open `03-Ins_Demo-Fetch/index.html` in the browser and show the following:

    * 🔑 We click on the button, there is a slight delay, and the data appears.
    
    * 🔑 Earlier in the class we use the term consuming the API, that means that we accept the data response from the server and did something with it.


    
* Open `03-Ins_Demo-Fetch/assets/js/script.js` in your IDE and show the following statements:
  
    * We set the request URL, that the fetch function will use to request data.
    
    ```js
    var requestUrl = 'https://api.github.com/orgs/nodejs/repos'; 
    ```
    
    * 🔑 One more time point out the root endpoint and that the endpoint starts with `/orgs`.  
    * 🔑 The fetch request is sent and then we take the response and convert it into JSON.
    * 🔑 Let them know that JSON stands for JavaScript Object Notation.
    * 🔑 It is a representation of the data structure, it's not an object or an array.
    * 🔑 Because it written like an Object, we are already familar with its structure.

    ```js
    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    ```

    * 🔑 When the button is clicked, this fetch request happens.
    * 🔑 We get the response back and then convert that response to json.

* Make mention of the event listener at the bottom, go through whatever comments that you feel are 

    ```js
    .then(function (data) {
      //Loop over the data to generate a table, each table row will have a link to the repo url
      for (var i = 0; i < data.length; i++) {
        // Creating elements, tablerow, tabledata, and anchor
        var createTableRow = document.createElement('tr');
        var tableData = document.createElement('td');
        var link = document.createElement('a');

        // Setting the text of link and the href of the link
        link.textContent = data[i].html_url;
        link.href = data[i].html_url;

        // Appending the link to the tabledata and then appending the tabledata to the tablerow
        // The tablerow then gets appended to the tablebody
        tableData.appendChild(link);
        createTableRow.appendChild(tableData);
        tableBody.appendChild(createTableRow);
      }
    });
    } 
    fetchButton.addEventListener('click', getApi);
    ```
  * 🔑 We use another then statement and the response passthrough as data.
  * 🔑 We now use that data to dynamically generate elements.
  * 🔑 This is a common use case for APIs.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

    * ☝️ In what we have seen so far, is there more than one root endpoint?

    * 🙋 No, the root point remains the same.

    * ☝️ But there are many endpoints, how do we find which ones we need to use?

    * 🙋 We read the documentation.

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

### 8. Instructor Review: Create Fetch (10 min) 

* Go to [GitHub API Docs](https://docs.github.com/en/rest/reference/repos#list-repositories-for-a-user)

* This should take you directly to the endpoint that is being used for this exercise.

  * ☝️ Ask the class how comfortable they were with the concept of an endpoint.

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

    * ✔️ `/users/{username}/repos`  This is the endpoint.
    
    * ✔️ Let them know that this `{username}` is a placeholder for our GitHub username.
    
    * ✔️ We attached to the endpoint to the root endpoint.  `

    * ✔️ We now use the URL combine to make our fetch request.

* Open `04-Stu_Click-Events/Solved/assets/js/script.js` in your IDE and explain the following: 

    * 🔑 We place our endpoint URL in the requestUrl variable.
    
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

    * 🔑 The fetch request will go out to API server when the button is clicked.
  
    * 🔑 The fetch request receives a response and we convert it to JSON by using the .json() method.

    ```js
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = data[i].html_url;
        repoList.appendChild(listItem);
      }
    });
    ```
    * 🔑 We take this JSON and use it as data to dynamically generate HTML.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

    * ☝️ @TODO - JSON question or 

    * 🙋 @TODO



* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to Slack the instruction text to the students in their class-specific channel.

### 8. Instructor Demo: Different APIs (5 min) 

* Let the class know that there is more than one way to get data from an API.

    * 🔑 Go to [jQuery Docs](https://api.jquery.com/jquery.ajax/)

    * 🔑 Explain to them that this is how we would request data from APIs using jQuery.

    * 🔑 State that there is more than one way to request data from an API.


* Ask the class this following question, without prompting for an answer.

    * Why use fetch?

    * 🔑 It is the modern way to do things. 

    * 🔑 It only requires one argument, the request URL.
    
    * 🔑 It is easier to read.

    * 🔑 No need for a third party library.

    * 🔑 It works in browser.

  

* Open Chome DevTools in the browser and go to the console.

    * Even though we earlier use cURL to initially test out our API, you can directly do so in the browser.
 
    * In the console type or copy this and paste `fetch('https://api.github.com').then(response => response.json())
    .then(console.log)`.  Press the enter or return key.

    * Expand the response and show the data.

    * Ask the class, why did we use cURL earlier, when we could have started with fetch from the beginning.

    * Explain that sometimes we work in environments where a browser isn't available.

    * Other methods such jQuery AJAX isn't available to use in the browser and this add additional over head for our web apps.

    * If we arent using jQuery for any other purpose than AJAX, would be really feasible to use jQuery for just that?

    

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

### 11. Instructor Review: Reverse APIs (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Did anybody notice any differences in the way the data was structured in the responses?

  * 🙋 The XHR request is different.

* Explain to the class that xhr requests is the precedessor to fetch.  That part of the evolution of web APIs it to make certain tasks easier over time.

  * ☝️ Did any of the responses look the same?

  * 🙋 AJAX and fetch.

* Some methods of API requests will return data in the same format.  Familarity helps when dealing with these situations.

* Open @TODO file name in your ide.
  
  * ☝️ Ask the class do any of these methods look similar to each other?

  * 🙋 AJAX and fetch look similar in setup.

  * ☝️ So which method looks the most difficult to implement?

  * 🙋 XHR requires more steps and additional setup.

* Emphasize that the goal here is to see different methods to request APIs.

* In their work environment, they would use whatever method that the employer required.
  
* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to Slack the instruction text to the students in their class-specific channel.

### 8. Instructor Demo: Different Parse (5 min)

* Ask the class, So when get these fetch requests, how do we know what data we need to capture in order to place on our web page?

  * Open up @TODO filename in the browser, open up the Chrome DevTools and go to the console. Expand the array under GitHub Organization Users.

    * 🔑 Point out that this data is an array of objects.  Expand the first element in the array.

    * 🔑 Because this is an array, we can loop over each element and grab values from the object properties in each element.

    * 🔑 Point to the login property.  If we wanted to grab each users login name, we would have to use this property value when looping through the array.

  * Close that array and open up the array under GitHub Repo Issues, expand the array, and then the first element in that array.

    * 🔑 Scroll down the console and mention that different endpoints return different data.

    * 🔑 Make sure to mention that there is no login property in this response.

    * 🔑 This means that everypoint can potentially return different data.

    * 🔑 And through our developer journey, different APIs will have different endpoints and data that they will offer to you to use.

    * 🔑 This means we need to learn to read through our response and find what pieces of data we wish to extract from our response array.

    * 🔑 Point to the login property.  If we wanted to grab each users

 ### 9. Student Do: Reverse API calls (15 min)  


* In preparation for the activity, ask TAs to Slack the instruction text to the students in their class-specific channel.


---
© 2020 Trilogy Education Services, LLC, a 2U, Inc. brand.  Confidential and Proprietary.  All Rights Reserved.
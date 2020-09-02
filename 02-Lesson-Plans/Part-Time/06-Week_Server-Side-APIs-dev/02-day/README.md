# 06.2 Part-Time Lesson Plan: Introduction to Fetch continued

## Overview 

* The majority of activities today continue off using fetch with the GitHub API. You will also be introducing the Chrome DevTools Network Activity tab, the response object and document.location web API method.

## Instructor Notes

* Complete activities `11-Ins_Network_Activity` through `20-Stu_Documentation_Location`

* Be sure to prepare and read over the activities before your class begins. Try to anticipate any questions students may have. Take a few moments before class to get familiar with the [Response documentation](https://developer.mozilla.org/en-US/docs/Web/API/Response) and [Network Activity Tab](https://developers.google.com/web/tools/chrome-devtools/network).

* Throughout the class remind the students that this will get easier as they gain familiarity with the GitHub API documentation and using Fetch.

* Remind students to do a `git pull` of the class repo to have today's activities ready and open in VS Code. 

* If you are comfortable doing so, live code the solutions to the activities. If not, no worries. Use the solutions provided and follow the prompts and talking points for review. 

* Let students know that the Bonus for each activity is meant to give them "food for thought". Rather than extra coding practice, it is a self-study on related topics that are beyond the scope of this unit for those who want to dig deeper and further their knowledge on this topic.

## Learning Objectives

By the end of class, students will be able to:

* Utilize the Chrome DevTools Network Activity Tab.

* Implement and utilize the Response Object from a fetch request.

* Implement deconstructed parameters in an API request URL.

* Implement fetch options for a fetch request.

* Utilize document location to replace the URL in the browser.

## Time Tracker

| Start  | #   | Activity Name                             | Duration |
|---     |---  |---                                        |---       |
| 6:30PM | 1   | Instructor Do: Stoke Curiosity            | 0:10     |
| 6:40PM | 2   | Instructor Demo: Network Activity         | 0:05     |
| 6:45PM | 3   | Student Do: Network Activity              | 0:15     |
| 7:00PM | 4   | Instructor Review: Network Activity       | 0:10     |
| 7:10PM | 5   | Instructor Demo: Fetch Status             | 0:05     |
| 7:15PM | 6   | Student Do: Fetch Status                  | 0:15     |
| 7:30PM | 7   | Instructor Review: Fetch Status           | 0:10     |
| 7:40PM | 8   | Instructor Demo: Deconstruct Parameters   | 0:05     |
| 7:45PM | 9   | Student Do: Deconstruct Parameters        | 0:15     |
| 8:00PM | 10  | BREAK                                     | 0:15     |
| 8:15PM | 11  | Instructor Review: Deconstruct Parameters | 0:10     |
| 8:25PM | 12  | Instructor Demo: Fetch Options            | 0:05     |
| 8:30PM | 13  | Student Do: Fetch Options                 | 0:15     |
| 8:45PM | 14  | Instructor Review:                        | 0:10     |
| 8:55PM | 15  | Instructor Demo: Document Location        | 0:05     |
| 9:00PM | 16  | Student Do: Document Location             | 0:15     |
| 9:15PM | 17  | Instructor Review: Document Location      | 0:15     |
| 9:30PM | 18  | END                                       | 0:00     |

---

## Class Instruction

### 1. Instructor Do: Stoke Curiosity (10 mins)

* Welcome students to class.

* Inform the students that we will be building upon the previous days activities and will be continuing to use the Fetch API.

* Explain that in this class we will build upon the previous day's exercises by learning how to create complex fetch requests.  We will also learn about some options available to help us debug fetch requests.

* Ask the students the following question:

  * ☝️ When something goes wrong with a `fetch` request, how do we find out what the issue was?

  * 🙋 We can use the `Response Object` and the Chrome DevTools `Network Activity Tab` to help us find out what went wrong.

  * ☝️ When trying to debug a problem, what would be a good step towards solving it?

  * 🙋 We could use search engines like Google, tech forums like StackOverflow, or even do some rubber ducky debugging!

* Open [Response Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Response) in your browser and scroll to properties, then explain the following:

  * When we make a fetch request, we receive a response object back. That object contains methods that allow us to parse out particular pieces of data.
  
* Click on the `Response.status` property, and scroll down to the coded example.

  ```js
  var myImage = document.querySelector('img');

  var myRequest = new Request('flowers.jpg');

  fetch(myRequest).then(function(response) {
    console.log(response.status); // returns 200
    response.blob().then(function(myBlob) {
        var objectURL = URL.createObjectURL(myBlob);
        myImage.src = objectURL;
    });
  });
  ```

  * We can use the `response.status` method to receive a `status code`.

  * HTTP response `status codes` are able to tell us whether a request was a success or failure.

* Ask the students the following question:

  * ☝️ How can we learn more about the Response object and status codes?

  * 🙋 We can visit the documentation!
  
### 2. Instructor Demo: Network Activity Tab (5 mins) 

* Open `11-Ins_Network_Activity/index.html` in your browser to the network activity tab and demonstrate the following.

  * 🔑 Press `command/ctrl R` to record the reload.

  * 🔑 The Network Activity tab records the loading of local and remote resources.

  * 🔑 The status codes indicate whether these resources came through successfully or not.

  * 🔑 Status codes will quickly let us know what happened with a particular request.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is the Network Activity tab useful for?

  * 🙋 It allows us to track requests and resources to and from our applications.

  * ☝️ How do we learn about using the Network Activity Tab.

  * 🙋 The Chrome DevTools documentation.

* Reiterate that whenever we use a new library, framework, or technology, it's best we familiarize ourselves with the documentation as much as possible.

* In preparation for the activity, ask TAs to Slack the instruction text to the students in their class-specific channel.

### 3. Student Do: Network Activity Tab (15 mins) 

* Direct students to the activity instructions found in `12-Stu_Network_Activity/index.html`.

* Break your students into pairs that will work together on this activity.

```md
# Network Activity Tab

In this activity, you will work with a partner to debug some broken code using the Network Activity Tab.

## Instructions

* Be sure to work with your partner!

* As a developer, I want to load my script file when opening a page.

* When I load my page, the script page should load on the Network Tab, but right now it's not!

* Open [index.html](./Unsolved/index.html) in the browser.

* Using the following questions, try to debug and fix the code:
  
  * What status values are show in the network activity tab, which one is red?
  
  * What does that status mean, use Google to find out if you are unsure.
  
  * Now that you know what the status means, think about the potential implications and start searching your code for that error.

## 💡 Hint(s)

* Examine the folder structure and make sure all the file links are correctly written.

## 🏆 Bonus

* If you have fully completed the above tasks, here is something you and your partner can work through as an added challenge to further your knowledge:

  * Expand your knowledge of the Chrome DevTools by researching about the other features the Network Activity has to available to use.

* Use [Google](https://www.google.com) or another search engine to research the above.
```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help while circulating through room.

### 4. Instructor Review: Network Activity Tab (10 mins)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with using the `Network Activity Tab`? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

  * ✔️ Use the network activity tab.

  * ✔️ Look at the status codes.

  * ✔️ Debug your code based on that information.

* Open in the browser to the network activity tab. After doing so, press `command/ctrl R ` to record the reload and demonstrate the following:

  * 🔑 We examine the status of codes of the resources in the activity tab.

  * 🔑 Red status codes indicate that there is an error.

    * Mention that after debugging, the script.js file now has a status code of 200.

* Open `12-Stu_Network_Activity/Solved/index.html` in your IDE and explain the following:

  * We can see the `src` URL was originally incorrect.

  ```html
  <script src="./script.js"></script>
  ```

  * If we change the `src` to the correct relative path, it works!

  ```html
  <script src="./assets/js/script.js"></script>
  ```

  * 🔑 After correcting the error we can go back to the `Network Activity Tab` to check if the corrections work.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can we find out if something went wrong with the resources in the `Network Activity Tab`?

  * 🙋 By checking the status code for each resource.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 Read the [Network Activity Tab docs](https://developers.google.com/web/tools/chrome-devtools/network) and stick around for Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 5. Instructor Demo: Fetch Status (5 mins)

* Open `13-Ins_Fetch_Status/index.html` in the browser to the network activity tab. After doing so, press `command/ctrl R ` to record the reload and demonstrate the following:

  * 🔑 The status for the fetch request is listed with the value of 200.

  * 🔑 This confirms that the fetch request is successful.

* Open `13-Ins_Fetch_Status/asset/js/script.js` in your IDE and demonstrate the following:

  * 🔑 We check to see if the `response.status` equals 200.
  
  ```js
    .then(function (response) {
    if (response.status === 200){
  ```

  * 🔑 If it does, we assign the status code from `response.status` to the `textContent`.

  ```js
  responseText.textContent = response.status;
  ```

  * 🔑 Finally, we return `response.json()`.

  ```js
  return response.json();
  ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can we learn more about using the `Response Object`?

  * 🙋 We read the documentation.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `14-Stu_Fetch_Status`.

### 6. Student Do: Fetch Status (15 mins) 

* Direct students to the activity instructions found in `14-Stu_Fetch_Status/README.me`.

* Break your students into pairs that will work together on this activity.

```md
# Fetch Response Status

In this activity, you will work with a partner to display content based on the response status.

## Instructions

* Be sure to work with your partner!

* Open [index.html](./Unsolved/index.html) in your browser and open the console.

* Open [script.js](./Unsolved/assets/js/script.js) to examine the code and implement the following features:

  * As a developer, I want to change the content of the page based on the response status.

  * When I visit the page, the page should show the response status when it does not equal 200.

## 💡 Hint(s)

* If you aren't sure where to place the response status take a look at line 3.

## 🏆 Bonus

* If you have fully completed the above tasks, here is something you and your partner can work through as an added challenge to further your knowledge:

  * At some point in your coding journey, when working with APIs, you are going to have to deal with CORS. Research what is CORS and how it could interfere with your fetch request.

* Use [Google](https://www.google.com) or another search engine to research the above.
```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help while circulating through room.

### 8. Instructor Review: Fetch Status (10 mins) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with using `response.status`? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

  * ✔️ `response.status.`

  * ✔️ text changes based on `response.status`

* Open `14-Stu_Fetch_Status/Solved/assets/js/script.js` in your IDE and explain the following:

  * 🔑 We check if the `response.status` does not equal 200.

  ```js
  .then(function (response) {
    if (response.status !== 200) {
  ```

  * 🔑 We assign the `textContext` to be equal to the `response.status`.

  ```js
  responseText.textContent = response.status;
  ```

  * 🔑 We still return `response.json()` as fetch will try to resolve the response most of the time.  

  ```js
  return response.json();
  ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why is this useful?

  * 🙋 Knowing the status codes of responses and working with them is vital to creating a good user experience.

  * ☝️ How does this help us as developers?

  * 🙋 Status codes allow us to quickly identify what is causing issues.

  * ☝️ How do we check if the fetch request is working properly?

  * 🙋 We check the `response.status`.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 Read the [Response documentation](https://developer.mozilla.org/en-US/docs/Web/API/Response), and stick around for Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 8. Instructor Demo: Deconstruct Parameters (5 mins) 

* Navigate to the [GitHub Docs](https://docs.github.com/en/rest/reference/gists#list-public-gists) in your browser.

  * 🔑 Using multiple parameters allows us to customize the response.

  * 🔑 We can find these parameters in the API's documentation.

* Open `15-Ins_Deconstruct_Parameters/assets/script/js` in your ide and demonstrate the following:

  * 🔑 We attached multiple parameters after `?` in the URL.

  ```js
  fetch('https://api.github.com/gists/public?since=2020-06-01&per_page=30')
  ```

  * 🔑  We use the `&` symbol to chain the parameters together.

  ```js
  ?since=2020-06-01&per_page=30
  ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

    * ☝️ How would we know which parameters we can use in the fetch request?

    * 🙋 By reading the API's documentation.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `16-Stu_Deconstruct_Parameters/README.md`.

### 9. Student Do: Deconstruct Parameters (15 mins) 

* Direct students to the activity instructions found in `16-Stu_Deconstruct_Parameters/README.md`.

* Break your students into pairs that will work together on this activity.

```md
# Deconstruct Parameters

In this activity, you will work with a partner to reverse engineer API parameters.

## Instructions

* Learning how to read documentation is a crucial skill to have in your developer toolbelt.

* Navigate to the [GitHub Docs](https://docs.github.com/en/rest/reference/issues#list-repository-issues) in your browser.

* Open [script.js](./Unsolved/assets/js/script.js) in your IDE and examine the code.

* Insert comments where specified to explain the parameters by using the parameter list in the documentation as a reference.

## 💡 Hint(s)

* Pay attention to the URL structure in the fetch request.

## 🏆 Bonus

* If you have fully completed the above tasks, here is something you and your partner can work through as an added challenge to further your knowledge:

  * Research query strings and how they are used to create parameters for APIs.

* Use [Google](https://www.google.com) or another search engine to research the above.
```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help while circulating through room.

### 10. BREAK (15 mins)

### 11. Instructor Review: Deconstruct Parameters (10 mins) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with using `parameters`? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

    * ✔️ Documentation for the parameter definitions.
    
    * ✔️ Attached multiple parameters after `?` in the URL.

    * ✔️ Use the `&` symbol to chain the parameters together.

* Navigate to the [GitHub Docs](https://docs.github.com/en/rest/reference/issues#list-repository-issues) in your browser.

    * 🔑 We read the documentation to find each parameter's definition.

* Open `16-Stu_Deconstruct_Parameters/Solved/assets/js/script.js` in your IDE and explain the following: 

    * 🔑 We attached multiple parameters after `?` in the URL.
  
    ```js
    fetch('https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created& direction=desc')
    ```

    * 🔑 We use the `&` symbol to chain the parameters together.
    
    ```js
    per_page=10&state=open&sort=created&direction=desc
    ```
    
    * Make sure you go over what each parameter filters in the comments section.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

    * ☝️ Where do we write the parameters?

    * 🙋 After `?` in the URL.

    * ☝️ How do we chain the parameters?

    * 🙋 With the `&` symbol.

    * ☝️ What can we do if we don't completely understand this?

    * 🙋 We read the API's documentation and stick around for Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 12. Instructor Demo: Fetch Options (5 mins) 

* Open `17-Ins_Fetch_Options/assets/js/script.js` in your ide and demonstrate the following:

    * 🔑 We write the fetch request.

    ```js
    fetch('https://api.github.com/repos/nodejs/node/issues?per_page=5')
    ```

    * 🔑 Fetch options are passed through as an additional `init` object argument.

    ```js
    fetch('https://api.github.com/repos/nodejs/node/issues?per_page=5', {
        method: 'GET',
        credentials: 'same-origin',
        redirect: 'follow',
    })
    ```

    * 🔑 Fetch options are optional.  Their usage is dependent on the API's documentation and/or the web app's requirements.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

    * ☝️ How do we learn about fetch options?

    * 🙋 We read the documentation [Fetch Docs](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `18-Stu__Fetch_Options/README.md`.

### 13. Student Do: Fetch Options (15 mins) 

* Direct students to the activity instructions found in `18-Stu__Fetch_Options/README.md`.

* Break your students into pairs that will work together on this activity.

```md
# Fetch Options

In this activity, you will work with a partner to use MDN documentation to implement fetch options.

## Instructions

* Be sure to work with your partner!

* Navigate to the [Fetch Docs](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) in your browser.

* Open [script.js](./Unsolved/assets/js/script.js) in your IDE and examine the code.

* Using the documentation, implement the following:

  * We are given a fetch request.

  * When we send the fetch request, the fetch request should have one option.
  
    * A cache with a value of reload.
    
## 💡 Hint(s)

* Remember to use an object to passthrough the options.

## 🏆 Bonus

* If you have fully completed the above tasks, here is something you and your partner can work through as an added challenge to further your knowledge:

  * Research what is OAuth and how does it tie into APIs.

* Use [Google](https://www.google.com) or another search engine to research the above.
```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help while circulating through room.

### 14. Instructor Review: Fetch Options (10 mins) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with using `fetch options`? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

    * ✔️ Write the fetch request.

    * ✔️ Pass the fetch option(s).

    * ✔️ The browser updates the cache.

* Open `18-Stu__Fetch_Options/Solved/assets/js/script.js` in your IDE and explain the following: 

    * 🔑 We write the fetch request.

    ```js
    fetch('https://api.github.com/repos/nodejs/node/issues?per_page=5',
    ```

    * 🔑 We pass through the `cache: reload` option using the `init` object.

    * 🔑 The browser fetches the resource from the remote server without first looking in the cache, but then will update the cache with the downloaded resource.

    ```js
    fetch('https://api.github.com/repos/nodejs/node/issues?per_page=5', {
        cache: 'reload',
    })
    ```

    * We write the remainder of the fetch request.
  
    ```js
    .then(function (response) {
        return response.json();
    })
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

    * ☝️ How do we write fetch options?

    * 🙋 With an `init` object that is passed as an additional argument in the fetch request.

    * ☝️ How do we know which fetch options to use with the API?

    * 🙋 By reading the API's documentation.

    * ☝️ What can we do if we don't completely understand this?

    * 🙋 Read the [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch), and stick around for Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 15. Instructor Demo: Document Location (5 mins) 

* Go to [Location Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Document/location) and then scroll down to Syntax.

    * 🔑 The Document.location is a read-only property that returns a Location object.

    * 🔑 This provides information on the URL of the document.

* Open your console and Run `document.location`.  Then expand the `location object` and demonstrate the following: 

    * 🔑 Here is the `location object` with the browser's current location.

    * 🔑 We can use the `location.href` property to set the URL or get the URL.

* In the console and Run `document.location.href = 'https://www.google.com'`. 

    * 🔑 The browser URL changed to the value assigned to `document.location.href`.

    * 🔑 The `location object` has other methods that can change the URL for specific purposes.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

    * ☝️ How would we learn to use the `Location Object`?

    * 🙋 Read the the documentation. [Location Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Document/location) 

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `20-Stu__Document_Location/README.md`.

### 16. Student Do: Document Location (15 mins) 

* Direct students to the activity instructions found in `20-Stu__Document_Location/README.md`.

* Break your students into pairs that will work together on this activity.

```md
# Document Location

In this activity, you will work with a partner to use MDN documentation to implement location replace.

## Instructions

* Be sure to work with your partner!

* Navigate to the [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/Location/replace) in your browser.

* Open [script.js](./Unsolved/assets/js/script.js) in your IDE and examine the code.

* Using the documentation, implement the following:

  * We are given a 404 responses status.

  * When we receive the 404 status, then the app should use the location.replace method to go to the 404.html page.

## 💡 Hint(s)

* Make sure you attach location.replace to the document.

* Make sure you use the relative path of the 404.html file.

## 🏆 Bonus

* If you have fully completed the above tasks, here is something you and your partner can work through as an added challenge to further your knowledge:

  * Sometimes APIs don’t return JSON, they can return other data formats such as XML. Research how to convert XML to JSON.

* Use [Google](https://www.google.com) or another search engine to research the above.
```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help while circulating through room.

### 17. Instructor Review: Document Location (15 mins)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with using the `Location Object`? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

    * ✔️ Check the `response.status`.

    * ✔️ Replace the `document.location`.

    * ✔️ The browser URL will go to new `document.location`.

* Open `20-Stu__Document_Location/Solved/assets/js/script.js` in your IDE and explain the following: 

    * We set the redirect URL to a variable. This is the URL that the replace method will use.

    ```js
    var redirectUrl = './404.html';
    ```

    * We send the fetch request.

    ```js
    fetch(badRequestUrl)
    ```

    * 🔑 We check the `response.status` to see if it equals 404.
    
    ```js
    if (response.status === 404)
    ```
    
    * 🔑 If the `response.status` equals 404, we pass the `redirectURL` variable as an argument into the `document.location.replace` method.

    ```js
    document.location.replace(redirectUrl);
    ```

    *  If the `response.status` does not equal 404, we return `response.json()`.

    ```js
    else {
        return response.json();
    }
    ```

    * This time we did not return `response.json()` after the if statement because we are changing the `document.location` based on the `response.status`.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

    * ☝️ What does the `document.replace` method do? 

    * 🙋 The `document.replace` method, replaces the current document with the URL that is passed as an argument.  

    * ☝️ What can we do if we don't completely understand this?

    * 🙋 Read the [Location Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Document/location) , and stick around for Office Hours to ask for help.

* Answer any questions before ending the class.

### 18. END (0 min)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete [this anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

---
© 2020 Trilogy Education Services, LLC, a 2U, Inc. brand.  Confidential and Proprietary.  All Rights Reserved.
# XX.X Part-Time Lesson Plan: Introduction to Fetch continued

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

* Utilize the Chrome DevTools Network Activity Tab to debug resources. FIXME:

* Implement and utilize the response object from a fetch request.

* Deconstruct multiple parameters in an API request URL.

* Implement fetch options for the fetch request.

* Utilize document location to replace the URL in the browser.

## Time Tracker
@TODO: ADD ACTIVITY TITLES for Instructor Demo, Student Do, and Instructor Review
| Start  | #   | Activity Name                       | Duration |
|---     |---  |---                                  |---       |
| 6:30PM | 1   | Instructor Do: Stoke Curiosity      | 0:10     |
| 6:40PM | 2   | Instructor Demo:                    | 0:05     |
| 6:45PM | 3   | Student Do:                         | 0:15     |
| 7:00PM | 4   | Instructor Review:                  | 0:10     |
| 7:10PM | 5   | Instructor Demo:                    | 0:05     |
| 7:15PM | 6   | Student Do:                         | 0:15     |
| 7:30PM | 7   | Instructor Review:                  | 0:10     |
| 7:40PM | 8   | Instructor Demo:                    | 0:05     |
| 7:45PM | 9   | Student Do:                         | 0:15     |
| 8:00PM | 10  | BREAK                               | 0:15     |
| 8:15PM | 11  | Instructor Review:                  | 0:10     |
| 8:25PM | 12  | Instructor Demo:                    | 0:05     |
| 8:30PM | 13  | Student Do:                         | 0:15     |
| 8:45PM | 14  | Instructor Review:                  | 0:10     |
| 8:55PM | 15  | Instructor Demo:                    | 0:05     |
| 9:00PM | 16  | Student Do:                         | 0:15     |
| 9:15PM | 17  | Instructor Review:                  | 0:15     |
| 9:30PM | 18  | END                                 | 0:00     |

---

## Class Instruction

### 1. Instructor Do: Stoke Curiosity (10 mins)

* Welcome students to class.

* Inform the students that we will be building upon the previous days activities and will be continuing to use the Fetch API.

* Ask the students the following question: 

    * ☝️ What purpose does fetch serve?

    * 🙋 It allows us to communicate with server-side APIs and request their data.

* Explain to the class we need learn how to debug fetch requests @FIXME:

* Go to [Response Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Response) and then scroll down to response properties.

    * The Response interface of the Fetch API represents the response to a request.
    
    * Click on the `Response.status ` property, and scroll down to the coded example.

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

    * The `response.status` returns a status code.

    * The code returned is based on whether the response was successful or not.
    
    * In this case the code is 200, which means success.

* Ask the students the following question: 

    * ☝️ How can we learn about Response Object?

    * 🙋 By visiting the documentation!
  
### 2. Instructor Demo: Network Activity Tab (5 mins) 

* Open `11-Ins_Network_Activity/index.html` in your browser to the network activity tab.  After doing so, press `command/ctrl R `to record the reload and demonstrate the following:

    * 🔑 The Network Activity tab records the loading of local and remote resources.

    * 🔑 The status codes indicate whether we had an issue with our resources.

    * 🔑 Status codes will confirm whether our resource is working properly.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

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

* As a developer, I want to see why my script file isn't loading

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

  * ☝️ How comfortable do you feel with `using the Network Activity Tab`? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

    * ✔️ @TODO: { THIS }

    * ✔️ @TODO: { THAT }

    * ✔️ @TODO: { THE OTHER }

* Open `@TODO:/folder/file` in your IDE and explain the following: 

    * @TODO: { WE DO THIS AND THE RESULT IS THAT }

    ```
    @TODO: ADD CODE SNIPPET, TABBED
    ```

    * 🔑 @TODO: DON'T FORGET TO USE THE KEY EMOJI ON KEY POINTS, BUT ONLY KEY POINTS, NOT _EVERY_ POINT

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

    * ☝️ @TODO: { DO WE END OUR REVIEWS WITH A QUESTION? }

    * 🙋 @TODO: { YES, WE DO! }

    * ☝️ What can we do if we don't completely understand this?

    * 🙋 @TODO: We can refer to supplemental material, read the [{ DOCS }]({ URL }), and stick around for Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 5. Instructor Demo: 13-Ins_Fetch_Status (5 mins) 

* Open `13-Ins_Fetch_Status/asset/js/script.js` in your ide and demonstrate the following: 

    * 🔑 We check to see the `response.status` equals 200.
    
    ```js
    .then(function (response) {
      if (response.status === 200) {
        
      }
    ```

    * 🔑 If it does we place the status code `response.status` on the page.

    ```js
    responseText.textContent = response.status;
    ```
    * 🔑 We return `response.json()`.

    ```js
    return response.json();
    ```

* Open `13-Ins_Fetch_Status/index.html` in the browser to the network activity tab. After doing so, press `command/ctrl R ` to record the reload and demonstrate the following:

    * 🔑 The status for the fetch request is listed with the value of 200.

    * 🔑 We check to see the `response.status` equals 200.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

    * ☝️ How do learn about using the Response Object.

    * 🙋 We read the documentation. 

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `14-Stu_Fetch_Status`.

### 6. Student Do: Fetch Response Status (15 mins) 

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

### 8. Instructor Review: Fetch Response Status (10 mins) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with checking the `response.status`? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

    * ✔️ We send our fetch request.

    * ✔️ We check our `response.status.`

    * ✔️ We return `response.json()`

* Open `14-Stu_Fetch_Status/Solved/assets/js/script.js` in your IDE and explain the following: 

    * 🔑 We send our fetch request.

    ```js
    fetch(requestUrl)
    ```
    * 🔑 We check the `response.status` and if it does not equal 200, we place the `response.status` on the page.

    ```js
    .then(function (response) {
      if (response.status !== 200) {
        responseText.textContent = response.status;
      }
    ```
    * 🔑 We still return `response.json()` as fetch will still resolve response with errors, unless the error is due to a network failure.  

    ```js
    return response.json();
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

    * ☝️ How do we check if our fetch request is working properly?

    * 🙋 We check the `response.status`.

    * ☝️ What can we do if we don't completely understand this?

    * 🙋 Read the [Response documentation](https://developer.mozilla.org/en-US/docs/Web/API/Response), and stick around for Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 8. Instructor Demo: Deconstruct Parameters (5 mins) 

* Open `15-Ins_Deconstruct_Parameters/index.html` in your browser to the console and demonstrate the following:

    * 🔑 We can filter our fetch response using multiple parameters.

* Open `15-Ins_Deconstruct_Parameters/assets/script/js` in your ide and demonstrate the following:

    * 🔑 We attached multiple parameters after `?` in URL.

    ```js
    fetch('https://api.github.com/gists/public?since=2020-06-01&per_page=30')
    ```

    * 🔑  We use the `&` symbol to chain the parameters together.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

    * ☝️ How would we know which parameters we can chain together?

    * 🙋 We read the API's documentation.

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

  * ☝️ How comfortable do you feel with API parameters? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

    * ✔️ We read the documentation for parameter definitions.
    
    * ✔️ We attached multiple parameters after `?` in URL.

    * ✔️ We use the `&` symbol to chain the parameters together.

* Navigate to the [GitHub Docs](https://docs.github.com/en/rest/reference/issues#list-repository-issues) in your browser.

    * We read the documentation for parameter definitions.

* Open `16-Stu_Deconstruct_Parameters/Solved/assets/js/script.js` in your IDE and explain the following: 

    * 🔑 @TODO: DON'T FORGET TO USE THE KEY EMOJI ON KEY POINTS, BUT ONLY KEY POINTS, NOT _EVERY_ POINT

    ```
    @TODO: ADD CODE SNIPPET, TABBED
    ```

    * 🔑 @TODO: DON'T FORGET TO USE THE KEY EMOJI ON KEY POINTS, BUT ONLY KEY POINTS, NOT _EVERY_ POINT

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

    * ☝️ @TODO: { DO WE END OUR REVIEWS WITH A QUESTION? }

    * 🙋 @TODO: { YES, WE DO! }

    * ☝️ What can we do if we don't completely understand this?

    * 🙋 @TODO: We can refer to supplemental material, read the [{ DOCS }]({ URL }), and stick around for Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 12. Instructor Demo: Fetch Options (5 mins) 

* Open `17-Ins_Fetch_Options/assets/js/script.js` in your ide and demonstrate the following:

    * 🔑 We write our fetch request.

    ```js
    fetch('https://api.github.com/repos/nodejs/node/issues?per_page=5')
    ```

    * 🔑 Fetch options are passed through in an additional `init` object argument.

    ```js
    fetch('https://api.github.com/repos/nodejs/node/issues?per_page=5', {
        method: 'GET',
        credentials: 'same-origin',
        redirect: 'follow',
    })
    ```

    * 🔑 Fetch options are dependent on your site's and API's requirements:

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

* Navigate to the [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) in your browser.

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

  * ☝️ How comfortable do you feel with `fetch options`? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

    * ✔️ We write our fetch request.

    * ✔️ We pass our fetch options.

    * ✔️ Fetch options are situational.

* Open `18-Stu__Fetch_Options/Solved/assets/js/script.js` in your IDE and explain the following: 

    * 🔑 We write our fetch request.

    ```js
    fetch('https://api.github.com/repos/nodejs/node/issues?per_page=5',
    ```

    * 🔑 We pass through our `cache: reload` option as an object.

    ```js
    fetch('https://api.github.com/repos/nodejs/node/issues?per_page=5', {
        cache: 'reload',
    })
    ```
    * We write the remainder of our fetch request as normal.
  
    ```js
    .then(function (response) {
        return response.json();
    })
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

    * ☝️ @TODO: { DO WE END OUR REVIEWS WITH A QUESTION? }

    * 🙋 @TODO: { YES, WE DO! }

    * ☝️ What can we do if we don't completely understand this?

    * 🙋 @TODO: We can refer to supplemental material, read the [{ DOCS }]({ URL }), and stick around for Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 15. Instructor Demo: { ACTIVITY NAME } (5 mins) 

@TODO: USE THE FOLLOWING FOR BROWSER AND/OR COMMAND LINE DEMOS, RESPECTIVELY. REMOVE IF UNUSED

* Open `@TODO:/folder/file` in your browser and demonstrate the following:

* Run `@TODO:/folder/file { AND ARGS, IF ANY }` from the command line and demonstrate the following: 

    * 🔑 @TODO: { WHEN WE DO THIS, IT DOES THAT. }

    * 🔑 @TODO: { WE ALSO SEE THESE THINGS. }

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

    * ☝️ How would we build this?

    * 🙋 @TODO: { YES, HOW? } 

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `@TODO:/folder/file`.

### 16. Student Do: { ACTIVITY NAME } (15 mins) 

* Direct students to the activity instructions found in `@TODO:/folder/file`.

* Break your students into pairs that will work together on this activity.

```md
@TODO: ADD INSTRUCTIONS
```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help while circulating through room.

### 17. Instructor Review: { ACTIVITY NAME } (15 mins)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with `@TODO: TOPIC`? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

    * ✔️ @TODO: { THIS }

    * ✔️ @TODO: { THAT }

    * ✔️ @TODO: { THE OTHER }

* Open `@TODO:/folder/file` in your IDE and explain the following: 

    * @TODO: { WE DO THIS AND THE RESULT IS THAT }

    ```
    @TODO: ADD CODE SNIPPET, TABBED
    ```

    * 🔑 @TODO: DON'T FORGET TO USE THE KEY EMOJI ON KEY POINTS, BUT ONLY KEY POINTS, NOT _EVERY_ POINT

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

    * ☝️ @TODO: { DO WE END OUR REVIEWS WITH A QUESTION? }

    * 🙋 @TODO: { YES, WE DO! }

    * ☝️ What can we do if we don't completely understand this?

    * 🙋 @TODO: We can refer to supplemental material, read the [{ DOCS }]({ URL }), and stick around for Office Hours to ask for help.

* Answer any questions before ending the class.

### 18. END (0 min)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete [this anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

---
© 2020 Trilogy Education Services, LLC, a 2U, Inc. brand.  Confidential and Proprietary.  All Rights Reserved.
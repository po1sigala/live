# 06.1 Part-Time Lesson Plan: Introduction to Fetch

## Overview 

In this class, we will request data from server-side APIs using Fetch and consume that data.

## Instructor Notes

* Complete activities `01-Ins_Demo_Curl` through `10-Stu_Demo_Dynamic`.

* Take a few moments before class to get familiar with the [jQuery documentation](https://api.jquery.com/), as students will rely heavily on it in class and may need help finding answers.

* Throughout the class, reiterate often that the DOM methods we have used previously like `document.getElementById`, `document.createElement`, and `Element.innerHTML` all have corresponding jQuery methods as well as a powerful selector feature, to select elements in the DOM.
  
* Students can get hung up on learning the correct syntax. Encourage them that the interface gets easier to understand with practice and time.

* If students continually question why they are learning jQuery, since we have already learned how to manipulate the DOM with vanilla JavaScript, it is due to the prevalence of jQuery on the web due to its long run of popularity. Also, how to learn new libraries and measure their benefits is an important skill to have.

## Learning Objectives

We will use Fetch to:

* Create and select DOM elements
  
* Assign content or styling to a DOM element 

* Append, prepend, and replace elements to the DOM

* Traverse the DOM through parent, child, and sibling elements

* Attach event listeners and their corresponding event handling functionality 

* Delegate events for elements that have been dynamically created

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
  
* Explain that server-side APIs is a way for companies to exchange data.  This can be thought of as a contract to exchange data.  The rules of the contract is the API's documentation.  As long as you follow the rules, the server will send back the data to your application.

* `You are welcome to use your analogy`.  Explain to the students that you can think of using server-side API like eating dinner at a restaurant.  The menu is the contract.    You send your request that travels through the internet.  In thisinternet is your waiter.  The waiter takes the request to the chef.  The chef is the server, he preps your data as the meal.  

* Ask the students the following question: 

    * ☝️ Why do companies offer APIs?

    * 🙋 Some companies do so as a way to sell a service.  Financial/Investment companies offer little to no API options unless you pay for access.  Other companies offer APIs to expand their reach.  For example Yelp offers their API to allow businesses to integrate Yelp into their websites.

    * ☝️ Where do we get started learning jQuery?

    * 🙋 By visiting the documentation!

* Open the [jQuery web site](https://jquery.com/) and then select the "API Documentation" menu link to open the documentation and do the following:

    * Review the menu on the left of different categories of DOM manipulation methods.
    
    * In order to use these methods, we must first use the jQuery selector to choose an element to manipulate.
    
    * In the Selectors category, select Basic to see how jQuery selects elements with attributes like `class` and `id` as well as by the element name, such as `$("div")`.
    
    * Once an element has been selected, we can use the dot notation to invoke a jQuery method.
    
    * Go back to the main menu and select the CSS category for the `.css()` method.
    
    * Demonstrate the following code `$("someElement").css("background-color", "grey")`.
    
    * Use the examples in the documentation to see how the methods work.

### 2. Instructor Demo: cURL Demo (5 min) 

* Open `your terminal` to demonstrate the following:
  
    * Even though the primary focus is to use Fetch in the web browser, there are other methods to communicate with APIs.
  
* In your terminal type  `curl https://api.github.com/users` and then press the enter or return key.
   
    * ☝️ What happened after I press enter/return
    
    * 🙋 Data appeared in the terminal
  
    * We are sending API request in our terminal, that goes through the internet.  The server receives that request, and sends back data.
    
    * We can find this link at [https://code.jquery.com/](https://code.jquery.com/). We chose the minified version of jQuery 3.5.1. 
    
    ``` 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

    * ☝️ What are the vanilla JavaScript functions that can achieve similar results?

    * 🙋 `document.createElement`, `document.querySelector`, `Element.textContent`, `Element.setAttribute`, `Element.className`, and `Element.style`.

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

  * 🙋 The letter S was missing from the URL, it should be https://api.github.com

  * ☝️ Ask the class this is called the root endpoint, what does that mean?

  * 🙋 The root endpoint is the starting point of the API, you are requesting from.

* Open up your browser and go to `https://api.github.com`
  
  * ☝️ Ask the class what is the start

  * 🙋 The root endpoint is the starting point of the API, you are requesting from.
  



* Ask the class the following questions (☝️) and call on students for the answers (🙋):

    * ☝️ What is the difference between `$("<div>")` vs `$("div")` in jQuery?

    * 🙋 `$("<div>")` creates a new `<div>` element. `$("div")` will select every `<div>` in the document and return them in an array.

    * ☝️ What can we do if we don't completely understand this?

    * 🙋 We can refer to supplemental material, read the [jQuery documentation](https://api.jquery.com/), look at examples, and stick around for Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to Slack the instruction text to the students in their class-specific channel.

### 5. Instructor Demo: Click Events (5 min) 

* Open `03-Ins_Demo-Fetch/index.html` in the browser and show the following:

    * 🔑 We click on the button, there is a slight delay, and the data appears.
    
    * 🔑 Earlier in the class we use the term consuming the API, that means that we accept the data response from the server and did something with it.
    
* Open `03-Ins_Demo-Fetch/assets/js/script.js` in your IDE and show the following statements:
  
    * We set the request URL, that the fetch function will use to request data.
    
    ```js
    var requestUrl = 'https://api.github.com/orgs/nodejs/repos'; 
    ```
    
    * 🔑 The fetch request is sent and then we take the response and convert it into JSON.
    * 🔑 Let them know that JSON stands for JavaScript Object Notation.
    * 🔑 It is a representation of the data structure, it's not an object or an array.
    * 🔑 It has key value pairs

    ```js
    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    ```

    * 🔑 We add the event handler, `alert("Hello World")`, to the callback function.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

    * ☝️ What other types of event listeners are there?

    * 🙋 Mouse, Key, Browser events, and more

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to Slack the instruction text to the students in their class-specific channel.

### 6. Student Do: Click Events (15 min) 

* Direct students to the activity instructions found in `04-Stu_Click-Events/README.md`.

* Break your students into pairs that will work together on this activity.

```md
# Create a fetch request

In this activity, you will work with a partner to request data from GitHub using the Fetch API.

## Instructions

* Be sure to work with your partner!

* Open up the script file [script.js](./Unsolved/assets/js/script.js)

  * As a user, when I click the button, I want a list of repo URLs to appear on the page.

* Go to [GitHub API Docs](https://docs.github.com/en/rest/reference/repos-list-repositories-for-a-user) and find the endpoint to list the repositories for your GitHub username

* Use this information to create the correct URL for the fetch request and assign it to the requestUrl variable.

## 💡 Hint(s)

* The end points are written after the root URL of the API.

## 🏆 Bonus

* If you have fully completed the above tasks, here is something you and your partner can work through as an added challenge:

  * In fetch requests we use the URL, what is the difference between URL and URI?

* Use [Google](https://www.google.com) or another search engine to answer the above.

```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help while circulating through room.

### 8. Instructor Review: Click Events (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with adding click events with jQuery? (Poll via First of Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

    * ✔️ `$(document).ready()` 
    
    * ✔️ Attach the click event

    * ✔️ Callback functions of event listeners are for event handling

* Open `04-Stu_Click-Events/Solved/assets/js/script.js` in your IDE and explain the following: 

    * 🔑 We add the `ready()` function to ensure the DOM is available.
    
    ```js
    $(document).ready()
    ```

    * 🔑 We attach the click event to the button element.

    ```js
    newButton.click(function() {
      passwordEl.text(passwordGenerator(15));
    });
    ```

    * 🔑 We place the action in response to the click event, the event handler, in the callback function.
  
    * We set the length of the password to 15 by assigning this value to the parameter of the `passwordGenerator`.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

    * ☝️ Do the password functions need to be inside the `ready()` function?

    * 🙋 No, since they are just logic and have nothing to do with manipulating the DOM.

    * ☝️ What can we do if we don't completely understand this?

    * 🙋 We can refer to supplemental material, read the [jQuery Docs on mouse events](https://api.jquery.com/category/events/mouse-events/), and stick around for Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to Slack the instruction text to the students in their class-specific channel.

### 8. Instructor Demo: Form Elements (5 min) 

* Open `05-Ins_Form-Elements/index.html` in the browser and demonstrate the following:

    * 🔑 Open the browser console.

    * 🔑 Fill out the form and click 'Submit'. We see the form input logged in the console.

    * 🔑 We used jQuery to create the text input fields dynamically.

* Open `05-Ins_Form-Elements/assets/js/script.js` in your IDE and show the following:

    * We can use `append()` to attach the first name text input field to its corresponding label. 
 
    ```js
    firstLabelEl.append(firstEl);
    ```
    
    * We can use `submit()` as the click event for the `<form>` element.
 
    ```js
    formEl.submit(function (event) {
    ```
    
    * We use the `event` to prevent the page refresh default action for the `submit` event.
    
    ```js
    event.preventDefault();
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

    * ☝️ Can we use the `submit()` event for other elements beside forms?

    * 🙋 No, `submit` can only be used with forms.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to Slack the instruction text to the students in their class-specific channel.

### 9. Student Do: Reverse API calls (15 min) 

* Direct students to the activity instructions found in `06-Stu_Form-Elements/README.md.`

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

### 11. Instructor Review: Form Elements (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with Form Elements in jQuery? (Poll via First of Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

    * ✔️ `append()` 

    * ✔️ `prepend()` 
    
    * ✔️ `submit()`

* Open `06-Stu_Form-Elements/Solved/assets/js/script.js` in your IDE and explain the following: 

    * In the first part, we create the form, with a series of prepending and appending to the form and root elements.

    * 🔑 We attach the `<form>` to the root element using `append()`.

    ```js
    rootEl.append(formEl);
    ```

    * 🔑We attach the `<input>` to the `<label>` to create an association using `prepend()`.

    ```js
    formEl.prepend(labelEl);
    ```

    ```js
    labelEl.append(inputEl);
    ```
    
    * 🔑 We attach `submit()` to the `<form>` element.

    ```js
    formEl.submit(function(event) {
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

    * ☝️ What are some differences between the `click` and the `submit` events?

    * 🙋 `submit` is used to post a form so can only be attached to form elements. `click` can be attached to any element. `submit` event is not strictly a mouse event whereas `click` is.

    * ☝️ What can we do if we don't completely understand this?

    * 🙋 We can refer to the supplemental material, read the [jQuery Docs on Forms](https://api.jquery.com/category/forms/), and stick around for Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to Slack the instruction text to the students in their class-specific channel.

### 12. Instructor Demo: DOM Traversal (5 min) 

* Open `07-Ins_Dom-Traversal/index.html` in the browser and demonstrate the following:
    
    * 🔑 We use traversal methods to select different elements and change the styling.
    
    * 🔑 We can travel down through the children elements or up through the parent elements.

* Open `07-Ins_Dom-Traversal/index.html` in your IDE and show the following:
    
    *  We notice the position of the empty `<div>` in the markup.

    ```html
    <div id="top"></div>
    ```

* Open `07-Ins_Dom-Traversal/assets/js/script.js` in your IDE and demonstrate the following:

    * From the empty `<div>`, we can select elements in the DOM tree. 
    
    ```js
    $("#top").siblings().first().css("border", "blue solid 2px");
    ```

    * We can chain methods together to combine searches.
    
    * We can use `css()` at each search to see which elements were returned.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

    * ☝️ What is the name of the method to traverse down one level to the descendant elements?

    * 🙋 `children()` 
    
* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to Slack the instruction text to the students in their class-specific channel.

### 13. Student Do: DOM Traversal (15 min) 

* Direct students to the activity instructions found in `08-Stu_Parse_JSON/README.md`.

* Break your students into pairs that will work together on this activity.

```md
# Parsing JSON

* In this activity, you will work with a partner to use the GitHub documentation to add a parameter to a fetch request and display the proper response in the console.

## Instructions

* Be sure to work with your partner!

* Navigate to the [GitHub API Docs](https://docs.github.com/en/rest/reference/issues#list*repository*issues).

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

### 14. Instructor Review: DOM Traversal (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with traversing the DOM with jQuery? (Poll via First of Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

    * ✔️ `closest()`, `find()` traverse

    * ✔️ Method chaining

    * ✔️ `first()`, `last()`, `eq()` select

* Open `08-Stu_Dom-Traversal/Solved/assets/js/script.js` in your IDE and explain the following: 

    * 🔑 We use the `find()` method to search all descendant elements with a selector. Then we use the `css()` method to change the styling.

    ```js
    rootEl.find("li").css("background-color", "white");
    ```
    
    * 🔑 We can chain the methods together to combine searches. We can compartmentalize the search by row to make them more legible.

    ```js
    var rowThree = rootEl.children().last().children();
    ```
    
    * 🔑 We use `first()`, to select the first element of the set of returned elements. We use the `text("O")` to insert the text "O".

    ```js
    rowThree.first().text("O");
    ```
    
    * 🔑 We use `closest("div")`, to select all the ancestor elements that is a `<div>`.  

    ```js
    $(".item-c2").closest("div").children().children().eq(0).text("O");
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

    * ☝️ Which of the methods we used begins a search with itself?

    * 🙋 `closest()` 

    * ☝️ What is the utility of traversal methods?

    * 🙋 Allows selection of elements when using the selector is not possible.

    * ☝️ What can we do if we don't completely understand this?

    * 🙋 We can refer to the supplemental material, read the [jQuery Docs on traversing](https://api.jquery.com/category/traversing), and stick around for Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to Slack the instruction text to the students in their class-specific channel.

### 15. Instructor Demo: Event Delegation (5 min) 

* Open `09-Ins_Event-Delegation/index.html` in your browser and demonstrate the following: 

    * 🔑 We can create and render the letter elements when the "Display" button is clicked.

    * 🔑 We can click on the letters to place on the refrigerator.

* Open `09-Ins_Event-Delegation/assets/js/script.js` in your IDE and demonstrate the following:  
    
    * 🔑 We must delegate the event listener to the parent element, `<ul>`, because the letters are not available when the `document` loads.
    
    ```js
    listEl.on("click", ".letter-button", function() {
        var fridgeMagnet = $("<div>");
        fridgeMagnet.addClass("letter fridge-color");
        fridgeMagnet.text($(this).attr("data-letter"));
        displayEl.append(fridgeMagnet);
    });
    ```

    * 🔑 We use `on()` to attach the `click()` event so we only listen for the event on the descendants with the class selector `.letter-button`.
    
    * 🔑 We retrieve the user's selection using `$(this)` and assign the text content to the letter's `data-letter` attribute. 
    
* Ask the class the following questions (☝️) and call on students for the answers (🙋):

    * ☝️ Is it necessary to use the `on()` method instead of the `click()` method when delegating events?

    * 🙋 Yes, in order to leverage the `on()` method's extra feature that filters the descendant elements.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to Slack the instruction text to the students in their class-specific channel.

### 16. Student Do: Event Delegation (15 min) 

* Direct students to the activity instructions found in `10-Stu_Event-Delegation/README.md`.

* Break your students into pairs that will work together on this activity.

```md
# jQuery Event Delegation 

In this activity, you will work with a partner to use jQuery documentation on Event Delegation to handle click events for a dynamically created button.

## Instructions

* Be sure to work with your partner!

* Navigate to the [jQuery Docs on Event Delegation](https://learn.jquery.com/events/event-delegation/) in your browser.

* Open [script.js](Unsolved/assets/js/script.js) in your IDE and examine the code.

* Using the documentation, implement the following:

  * We are given a Shopping List form. We can add grocery items to the shopping list by using the form.

  * When we click the `X` button next to a grocery item, it should be removed from the shopping list. 

  * Follow the instructions provided by the comments in the starter code to use event delegation to target a parent element of the grocery items in order to handle the click event for the dynamically created buttons.
  
  * Clear the input field on submission. 

## 💡 Hint(s) 

* In the event handler, create a new list by removing the user's selection.
  
* Use the new shopping list to call the `populateList()` in the event handler.

## 🏆 Bonus

* If you have fully completed the above tasks, here is something you and your partner can work through as an added challenge:

  * What are some alternatives to using jQuery? Discuss the merits with your partner. 
 
* You can read [You might not need jQuery](http://youmightnotneedjquery.com/) to see some options to jQuery. 
```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help while circulating through room.

### 17. Instructor Review: Event Delegation (15 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with event delegation? (Poll via First of Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

    * ✔️ Target the parent element

    * ✔️ `on()` 
    
    * ✔️ `data()` 

* Open `10-Stu_Event-Delegation/Solved/assets/js/script.js`in your IDE and explain the following: 

    * 🔑 We can attach the `on()` event listener to the parent element, `<ul>` to listen for the click on the shopping list item buttons.

    ```js
    listEl.on("click", "button", function() { 
    ```

    * 🔑 In the event handler, we use `$(this)` to select the button clicked by the user. 

    ```js
    var removeItem = $(this).attr("data-id");
    ```

    * 🔑 We use `attr("data-id")` to retrieve the value of the attribute, `data-id`, to identify the shopping item.
     
    ```js
    removeItem = parseInt(removeItem);
    ```

    * We can create a new list by placing all the elements in a new array except the one selected by the user.

    ```js
    var newList = [];
    for(var i = 0; i < shoppingList.length; i++) {
      if(removeItem !== i) {
        newList.push(shoppingList[i]);
      }
    }
    shoppingList = newList;
    ```

    * We populate the new list with the `populateList()` function.

    ```js
    populateList(shoppingList);
    ```

    * We can clear the user input by setting its value to `""`.

    ```js
    inputEl.val("");
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

    * ☝️ Are there any drawbacks with event delegating to ancestor elements, for example `<html>`, since this element will always be guaranteed to load?

    * 🙋 Yes, all descendants of `<html>` that exist now or in the future matching the selector will fire the handler. Therefore it's best to select a parent closest to the target element to decrease the chances for errant function calls.

    * ☝️ What can we do if we don't completely understand this?

    * 🙋 We can refer to the supplemental material, read the [jQuery Docs on Event Delegation](https://learn.jquery.com/events/event-delegation/), and stick around for Office Hours to ask for help.

### 18. END (9:30PM)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete [this anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6)

---
© 2020 Trilogy Education Services, LLC, a 2U, Inc. brand.  Confidential and Proprietary.  All Rights Reserved.
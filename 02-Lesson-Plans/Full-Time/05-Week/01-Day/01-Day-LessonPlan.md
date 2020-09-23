# 05.1 Full-Time Lesson Plan: Node.js, ES6

## Overview 

This lesson introduces Node.js and the new syntax that comes with ES6. This includes arrow functions also new variables `let` and `const`. Finally we will cover template literals and how they can be helpful in our development process.

## Instructor Notes

* Complete activities `01-Ins_Node-Demo` through `14-Stu_appendFile`

* Students will be expected to have Node installed, but if they don't, be sure to empower them to know that they can install it using the resources found in `04-Important`. Installation steps are available for [Mac](../../../../01-Class-Content/09-NodeJS/04-Important/nodejs-install-mac.md) and [Windows](../../../../01-Class-Content/09-NodeJS/04-Important/nodejs-install-win.md).

    * A helpful link to direct students to is https://nodejs.org/en/
    * Remind students that they will want the LTS (long term support) version.
    * `node -v` in the terminal will output a version number if installed correctly.

* Transitioning from client-side to backend development can be a little confusing at first. This is a good opportunity to remind students that Node is Chrome's V8 engine running on your machine rather than in the browser. This gives us the ability to have access to things like the filesystem.

* Students may ask why they are learning Node.JS. This is a great opportunity to explain that this allows to create our own APIs and build our own applications using the client-server model.

* Remind students to do a `git pull` of the class repo to have today's activities ready and open in VS Code. 

* If you are comfortable doing so, live code the solutions to the activities. If not, no worries. Use the solutions provided and follow the prompts and talking points for review. 

* Let students know that the Bonus for each activity is meant to give them "food for thought". Rather than extra coding practice, it is a self-study on related topics that are beyond the scope of this unit for those who want to dig deeper and further their knowledge on this topic.

## Learning Objectives

By the end of class, students will be able to:

* Explain the client-server model
* Run simple very simple javascript files from the command line using Node
* Understand arrow functions and how they impact the `this` context
* Use template strings, also how to use `const` and `let` in place of `var`
* Use functional loops like `.map` and `.filter`

## Time Tracker
| Start  | #   | Activity Name                              | Duration |
|---     |---  |---                                         |---       |
| 10:00AM| 1   | Instructor Do: Stoke Curiosity             | 0:10     |
| 10:10AM| 2   | Instructor Demo: Node Demo                 | 0:05     |
| 10:15AM| 3   | Student Do: Node Demo                      | 0:15     |
| 10:30AM| 4   | Instructor Review: Node Demo               | 0:10     |
| 10:40AM| 5   | Instructor Demo: Arrow Functions           | 0:05     |
| 10:45AM| 6   | Student Do: Arrow Functions                | 0:15     |
| 11:00AM| 7   | Instructor Review: Arrow Functions         | 0:10     |
| 11:10AM| 8   | Instructor Demo: Let and Const             | 0:05     |
| 11:15AM| 9   | Student Do: Convert to ES6                 | 0:15     |
| 11:30AM| 10  | Instructor Review: Convert to ES6          | 0:10     |
| 11:40AM| 11  | Instructor Demo: Functional Loops          | 0:05     |
| 11:45AM| 12  | Student Do: Functional Loops               | 0:15     |
| 12:00PM| 13  | BREAK                                      | 0:30     |
| 12:30PM| 14  | Instructor Review: Functional Loops        | 0:10     |
| 12:40PM| 15  | Instructor Demo: Template Literals         | 0:05     |
| 12:45AM| 16  | Student Do: Template Literals              | 0:15     |
| 1:00PM | 17  | Instructor Review: Template Literals       | 0:15     |
| 1:15PM | 18  | Instructor Do: Stoke Curiosity             | 0:10     |
| 1:25PM | 19  | Instructor Demo: `process.argv`            | 0:05     |
| 1:30PM | 20  | Student Do: `process.argv`                 | 0:15     |
| 1:45PM | 21  | Instructor Review: `process.argv`          | 0:10     |
| 1:55PM | 22  | Instructor Demo: Read/Write File           | 0:05     |
| 2:00PM | 23  | Student Do: Append File                    | 0:15     |
| 2:15PM | 24  | Instructor Review: Append File             | 0:15     |
| 2:30PM | 25  | END                                        | 0:00     |

---

## Class Instruction

### 1. Instructor Do: Stoke Curiosity (10 mins)

* Open the [slide deck](https://docs.google.com/presentation/d/1hXNcmzYqwlhgM-C78vNFKwX10PhW_iwIo0guwzHO48c/edit?usp=sharing) and follow these prompts on their corresponding slides:

  * **Introduction to Node.js (Title)**: Today's class is a milestone as we make the transition from writing client-side code to server-side code using Node.js. 

  * **What is Full Stack Web Development?**: What does it mean to be a full stack web developer?  
  
  * **Full Stack Web Development**: Full stack web development is understanding the suite of tools required to build both the front _and_ back ends of a web application. 

  * **How much of the stack do we know?**: What have we learned up to this point? 
  
  * **Client-side**: The three primary components of client-side code are HTML, CSS & JavaScript. 

  * **What is a client?**: Where do HTML, CSS and JavaScript come together?

  * **Definition of Web Client**: A client is both computer hardware and software that makes requests to a server. 

  * **What is GitHub Pages doing?**: What happens when we _deploy_ our projects to GitHub Pages?'

  * **Awesome Project Deployed to GitHub Pages**: GitHub Pages is _serving_ content to clients.

  * **What is a server?**: What does it mean to "server" content? 

  * **Server Definition**: Depending on the context, a server is both the physical hardware _and_ software that hears requests from users and returns something, such as an HTML or image file, or completes a process. 

  * **What is the Client-Server Model?**: How do clients and servers interact?

  * **The Client-Server Model**: In modern web applications, there is constant back-and-forth communication between the visuals displayed on the user’s browser (the front-end) and the data and logic stored on the server (the back-end). Clients make requests, servers respond.

  * **What is Node.js?**: How do we program a server?

  * **Node.js**: Node allows us to run JavaScript _outside_ the browser as well as on a server. Since Node is purely JavaScript, a front-end JavaScript developer can also work on server side code without having to learn a new programming language.


### 2. Instructor Demo: Node Demo (5 mins)

* Open [01-Ins_Node-Demo](../../../../01-Class-Content/09-NodeJS/01-Activities/01-Ins_Node-Demo/index.js) in your terminal and demonstrate the following:

* Run `node index.js` from the command line and demonstrate the following: 

  * 🔑  When we run the index.js file, we notice that the value of `this` has changed significantly

  * 🔑  When we examine the output of the console log, we notice some recognizable methods that are available in Node

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why is it necessary to wrap the `console.log` in an invoked function

  * 🙋 Simply console logging the `this` keyword will return an empty object. This is because context only makes sense inside of functions. Without one, we won't have anything to return

### 3. Student Do: Node Demo (15 mins)

* Direct students to the activity instructions found in [02-Stu-Hello-Demo](../../../../01-Class-Content/09-NodeJS/01-Activities/02-Stu_Hello-Node/README.md).

* Break your students into pairs that will work together on this activity.

```md
  # Hello Node.js

In this activity, you will write and run your first Node.js application.

## Instructions

* Create a file, `index.js`, in your working directory.

* Write JavaScript to log the string, "Hellooo, Node!".

* Then run the program using Node from the command line.

* Confirm that it logged the text as you would expect.

## Hint(s)

* It's just JavaScript.

## Bonus

* What happens when you log `window`? What happens when you try to use `prompt`, `alert`, or `confirm`?

```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help while circulating through room.

### 4. Instructor Review: Node Demo (10 mins)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with the `this` keyword in Node as well as `console.log`? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

  * When we examine the output of the console log, we notice some recognizable methods that are available in Node: `setInterval`, `setTimeout`

  * Only in the browser does, the `this` context refers to the `Window` object by default
  
  * In Node, `this` refers to the outermost global object

* Open [01-Ins_Node-Demo](../../../../01-Class-Content/09-NodeJS/01-Activities/01-Ins_Node-Demo/index.js) in your IDE and explain the following: 

  * When we run our finished Javascript we should have something like this:

  ```js
    (function () {
      console.log(this);
    })();
  ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why is it necessary to wrap the `console.log(this)` in a function?

  * 🙋 Simply console logging the `this` keyword will return an empty object. This is because context only makes sense inside of functions. Without one, we won't have anything to return

  * What happens when we log `window` to the console?

  * 🙋 We get an error, `window` is not defined in node.

  * ☝️ What kinds of things do we think are possible in the browser, but not possible in node?

  * 🙋 We can't use prompts, confirms or alerts because of the of the Window object

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Node docs](https://nodejs.org/en/docs/), and stick around for Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.


### 5. Instructor Demo: Arrow functions (5 mins) 

* Open [03-Ins_ArrowFunction/01-syntax](../../../../01-Class-Content/09-NodeJS/01-Activities/03-Ins_ArrowFunction/01-syntax.js) in your browser and demonstrate the following:

* In this demonstration you will give students and overview of arrow functions, including syntax differences, when to use them, and when to avoid them.

* Explain to the class that ES6 introduces a newer shorter syntax for writing functions. Consider the following example found in [01-syntax.js](/Users/johnmccambridge/coding/fullstack-ground/01-Class-Content/09-NodeJS/01-Activities/03-Ins_ArrowFunction/01-syntax.js).

* 🔑 Walk the students through each function below. See if they can point out the differences in syntax.

  ```js
  // ES5 function
  var createGreeting = function(message, name) {
    return message + ", " + name + "!";
  };

  // ES6 arrow function
  var createGreeting = (message, name) => {
    return message + ", " + name + "!";
  };

  ```

* Answer any questions about arrow functions before moving on to some differences between arrow functions and regular functions.

* In preparation for the activity, ask TAs to start directing students to the code found in [02-context](../../../../01-Class-Content/09-NodeJS/01-Activities/03-Ins_ArrowFunction/02-context.js)

  ```js
  // Depending on the environment `setTimeout` is called in, it may refer to one of two objects
  // In the browser, `setTimeout` is a property of the `window` object
  // In node, it belongs to a special "Timeout" object

  var person = {
    name: "Hodor",
    saySomething: function() {
      console.log(this.name + " is thinking...");
      setTimeout(function() {
        console.log(this.name + "!");
      }, 100);
    }
  };

  person.saySomething(); // prints "Hodor is thinking..."
  // prints "undefined!" 100ms later
  ```

  * Students may still not feel completely comfortable with the `this` keyword in JavaScript yet, inform them that many experienced developers still aren't as it's a tricky topic.

  * Point out how this code works as intended. Explain that this is because an arrow function automatically binds to the context or object it's created inside of, even if it is not a direct property of that object. The arrow function is created when `saySomething` is run, inside of `person` right before the `setTimeout` is run.

  * In preparation for the discussion, ask TAs to start directing students to the code found in [03-property-methods](../../../../01-Class-Content/09-NodeJS/01-Activities/03-Ins_ArrowFunction/03-property-methods.js)

  ```js
  // Avoid using arrow functions for object methods
  var dog = {
    name: "Lassie",
    sound: "Woof!",
    makeSound: () => console.log(this.sound),
    // readTag: () => console.log("The dog's tag reads: " + this.name + ".")
  };

  // Prints `undefined`
  dog.makeSound();

  // Prints `The dog's tag reads: undefined.`
  dog.readTag();

  // In the makeSound and readTag methods, `this` doesn't refer to `dog`
  // If this code run in node, `this` refers to `module.exports` (the object containing all the exports in this file)
  // If this code was run in the browser, `this` would refer to the window
  ```

  * Explain that when working with objects, we typically want to avoid using arrow functions for its methods. In these cases, the arrow function will bind to the context it's created inside of (probably the `window` or `module.exports` object).

  * We can replace regular functions most of the time, except when it comes to using the this keyword.
  
  * Students will become more comfortable with when to use and not use arrow functions as they practice using them. For now, they should understand that they can use them most of the time, but they should avoid using them as object methods.

  * Take a moment to answer any lingering questions.


### 6. Student Do: Arrow Function Practice (15 mins) 

* Direct students to the activity instructions found in [04-ArrowFunctionPractice](../../../../01-Class-Content/09-NodeJS/01-Activities/04-Stu_ArrowFunctionPractice/README.md)

* Break your students into pairs that will work together on this activity.

```md
# Arrow Function Practice

In this activity we will convert a file with pre-written code over to use arrow functions where suitable.

## Instructions

* Open [Unsolved/index.js](Unsolved/index.js) in your editor and run the code. Take a few moments to study the values logged to the console, but don't worry about understanding every part of the code. For this activity you only need to remember the rules established about when arrow functions should and shouldn't be used.

* Update this example to use arrow functions **where suitable**. If successful, the code should still work the exact same way.

## Hints

* Remember the case from the last example in which we should _not_ be using arrow functions.

## Bonus

* After you've converted all of the functions to arrow functions where possible, look for opportunities to shorten the arrow function syntax even further by removing parentheses and curly braces where allowed.

```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help while circulating through room.

### 7. Instructor Review: Arrow Function practice (10 mins) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with Arrow Functions? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Open [04-Stu-ArrowFunctionPractice](../../../../01-Class-Content/09-NodeJS/01-Activities/04-Stu_ArrowFunctionPractice/Solved/index.js) in your IDE and explain the following: 

  * Even though we have converted a few examples over to use arrow functions, the code works exactly as it did before

  ```js
  var funnyCase = string => {
    var newString = "";
    for (var i = 0; i < string.length; i++) {
      if (i % 2 === 0) newString += string[i].toLowerCase();
      else newString += string[i].toUpperCase();
    }
    return newString;
  };
  ```

  * 🔑  We can omit parenthesis around arrow functions if there is only one parameter.
    * NOTE: This does not work if the arrow function has multiple parameters
    * Please remind students that all of this is optional. The old syntax is not only valid, but accepted.
  
  ```js
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  var doubled = map(numbers, element => element * 2);
  ``` 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why didn't we convert the functions in the `netflixQueue` object to arrow functions

  ```js
    watchMovie: function() {
      this.queue.pop();
    },
  ```

  * 🙋 Whenever working with objects and creating methods, we don't want to use arrow functions because the `this` context will change, and therefore break our implementation.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

* Answer any questions before proceeding to the next activity.

### 8. Instructor Demo: Let and Const (5 mins) 

* Open [05-Ins-Let-Const](../../../../01-Class-Content/09-NodeJS/01-Activities/05-Ins_Let-Const/let.js) in your IDE and demonstrate the following:

  * 🔑  In this activity we will demonstrate the usage of `let` and `const` in addition

  * 🔑  We will discuss function scope. This means that variables and functions that are defined inside the scope of the function can't escape said function.
  
  * 🔑  ES6 offers us a new way to define variables using `let`. Unlike `var`, `let` is block scoped.
  
  * 🔑  Inform the class that a "block" is created whenever we have a pair of curly braces. This includes loops and conditional statements as well as function bodies. Since `let` is block scoped, any variables we define using `let` inside of a block are only available inside of that block.

* Ask the class the following questions (☝️) and call on students for the answers (🙋) given the following code snippet:

```js
  // 1. When using var, our counter exists after a for-loop is done

  for (var i = 0; i < 5; i++) {
    console.log(i);
  }

  console.log(i); // Prints 5


  // When using let, our counter is not defined outside of the for-loop block

  let x = 42;

  for (let j = 0; j < 5; j++) {
    console.log(j);
    console.log(x);
  }

  console.log(j); // ReferenceError: j is not defined

  let j = 42;
  console.log(j); // prints 42
  ```

  * ☝️ Why does the variable `i` exist outside of the function scope in the first for loop, while `j` in the second for loop is `undefined`?

  * 🙋 We used the `var` keyword to assign the variable in the first for loop allowing it to be accessed outside the function scope. The second example has `j` limited to the function scope because we defined it using the `let` keyword

* Open [05-Ins-Let-Const](../../../../01-Class-Content/09-NodeJS/01-Activities/05-Ins_Let-Const/const.js) in your IDE and demonstrate the following:

* Part of the ES6 syntax is a new keyword called `const`. This is found in many other programming languages and is generally used in all cases where we know a variable shouldn't be changed.

* ☝️ After reviewing this code, can anyone explain a situation where using `const` might not be ideal?

* `const` has the same rules as `let` for block scoping. There is, however, one one key difference between `const` and `let`: a variable declared with `const` cannot be _reassigned_. This would be bad for any data that needs to be mutated.

### 9. Student Do: Convert to ES6 Syntax (15 mins) 

* Direct students to the activity instructions found in [06-Stu_ConvertConstLetArrow](../../../../01-Class-Content/09-NodeJS/01-Activities/06-Stu_ConvertConstLetArrow/README.md).

* Stress that students don't need to completely understand all of the code in the activity. They just need to remember what we just overed about `const`, `let`, and arrow functions.

* Break your students into pairs that will work together on this activity.

```md
# Convert Const Let Arrow

In this example we will convert a prebuilt Crystal Guessing Game to use the new ES6 syntax we learn about.

## Instructions

* Open [Unsolved/index.html](Unsolved/index.html) in your web browser and take a moment to understand the application's functionality.

  * This example is similar to the Crystal Guessing Game we worked on many weeks ago.

* Now open [Unsolved/index.js](Unsolved/index.js) in your code editor and convert the existing code over to use the ES6 syntax we've learned about in the previous examples.

* Make sure to do the following:

1. Convert all `var` identifiers to use `const` or `let`; whichever is more appropriate.

2. Convert functions to arrow functions **where suitable**; remember, arrow functions are not right for every situation.
```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help while circulating through room.

### 10. Instructor Review: Convert to ES6 Syntax (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with the use of `let`, `const` and arrow functions? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

  * ✔️ A good way to think about these variable names is to ask yourself "does this need to be changed in future?" If the answer is no, you should use `const`

  * ✔️ Ask yourself if you need to take advantage of the `this` context inside your function. If not, convert it to an  arrow function

  * ✔️ Remember that arrow functions can't be used as constructor functions


* Open [Solved/index.js](../../../../01-Class-Content/09-NodeJS/01-Activities/06-Stu_ConvertConstLetArrow/Solved/index.js) in your code editor and walk through the code with the class. in your IDE and explain the following: 

  * Go through each example in the solved code and show the newer syntax.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is a good use for `let`?

  * 🙋 When we need to reassign a value. An example of this would be a counter variable like `i`

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 Remember to rely on your classmates, TAs and instructor for assistance. Generally you should try to use `const` and `let` as well as arrow functions and seek assistance if you are confused about usage. It may seem weird at first but you this will come second nature to you sooner than you think.

* Answer any questions before proceeding to the next activity.


### 11. Instructor Demo: Functional Loops (5 min) 

* Open [07-FunctionalLoops](../../../../01-Class-Content/09-NodeJS/01-Activities/07-Ins_FunctionalLoops/index.js) in your browser and demonstrate the following:

  * 🔑 In this demonstration students will be introduced to new Array methods `forEach`, `filter`, and `map`.
    * `forEach` preforms a callback on each item in the array, mutating it in place
    * `filter` returns a new array of items that result in a truthy value after being passed into the callback
    * `map` is very similar to `forEach` with the exception that it returns a new array. We can use it to create an array of modified elements if we so choose

  * 🔑  Explain that `filter` and `map` are used heavily in React when rendering elements from array data. Students have probably seen `forEach` already, but it's a good stepping stone for understanding `filter` and `map`.

  *  Go through each example in [index.js](../../../../01-Class-Content/09-NodeJS/01-Activities/21-Ins_FunctionalLoops/index.js) one at a time to demonstrate the utility of `forEach`, `filter`, and `map`. 


* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is the difference between `filter` and `forEach`?

  * 🙋 Filter returns a brand new array while a `forEach` mutates the existing array
  
  * ☝️ How is `.map` different than `.filter`?
  
  * 🙋 `map` will return a brand new array like `filter` does, however the length of the array that `map` returns will be the exact same as the input array. This isn't always the case for the `filter` method.


* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in [08-Stu-FunctionalLoops](../../../../01-Class-Content/09-NodeJS/01-Activities/08-Stu_FunctionalLoops/README.md).


### 12. Student Do: Functional Loops (15 mins)

* Direct students to the activity instructions found in [08-Stu-FunctionalLoops](../../../../01-Class-Content/09-NodeJS/01-Activities/08-Stu_FunctionalLoops/README.md).

* Break your students into pairs that will work together on this activity.

```md
# Functional Loops

In this activity we will use the `map` and `filter` methods to solve problems we previously would have used a for loop for.

## Instructions

* Open the [Unsolved](Unsolved) folder and examine the `map.js` and `filter.js` files. Study the examples provided and Complete the problems outlined in the comments.

### Bonus

* Use arrow functions as callbacks here.
```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help while circulating through room.


### 13. BREAK (30 mins)



### 14. Instructor Review: Functional Loops (10 mins) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with functional loops? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

  * ✔️ Remember that each of these array methods is just another type of for loop.

  * ✔️ We take each item in an array, manipulate it in some way and return the original mutated array or a modified version of the original array.

* Open [08-Solved](../../../../01-Class-Content/09-NodeJS/01-Activities/08-Stu_FunctionalLoops/Solved) in your IDE and explain the following: 

  * With the `map` method, a callback is run once for every element in the array. The value that is returned gets addded to the corresponding index of the new array.

  ```js
  const originalArray = [1, 3, 2, 5, 10];

  const doubledArray = originalArray.map(function(data) {
    return data * 2;
  });

  console.log(doubledArray);
  console.log(originalArray);

  const tripledArray = originalArray.map(data => data * 3);
  const oddOrEven = originalArray.map(num => (num % 2 === 0 ? "even" : "odd"));
  ```
  * With the `filter` method, if the callback function returns something truthy, the array element is copied to the new array, otherwise it is skipped.
  
    * The example below should contain an array of only prime numbers, the second should only contain numbers larger than `5`.

  ```js
  const originalArray = [1, 3, 2, 5, 10];

  const evenNumbers = originalArray.filter(function(data) {
    if (data % 2 === 0) {
      return true;
    }
  });

  console.log(evenNumbers);
  console.log(originalArray);

  const isPrime = num => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return num !== 1;
  };


  numbers (`primeArray`)
  const primeArray = originalArray.filter(isPrime);

  larger than 5(`moreThan5Array`)

  const moreThan5Array = originalArray.filter(num => num > 5);
  ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are some real life use cases for the `filter` method 

  * 🙋 When filtering out a list of images that contain the word `large` in the filename.
  * 🙋 When returning an array of all user accounts that use `@gmail.com`
  * 🙋 When grabbing a list of github issues that have a status of 'closed'

  * ☝️ What is an example of when you might want to map over something?

  * 🙋 When returning an HTML line item element for every item in a list while building a todo list.

* Answer any questions before proceeding to the next activity.


### 15. Instructor Demo: Template Literals (5 mins) 

* Open [09-Ins-Template_Literals](../../../../01-Class-Content/09-NodeJS/01-Activities/09-Ins_Template_Literals/index.js) in your browser and demonstrate the following:

  * 🔑  Using String interpolation, or template strings, we have a new way of concatenating variables to the rest of strings. This is a new feature included in ES6.

  * 🔑 Template strings are much more readable and easier to manage. Consider the following example:

  ```js
  const arya = {
    first: "Arya",
    last: "Stark",
    origin: "Winterfell",
    allegiance: "House Stark"
  };

  const greeting = `My name is ${arya.first}!
  I am loyal to ${arya.allegiance}.`;
  ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are the main differences that you notice in syntax between regular string concatenation and template literals?

  * 🙋 Immediately we notice that template strings use backticks instead of quotes. Additionally, instead of using plus signs we can now reference variables explicitly using the `${}` syntax.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in [10-Stu-Template-Literals](../../../../01-Class-Content/09-NodeJS/01-Activities/10-Stu_Template_Literals/README.md).

### 16. Student Do: Template Literals (15 mins) 

* Direct students to the activity instructions found in [10-Stu-Template-Literals](../../../../01-Class-Content/09-NodeJS/01-Activities/10-Stu_Template_Literals/README.md).

* Break your students into pairs that will work together on this activity.

```md
# Template Literals

* In this activity we will use ES6 template literals to render html.

## Instructions

* First create a music object following the comments in `Unsolved/index.js`.

* Then use template literal syntax to display your objects data. When you open `index.html` you should see the results if completed successfully.
```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help while circulating through room.

### 17. Instructor Review: Template Literals (15 mins)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with template literals? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

  * ✔️ Template strings are much easier to read than traditional string concatenation

  * ✔️ Dealing with spacing is a lot easier using template literals

  * ✔️ Don't forget to use backticks instead of quotes. This is a very easy mistake to make.

* Open [Stu-Template-Literals/Solved](../../../../01-Class-Content/09-NodeJS/01-Activities/10-Stu_Template_Literals/Solved/index.js) in your IDE and explain the following: 

  * Here we create a template string that will eventually be injected into the DOM

  ```js
    const music = {
    title: "The Less I Know The Better",
    artist: "Tame Impala",
    album: "Currents"
  };

  // write code between the <div> tags to output your objects data
  const songSnippet = `
    <div class="song">
      <h2>${music.title}</h2>
      <p class="artist">${music.artist}</p>
      <p class="album">${music.album}</p>
    </div>
  `;
  const element = document.getElementById("music");
  element.innerHTML = songSnippet;
  ```

  * 🔑  We use the `${}` syntax to reference the music object and the variables within it in our template string. That template string eventually gets added to the DOM as pure HTML

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are the benefits of using template strings?

  * 🙋 They are easier to read and easier to manage. They also allow us to maintain indentation and formatting of the content when inside the backticks.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Template Literal documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals), and stick around for Office Hours to ask for help.

* Answer any questions before ending the class.



### 18. Instructor Do: Stoke Curiosity (10 min)

* Welcome students to class.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

* ☝️ What are some of the new syntax rules you guys have learned this week?

* 🙋 This week we learned about arrow functions, `let`, `const`, and template strings.
  
* ☝️ What are some of the differences between `this` in Node compared to `this` in the browser?

* 🙋 In the browser `this` refers to the window object, while in node, the `this` keyword refers to the global object. The `this` keyword is all about context, and therefore it changes based on where you run it. 

* ☝️ Take moment to think about some things that are now possible because javascript runs outside the browser. Can you name a few examples? 

* 🙋 The ability to run javascript outside of the browser now allows us to create web servers, our own APIs, command line applications and have manipulate the file system. A lot of applications that we use every day like Slack, Discord, and even VSCode are written in javascript and packaged in a binary using something called [Electron](https://www.electronjs.org/).
  * Please note that while we won't cover electron in this course, it is important to understand the options developers have because javascript can be run outside of the browser.

### 19. Instructor Demo: `process.argv` (5 min) 

* Open [11-Ins_process.argv](../../../../01-Class-Content/09-NodeJS/01-Activities/11-Ins_process.argv/index.js) in your terminal and demonstrate the following:

* Run `node index.js` from the command line and demonstrate the following: 

  * 🔑  When we run this code in the terminal we see that the output is an array that contains three items

    ```sh
    [
    '/usr/local/bin/node',
    '/Users/johnmccambridge/coding/fullstack-ground/01-Class-Content/09-NodeJS/01-Activities/11-Ins_process.argv/index.js'
    ]
    ```

  * 🔑  When we add additional arguments to the command, `node index.js Hello World!` we get this following result:

    ```sh
    [
    '/usr/local/bin/node',
    '/Users/johnmccambridge/coding/fullstack-ground/01-Class-Content/09-NodeJS/01-Activities/11-Ins_process.argv/index.js',
    'hello',
    'world!'
    ]
    ```
    * 🔑 We store command line arguments in an object property, `process.argv`. These can be thought of as *argument values* passed to execution *process* at runtime. This will return an array, and therefore we can isolate just the additional arguments by accessing the correct index position.

    ```js
    console.log(process.argv);
    console.log(process.argv[2])
    ```



* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is returned by this application?

  * 🙋 Running the application returns an array.

  * ☝️ What are the items in the array?'

  * 🙋 The first item in the array is the installation location of Node itself. The second item in the array is the **absolute path** to the application. The third and fourth arguments are what we pass into the command line split on a space.
  
  * ☝️ What do you think would happen if we wrapped "Hello Word!" in quotes? `node index.js "Hello World!"` 
  
  * 🙋 As you would expect, the entire string is passed as one argument rather than two different arguments split on the space.

  * ☝️ What does it mean for us if we can pass arguments to our Node application?
  
  * 🙋 We can work with those values to create dynamic, interactive applications.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in [12-Stu_Parameter-Check](../../../../01-Class-Content/09-NodeJS/01-Activities/12-Stu_Parameter-Check/README.md).

### 20. Student Do: `process.argv` (15 min) 

* Direct students to the activity instructions found in [12-Stu_Parameter-Check](../../../../01-Class-Content/09-NodeJS/01-Activities/12-Stu_Parameter-Check/README.md).

* Break your students into pairs that will work together on this activity.

```md
# Parameter Check

In this activity, you will write a Node.js command line application that accepts two arguments and returns true if the two values are equal and false if they are not.

## Instructions

* Create a file, `index.js`, in your working directory.

* Write a script using `process.argv` to accept two command line arguments and compare their values.


## Hint(s)

* Start by simply logging the value of each argument to console.

* There's more than one way to solve this problem!

## Bonus

* How many ways can you solve this problem?

```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help while circulating through room.

### 21. Instructor Review: `process.argv` (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with `process.argv`? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

  * ✔️ Value stored in `process.argv` are access by an array index

  * ✔️ This is one of those concepts where you have to remember that there is no one correct way to solve the problem.

* Open [12-Solved](../../../../01-Class-Content/09-NodeJS/01-Activities/12-Stu_Parameter-Check/Solved/index.js) in your IDE and explain the following: 

  * When we run our app we see a list of boolean values. All of them are checking for the same condition, but each uses a different method

    ```sh
    node index.js 3 4
    node index.js 7 7
    ```

  * 🔑  We store the second and third elements in the array to variables

    ```js
    var a = process.argv[2];
    var b = process.argv[3];
    ```

  * 🔑 Here we can see that there is more than one way to check if our statement is true

    ```js
    // using a conditional statement
    if (a === b) {
        console.log(true);
    } else {
        console.log(false);
    }

    //using a ternary operator
    console.log(a === b ? true : false)

    // comparing variables
    console.log(a === b);

    // comparing argument values directly
    console.log(process.argv[2] === process.argv[3]);
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How could we improve our code for when a user fails to enter two arguments

  * 🙋 We could check if `a` or `b` is falsy, and instead console log a message with directions

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 Be sure to meet with your TAs during office hours or consult with the [node documentation](https://nodejs.org/api/process.html#process_process_argv).

* Answer any questions before proceeding to the next activity.

### 22. Instructor Demo: Read/Write File (5 min) 

* Open [13-Ins-Read-WriteFile](../../../../01-Class-Content/09-NodeJS/01-Activities/13-Ins-Read-WriteFile/index.js) in your browser and demonstrate the following:

* Run `node index.js` from the command line and demonstrate the following: 

  * 🔑 When we run this application we can see the output is the content of the companion `.csv` file in the project folder:

    ```sh
    10,123,76,5003,9,0.127,40,-1,2^4
    ```

  * 🔑 This is made possible though the use of Node's native `fs` module. The `fs` module is part of the **standard library** that includes dozens of **modules** that extend the basic functionality of Node.

  * 🔑 In order to use these modules, we need to *import* them into our app using `require` statements. Here we are importing `fs` and assigning it to variable of the same name.

    ```js
    var fs = require("fs");
    ```

  * 🔑 The `fs` method `readFile` accepts three arguments: 1. the file we want to read, the encoding format we want to use to read the file, and a callback.

    ```js
    fs.readFile("data.csv", "utf8", function(error, data) {

    if (error) {
        return console.log(error);
    }

    console.log(data);
    });
    ```
* Comment out the `readFile` function and comment in the `writeFile` function in [13-Ins-Read-WriteFile](../../../../01-Class-Content/09-NodeJS/01-Activities/13-Ins-Read-WriteFile/index.js).
  
  * 🔑 `fs.writeFile` will not only generate non-existent files but will also overwrite them if they already exist
  
  * 🔑 Our code is similar, but different from the previous demo in a few key ways. Take note of the fact that we don't start out with a `.txt` file in our working directory.

    ```js
    fs.writeFile("log.txt", process.argv[2], function(err) {

    if (err) {
        return console.log(err);
    }

    console.log("Success!");
    ```

 * 🔑  When we run the the above code using `node index.js Hello` we will get a newly created `log.txt` file with the text 'Hello' in it.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What do you think this application does?

  * 🙋 This application will _read a file_, `data.csv`, and will log the results stored in a variable, `data`.

  * ☝️ Why do you think we need to import modules if they are built-in to Node to begin with?

  * 🙋 We import modules into our application so that we are only loading exactly what we need. This will speed up the performance of our applications. 
  
  * ☝️ What is different about the code in the `writeFile` example?
  
  * 🙋 Rather than `readFile`, we are using the `fs` method `writeFile`. Rather than specifying an encoding format, our second argument is `process.argv[2]`.

  * ☝️ What happens when we run our application multiple times?

  * 🙋 `writeFile` overwrites existing files.

  * ☝️ How do we think we can resolve this issue?

  * 🙋 We need a method that can _append_ text to files.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in [14-Stu-appendFile](../../../../01-Class-Content/09-NodeJS/01-Activities/14-Stu_appendFile/README.md).

### 23. Student Do: Append File (15 min) 

* Direct students to the activity instructions found in [14-Stu-appendFile](../../../../01-Class-Content/09-NodeJS/01-Activities/14-Stu_appendFile/README.md).

* Break your students into pairs that will work together on this activity.

```md
# appendFile

In this activity, you will create a "commit logger" that records commit messages (for poetic purposes) using `fs`.

## Instructions

* In your working directory, create a Node application, `index.js`, that accepts a command line argument, and, each time it is run, will write the argument to file _without_ overwriting the existing text.

* You may need to consult the Node.js `fs` documentation for the appropriate method and its usage.

## Hint(s)

* If `fs.readFile` reads a file and `fs.writeFile` writes, but _overwrites_, a file, what method do you think will allow you to _append_ text to a file?

## Bonus

* How would you add arguments on new lines? 

```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help while circulating through room.

### 24. Instructor Review: Append File (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with appending to files? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

  * ✔️ `appendFile` appends text to file rather than overwriting the file

* Open [Stu-appendFile/Solved](../../../../01-Class-Content/09-NodeJS/01-Activities/14-Stu_appendFile/Solved/index.js) in your IDE and explain the following: 

  * When we run our command line application with the following we should see this text appended to the file in [14-Stu-appendFile](../../../../01-Class-Content/09-NodeJS/01-Activities/14-Stu_appendFile/Solved/log.txt).

  ```sh
    node index.js "first"
    node index.js "commit early and often"
    node index.js "everyone wants a log"
  ```

  * The application now is adding text to our file rather than overwriting it

  * 🔑  Our application is very similar to the previous demo, but here we have refactored it to use `appendFile` rather than `writeFile`:

    ```js
    fs.appendFile("log.txt", process.argv[2] + '\n', function(err) {
        if (err) {
        console.log(err);
        } else {
        console.log("Commit logged!");
        }
    });
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What does the `\n` do when we concatenate it with the value store in `process.argv[2]`?
  
  * 🙋 This creates a new line character
  
  * ☝️ What can we do if we don't completely understand this?

  * 🙋 The solution can be easily found by searching for, and reading, the [Node.js documentation for the File System module](https://nodejs.org/api/fs.html#fs_fs_appendfile_path_data_options_callback).


* Answer any questions before proceeding to the next activity.

### 25. END (0 min)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete [this anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

- - -
@TODO © <year> Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

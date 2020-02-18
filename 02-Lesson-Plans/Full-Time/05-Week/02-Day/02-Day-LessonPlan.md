## 5.2 - Node and ES6 (10:00 AM)

## Overview

In this class, we will be building on students' proficiency with Node by introducing them to additional ES6 features that they will be using in Node.

## Instructor Notes

* Complete activities `24-Stu_Template_Literals` through `39-Stu_Async-Await`

* While you would have naturally explained Promises and asynchronous behavior on a need to know basis before today, now is the time to dive deep and provide more thorough instruction for these topics.

* The most important concept for students to walk away from today understanding better is Promises. If they struggle to understand async/await, assure them that a deeper understanding of Promises makes async/await easier to grasp.

* Congratulate the class on any wins today, many JavaScript developers working in the field are unable to accurately explain many of the topics we'll be covering.

## Learning Objectives

* Identify and implement how and when to use arrow functions
* Identify and implement how and when to use let and const variables
* Identify and destructuring of arrays, functions and objects in ES6
* Identify and implement how and when to use template literals
* Identify and apply for...of loops
* Identify and implement rest and spread syntax
* Identify and apply array methods forEach, filter and map

## Slides 

None

## Time Tracker

[05.2 Time Tracker](https://docs.google.com/spreadsheets/d/1OGxgZt1Vz2yClJ1sTUufEo1UUSw8d-MvTZAluhiH0HU/edit?usp=sharing)

- - -

## Class Instruction

### 1. Instructor Do: Template Literals Demo (5 mins)

* Students will now be introducted to template literals, a new feature in ES6.

* Explain that a template literal is a special type of string that lets you create complex strings more easily and more efficiently. 

* Using template literals, you can create multi-line strings and use string interpolation.

* Demo the following code in [10-Ins_Template_Literals/index.js](../../../../01-Class-Content/09-NodeJS/01-Activities/23-Ins_Template_Literals/index.js)

```js
const arya = {
  first: "Arya",
  last: "Stark",
  origin: "Winterfell",
  allegiance: "House Stark"
};

const greeting = `My name is ${arya.first}!
I am loyal to ${arya.allegiance}.`;

console.log(greeting); // prints
// My name is Arya!
// I am loyal to House Stark.
```

* Point out that template literals use backticks `(``)`, not quotes (' or "), to wrap the string.

* Also point out that we created a multiline string without using `\n`.

### 2. Student Do: Template Literals (10 mins)

* **File** [Unsolved/index.js](../../../../01-Class-Content/09-NodeJS/01-Activities/24-Stu_Template_Literals/Solved/index.js)

* **Instructions**

  * First create a music object following the comments in [Solved/index.js](Solved/index.js).

  * Then use template literal syntax to display your objects data. When you open `index.html` you should see the results if completed successfully.


### 3. Instructor Do: Review Template Literals (5 mins)

* Open [Solved/index.js](../../../../01-Class-Content/09-NodeJS/01-Activities/24-Stu_Template_Literals/Solved/index.js) and review the code.

* Let students know that they will get a lot more practice moving forward, the biggest takeaway is to know that you have this tool available to you.

### 4. Instructor Do: For...Of Demo (5 mins)

* Students will now be introduced to the For...Of syntax provided in ES6.

* There are many ways to iterate in JS but the real power of for...in is the flexibility it provides.

* Explain that the for...of statement creates a loop iterating over objects, including Array, Map, Set, String, TypedArray. 

* In comparison, the `forEach` method which students are familiar with only works with arrays.

* Walk students through some common use cases in your console.

```js
// Using arrays
const songs = ['Bad Guy', 'Old Town Road', '7 Rings'];

for (const value of songs) {
  console.log(value);
}

// Bad Guy
// Old Town Road
// 7 Rings
```

```js
// Using map
const songs = new Map([['Bad Guy', 1], ['Old Town Road', 2]]);

for (const [key, value] of songs) {
  console.log(`${key}'s chart position is ${value}`);
}

// Output:
// Bad Guy's chart position is 1
// Old Town Road's chart position is 2
```

* Explain that the for...in loop is very flexible and we will continue to learn about it's use cases as we progress through the course.

### 5. Student Do: For...Of (10 mins)

* **File:** [Unsolved/index.js](../../../../01-Class-Content/09-NodeJS/01-Activities/26-Stu_For_Of/Unsolved/index.js)

* **Instructions:**

  * Select all of the songs in `index.html` and store them in a variable using JavaScript.

  * Iterate through your collection with a for...of and:

  * Add a `class` that changes the color to red (you have to create this class in your CSS file)

### 6. Instructor Do: Review For...Of (5 mins)

* Review the previous activity. 

* If time permits, feel free to expand and show other use cases for `for...of`. 

* They syntax is relatively straightforward, the key takeaway is knowing when to use and and what to use it for.

### 7. Instructor Do: Rest and Spread Demo (5 mins)

* Students will now be introduced to the spread and rest syntax available in ES6.

* Open [12-Ins_Spread_and_Rest/index.js](../../../../01-Class-Content/09-NodeJS/01-Activities/27-Ins_Rest_and_Spread/index.js) and step through the code.

#### Rest Parameters

* Explain that the rest parameter collects all remaining elements into an array.

* Be sure to point out that a rest paramter has to be the last argument in an array.

```js
function add(x, y) {
  return x + y;
}

console.log(add(1, 2, 3, 4, 5)) // => 3
```

* Ask the class why they think the `add` function returned 3?

* Explain that although it is possible to call a function with any number of arguments, only the fist two arguments will be counted.

* Let's rewrite this function using a rest operator.

```js
function add(...nums) {
  let sum = 0;
  for (let num of nums) sum += num;
  return sum
}

add(1) // => 1
add(3,3) // => 6
add(1, 1, 4, 5) // => 11
```

* In this example, we use a rest operator to collect all of the arguments into a `nums` array, giving us the ability to pass in as many arguments as we want.

* Let's try another one.

```js
function howManyArgs(...args) {
  return `You passed ${args.length} arguments.`; // point out the template literal
}

console.log(howManyArgs(0, 1)); // You have passed 2 arguments.
console.log(howManyArgs("argument!", null, ["one", 2, "three"], 4)); // You have passed 4 arguments.
```

* The takeaway here is these variables are now available in an array inside our function, we can also pass in as many as we want.

#### Spread Operator

* The spread operator allows iterables such as arrays, objects and strings to be expanded into single arguments or elements.

* Run the following example for students.

```js
// Spread Operator

let dragons = ['Drogon', 'Viserion', 'Rhaegal'];
let weapons = ['dragonglass', ...dragons, 'wildfire']; // notice the spread operator ...dragons

console.log(weapons); // prints ["dragonglass", "Drogon", "Viserion", "Rhaegal", "wildfire"]

```

* Here you can see that we have expanded both arrays into a new array with all of the elements. 

* Explain that there are a lot of use cases for rest and spread and they will continue to get more practice with them as the progress in the course.

* Take any clarifying questions before moving on.

### 8. Student Do: Rest and Spread Syntax (10 mins)

* **File:** [Unsolved/index.js](../../../../01-Class-Content/09-NodeJS/01-Activities/28-Stu_Rest_and_Spread/Unsolved/index.js)

* **Instructions:**

  * Following the comments in `index.js`:

  * Copy the `songs` array into another array using spread and console.log what it returns.

  * Modify the `addition` function so that is uses the rest operator and maintains the same functionality. You should still be able to pass in any number of arguments. Run the code first in your console to see the functionality.


### 9. Instructor Do: Review Rest and Spread Syntax (5 mins)

* Open [Solved/index.js](../../../../01-Class-Content/09-NodeJS/01-Activities/28-Stu_Rest_and_Spread/Solved/index.js) and step through the code.

* This first part is relatively straight forward, but check for understanding to see if there are any hangups for students.

```js
const songs = ["Creep", "Everlong", "Bulls On Parade", "Song 2", "What I Got"];
const new_songs = [...songs];

console.log(new_songs); // => ["Creep", "Everlong", "Bulls On Parade", "Song 2", "What I Got"];
```

* This one might have been a little tricky for students. There is a chance that they have not seen `reduce` before, so take a second to explain what it does. A

* Let students know that it's very common to be introduced to new methods, functions and concepts on the job and they should embrace the uncertainty of new material.

```js

// unsolved version
function addition(x, y, z) {
  const array = [x, y, z];
  return array.reduce((a, b) => a + b, 0);
}
console.log(addition(1, 2, 3)); // 6

// solved using rest
function addition(...array) {
  return array.reduce((a, b) => a + b, 0); // you don't have to change this line of code but look up reduce if you're not sure what it does here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
}
console.log(addition(1, 2, 3)); // 6
console.log(addition(1, 2, 3, 4, 100)); // 110
```

* There is a good chance that students will be confused on where spread and operators go, since they are very similar and can be used in similar situations. 

* Let them know that this is just an introduction and they will begin to pick up fluency as they get more practice.

* Take any remaining questions before moving on.

### 10. Instructor Do: Object Destructuring (10 mins)

* In this example, students will be introduced to the ES6 object destructuring syntax.

* Explain that object destructuring is a way for us to pull properties off of an object an onto separate variables for easier access. We can achieve this without ES6, but now we have a newer shorthand for doing so.

* Go through each example inside of [index.js](../../../../01-Class-Content/09-NodeJS/01-Activities/29-Ins_ObjDestructuring/index.js).

  * Highlight how we can destructure multiple object properties at once, saving us a few lines of code.

  * Demonstrate how this is also possible with function parameters. This allows us to have named function parameters i.e. if we passed multiple values into a function one at a time, we'd need them to be passed in the specific order intended. Now we can simply expect an object and pull the properties off without worrying about the order they're passed in or write extra code to destructure them the old way.

  ```js
  const arya = {
  name: "Arya Stark",
  parents: ["Eddard Stark", "Catelyn Stark"]
  };

  const jaime = {
    name: "Jaime Lannister",
    parents: ["Tywin Lannister", "Joanna Lannister"]
  };

  // In the past, if we wanted to pull off an object's property we'd have to do something like this:

  const aryaName = arya.name;
  const aryaParents = arya.parents;

  console.log(aryaName); // prints `"Arya Stark"`
  console.log(aryaParents); // prints `["Eddard Stark", "Catelyn Stark"]`

  // Now with ES6 object destructuring syntax, we can do this:

  const { name, parents } = arya;

  console.log(name); // prints `"Jaime Lannister"`
  console.log(parents); // prints `["Tywin Lannister", "Joanna Lannister"]`

  // We can also rename our destructured properties like so:

  const { name: jaimeName } = jaime;
  console.log(jaimeName); // prints `"Jaime Lannister"`

  // We can also destructure parameters using the same feature. e.g. previously we might have done something like this:

  const logCharacter = character =>
    console.log(
      character.name +
        "'s parents are: " +
        character.parents[0] +
        " and " +
        character.parents[1] +
        "."
    );

  logCharacter(arya);

  // But now we can do this:

  const betterLogCharacter = ({ name, parents }) =>
    console.log(
      name + "'s parents are: " + parents[0] + " and " + parents[1] + "."
    );

  betterLogCharacter(jaime);
  ```

### 11. Student Do: Object Destructuring (10 mins)

* **File:** [Unsolved/index.js](../../../../01-Class-Content/09-NodeJS/01-Activities/30-Stu_ObjDestructuring/Unsolved/index.js)

* **Instructions:**

  * Following the comments in `index.js`, write code that successfully `console.log`'s the statements.

### 12. Instructor Do: Review Object Destructuring (5 mins)

* Open [Solved/index.js](../../../../01-Class-Content/09-NodeJS/01-Activities/30-Stu_ObjDestructuring/Solved/index.js) in your editor and walk students through the solved exercise.

```js
// 1. Object
const arya = {
  first: "Arya",
  last: "Stark",
  origin: "Winterfell",
  allegiance: "House Stark"
};

const { first, last, origin, allegiance } = arya;
console.log(first); // <= Arya
console.log(last); // <= Stark

// 2. Nested Object
const john = {
  first: "John",
  last: "Snow",
  title: "Prince",
  family: {
    brothers: {
      brother1: "Rob Stark",
      brother2: "Rickon Stark"
    },
    sisters: {
      sister1: "Arya Stark",
      sister2: "Sansa Stark"
    }
  }
};

const { brother1, brother2 } = john.family.brothers;
console.log(brother1); // <= Rob Stark
console.log(brother2); // <= Rickon Stark

// 3. Arrays
const characters = ["Ned Stark", "The Quiet Wolf", "House Stark"];

const [name, alias, allegiance] = characters;
console.log(name, alias, allegiance); // <= Ned Stark The Quiet Wolf House Stark

// 4. Strings
const skills = "The Usurper, male, Baratheon, Cersei"; // string of data

const [alias, gender, family, spouse] = skills.split(","); // set variables and split
console.log(alias, gender, family, spouse); // print them by variable name
```

* Check for understanding and take questions to clarify before closing for the day.

### 13. Review Unit 09 (30 mins)

* Use the remaining time before lunch to review unit 09.

- - -

### 14. BREAK (30 mins)

- - -

### 15. Instructor Do: Preview (10 mins)

* Welcome the class back from break

  * The focus of today will be all things async.
  
  * We'll dive deep into asynchronous callback functions, as well as Promises, special objects used in JavaScript handling asynchronous behavior.

* Ask the class the following question(s) and call on students for the corresponding answer(s):

  * ☝️ What are some examples of asynchronous behavior we've encountered so far with JavaScript?

  * 🙋 Making AJAX requests, timers, responding to browser events such as clicks, reading/writing to the filesystem.

  * ☝️ Why do we write "asynchronous" code?
  
  * 🙋 Since the JavaScript runtime is single-threaded, we need to write asynchronous code effectively in order to avoid blocking client requests on the server.

* Open [40-Stu_Mini-Project/Solved/Bonus/index.js](../../../../01-Class-Content/09-NodeJS/01-Activities/40-Stu_Mini-Project/Solved/Bonus/index.js) in your terminal and run the application.

  * The application should prompt for some basic information such as a name and hobbies. Fill out answers to these questions.

* Once all the prompts have been answered, there should be a new `index.html` file added to the project directory. Open it in your web browser for the class to see.

  * This assignment is like their homework, in which they'll use similar techniques to generate a markdown README file.

* Answer any high-level questions about the Mini Project or lesson ahead before students begin the first activity of the day.

### 16. Students Do: Callback Review (10 mins)

* Direct students to the activity found in [31-Stu_Callback-Review](../../../../01-Class-Content/09-NodeJS/01-Activities/31-Stu_Callback-Review/README.md).

```md
# Callback Review

In this activity, you will write code to read a file containing a list of dogs and cats and write two new files to separate dog and cat entries.

## Instructions

* Open the `Unsolved/index.js` file and take a moment to examine the provided code:

  * The `fs.readFile` method is being used to read the `animals.json` file.

  * Since the JSON data retrieved using `fs.readFile` is a string, we're calling `JSON.parse` to parse the string to a JSON object.

  * We're allocating two empty arrays called `dogs` and `cats`.

* After understanding the provided code, write code to loop through `animalJSON` and for each animal object, check its `species` property. If an animal is a `dog`, push it to the `dogs` array, else push it to the `cats` array.

* After looping through every animal, convert both the `dogs` and `cats` arrays to JSON strings using `JSON.stringify`. Save the stringified versions of the arrays to new variables.

* Then, save the JSON string version of the `dogs` array to a new `dogs.json` file. Print a message after this completes indicating that it was successful.

* Then, save the JSON string version of the `cats` array to a new `cats.json` file. Print a message after this completes indicating that it was successful.

* You can verify that you've successfully completed this activity if after running your code you have a `dogs.json` file containing only dogs and a `cats.json` object containing only cats.

## 💡Hints

* Check out the [`fs.writeFile` documentation](https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback). Keep in mind that the async version will utilize Promises rather than callbacks.

* Check out the [`JSON.parse` documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)

* Check out the [`JSON.stringify` documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
```

### 17. Instructor Do: Review Callbacks Activity (5 mins)

* Use the prompts and talking points below to demonstrate the following key point(s):

  * ✔️ Callbacks are often used to handle asynchronous behavior, but callbacks themselves aren't asynchronous

* Open [31-Stu_Callback-Review/Solved/index.js](../../../../01-Class-Content/09-NodeJS/01-Activities/31-Stu_Callback-Review/Solved/index.js) in your editor and point out the following:

  * 🔑 We're using the `fs.readFile` function to read the contents of `animals.json`. All the other code is written inside of the `fs.readFile` callback function to ensure it only runs after `animals.json` has been read.

  ```js
  fs.readFile("animals.json", "utf8", function(err, data) {
    if (err) {
      throw err;
    }
  ```

  * Since any data read with `fs.readFile` comes back as a string, we use the `JSON.parse` method to turn the JSON string into a JSON object we can work with.

  ```js
  // Parse the JSON string to an object
  const animalJSON = JSON.parse(data);
  ```

  ```js
  // Create two new arrays to contain the cats and dogs objects
  const dogs = [];
  const cats = [];
  ```

  * We use the `forEach` method to loop through the `animalJSON` and push each animal into either the `dogs` or `cats` array.

  ```js
  // For each element in animal
  animalJSON.forEach(function(animal) {
    if (animal.species === "dog") {
      dogs.push(animal);
    } else if (animal.species === "cat") {
      cats.push(animal);
    }
  });
  ```

  * Once the animals are pushed into their appropriate arrays, we use `JSON.stringify` to turn the arrays into strings that can be saved to files. The additional arguments passed to JSON.stringify (`null, 2`) ensures that the JSON string is indented rather than all on one line.

  ```js
  // Turn the arrays into JSON strings so they can be written to files
  const dogJSON = JSON.stringify(dogs, null, 2);
  const catJSON = JSON.stringify(cats, null, 2);
  ```

  * 🔑 We use the `fs.writeFile` method to write the `dogs.json` and `cats.json` files.

  ```js
  fs.writeFile("dogs.json", dogJSON, function(err) {
    if (err) {
      throw err;
    }

    console.log("Successfully wrote to dogs.json file");
  });

  fs.writeFile("cats.json", catJSON, function(err) {
    if (err) {
      throw err;
    }

    console.log("Successfully wrote to cats.json file");
    });
  });
  ```

* Ask the class the following question(s) and call on students for the corresponding answer(s):

  * ☝️ Which of these callback functions are asynchronous? Which are synchronous?

  * 🙋 The callbacks used with `fs.readFile` and `fs.writeFile` are asynchronous, but the callback used with `forEach` is synchronous.

  * ☝️ Are callback functions synchronous?

  * 🙋 Callback functions themselves aren't asynchronous any more than regular named functions are.

  * ☝️ Do we have to wait on callbacks?

  * 🙋 Callback functions _are_ often used to describe behavior that should happen at a later time. But in the case of `forEach`, the provided function is run once for each element in the array in a synchronous loop. The callback function is run right away, there's nothing to wait for.

  * ☝️ So how is `fs.readFile` asynchronous?

  * 🙋 In the case of `fs.readFile`, it takes a certain amount of time to read from the filesystem and the data isn't immediately ready. So the callback function passed into `fs.readFile` is considered asynchronous since it might run after a few milliseconds, a second, or even a minute. Any remaining synchronous code will continue running while the filesystem is being read without waiting for it.

  * ☝️ How can we be sure if a function is running synchronously or asynchronously?

  * 🙋 When in doubt whether a callback is running synchronously or asynchronously, we can check the documentation for the function being used would be a good idea.

* Answer any questions before proceeding to the next demo.

### 18. Instructor Do: Axios Demo (5 mins)

* Use the prompts and talking points below to demonstrate the following key point(s):

  * ✔️ Axios works similarly to `$.ajax` in jQuery

  * ✔️ Axios is a third party npm package so must be installed and required

* Ask the class the following question(s) and call on students for the corresponding answer(s):

  * ☝️ How have we performed AJAX requests in the past?

  * 🙋 We used the jQuery `ajax` method.

  * ☝️ When writing server-side code, can we use jQuery?

  * 🙋 No, jQuery is a front-end library. It depends on certain browser APIs that don't exist in a node context.

  * ☝️ So why can jQuery be downloaded as a node module?

  * 🙋 While jQuery can be downloaded as a node module, it's not meant for use on the backend, so we need another solution such as the axios library.

* Open [32-Ins_Axios-Demo/index.js](../../../../01-Class-Content/09-NodeJS/01-Activities/32-Ins_Axios-Demo/index.js) in your IDE and point out the following:

  * 🔑 We're requiring the `axios` library. Axios is a third-party npm package, i.e. it's not built-in to node and must be downloaded and added to your `package.json` via `npm install axios --save`.

  ```js
  const axios = require("axios");
  ```

  * 🔑 Axios has a `get` method that works similarly to the `$.get` in jQuery. It expects to be provided a URL endpoint to query.

  ```js
  axios
    .get("https://www.omdbapi.com/?t=The%20Matrix&apikey=trilogy")
  ```

  * 🔑 Similar to jQuery's `$.ajax`, an axios query returns a Promise object. More on this shortly, but for now it's important to know that we use `.then` to handle the response from the AJAX request.

  ```js
  .then(function(res) {
    console.log(res.data);
  });
  ```

* With [32-Ins_Axios-Demo/index.js](../../../../01-Class-Content/09-NodeJS/01-Activities/32-Ins_Axios-Demo/index.js) open in your IDE, run the file and demonstrate the output in your console.

* Answer any questions before the next activity.

### 19. Students Do: Axios (10 mins)

* Direct students to the activity found in [32-Stu_Axios/README.md](../../../../01-Class-Content/09-NodeJS/01-Activities/33-Stu_Axios/README.md).

```md
# Axios

In this activity, you will utilize the axios library to make a request to the Github API and save a list of all of your repositories.

## Instructions

* Change directories into the `Unsolved` folder and run `npm install` from your terminal.

* Once the project dependencies finish installing, examine the starter code in `Unsolved/index.js`:

  * The provided starter code prompts the user for their GitHub username and then uses the answer to construct a URL that can be used to query the GitHub API.

* Use the `axios` module to send a GET request to the `queryUrl`. The response object returned from the request should contain a `data` property which should be an array of the user's GitHub repos.

* Loop through the array of repositories and save only the names of the repositories to an array.

* Join the array of repository names to a string separated with a newline character (`\n`).

* Save the string containing the repository names to a new `repos.txt` file. Once this completes, print a message to the console indicating the number of repositories saved.

* You'll be able to verify that you've successfully completed this activity if your code successfully saves a list of all of a given user's GitHub repos.

## 💡 Hints

* Take a look at the API response from the GitHub API to get an idea of how the data is structured. Example: <https://api.github.com/users/fabpot/repos?per_page=100>.

  * Avoid continually refreshing this page since there's a limit for non-authenticated requests to the GitHub API.

* Check out the [`fs.writeFile` documentation](https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback). Keep in mind that the async version will utilize Promises rather than callbacks.

* Check out the [axios documentation](https://github.com/axios/axios) and look for examples for the `get` method.
```

### 20. Instructor Do: Review Axios (5 mins)

* Use the prompts and talking points below to demonstrate the following key point(s):

  * ✔️ Axios works similarly to `$.ajax` in jQuery

  * ✔️ Axios is a third party npm package so must be installed and required

  * ✔️ We can use the `Array.prototype.map` method to turn the array of repo objects into an array of strings containing the repo names.

  * ✔️ Similarly to asynchronous callbacks, we can nest Promises as a way to control the order of asynchronous code.

* Open [33-Stu_Axios/Solved/index.js](../../../../01-Class-Content/09-NodeJS/01-Activities/33-Stu_Axios/Solved/index.js) in your IDE and point out the following:

  * We first require all the packages we will need. We then create an inquirer prompt to gather a GitHub username from our user.

  ```js
  const fs = require("fs");
  const axios = require("axios");
  const inquirer = require("inquirer");

  inquirer
    .prompt({
      message: "Enter your GitHub username:",
      name: "username"
    })
  ```

  * 🔑 By calling `axios.get` inside of the `.then` of the `inquirer.prompt`, we can ensure that `axios.get` is called _after_ a response has been provided to `inquirer.prompt`. Similarly, by calling `fs.writeFile` inside of the `.then` of `axios.get`,we can ensure that the file is only written after a response have been received from the API.

  ```js
  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
    axios.get(queryUrl).then(function(res) {
  ```

  * 🔑 In order to get just the repository names and not all of the JSON data, we're using the `map` method to return the repository names into the `repoNames` array.

  ```js
  const repoNames = res.data.map(function(repo) {
    return repo.name;
  });

  const repoNamesStr = repoNames.join("\n");

  fs.writeFile("repos.txt", repoNamesStr, function(err) {
    if (err) {
      throw err;
    }

    console.log(`Saved ${repoNames.length} repos`);
  ```

* Answer any questions before moving on to the next demonstration.

### 21. Instructor Do: Introduce Promises (5 mins)

Use the prompts and talking points below to demonstrate the following key point(s):

* ✔️ Promises are JavaScript objects that can be used to control the flow of asynchronous code.

* ✔️ We've used Promises before, mostly with jQuery's AJAX method.

* Ask the class the following question(s) and call on students for the corresponding answer(s):

  * ☝️ When have we used Promises in the past?

  * 🙋 When we used the jQuery `ajax` method, and when we used `axios`.

  * ☝️ How are Promises _visually_ different than asynchronous callbacks?

  * 🙋 Promises use a `.then` method to describe what should happen once the async code completes.

  * ☝️ When using `.then`, what kind of object are we working with?

  * 🙋 A promise object.

* Open [34-Ins_Introduce-Promises/index.js](../../../../01-Class-Content/09-NodeJS/01-Activities/34-Ins_Introduce-Promises/index.js) in your IDE and explain the following points:

  * 🔑 Node has a built-in `util` module that has a few useful utility functions.

  ```js
  const fs = require("fs");
  const util = require("util");
  ```

  * 🔑 The `util.promisify` method can be used to take a function that uses a Node.js style callback and create a new version of the function that uses Promises. A Node.js style callback is a function that has a `(err, data) =>` signature. We're using the `util.promisify` method to create Promise-based versions of `fs.writeFile` and `fs.readFile`.

  ```js
  // The built-in util package can be used to create Promise-based versions of functions using node style callbacks
  const readFileAsync = util.promisify(fs.readFile);
  const writeFileAsync = util.promisify(fs.writeFile);

  readFileAsync("animals.json", "utf8").then(function(data) {
    // Parse the JSON string to an object
    const animalJSON = JSON.parse(data);

    // Create two new arrays to contain the cats and dogs objects
    const dogs = [];
    const cats = [];

    // For each element in animal
    animalJSON.forEach(function(animal) {
      if (animal.species === "dog") {
        dogs.push(animal);
      } else if (animal.species === "cat") {
        cats.push(animal);
      }
    });

    // Turn the arrays into JSON strings so they can be written to files
    const dogJSON = JSON.stringify(dogs, null, 2);
    const catJSON = JSON.stringify(cats, null, 2);

    writeFileAsync("dogs.json", dogJSON).then(function() {
      console.log("Successfully wrote to dogs.json file");
    });

    writeFileAsync("cats.json", catJSON).then(function() {
      console.log("Successfully wrote to cats.json file");
    });
  });
  ```

* Ask the class the following question(s) and call on students for the corresponding answer(s):

  * ☝️ Do we see any benefit to using Promises over callbacks yet?

  * 🙋 Now that we've had a chance to practice writing basic Promise syntax, we're ready to go over some of the benefits of Promises over callbacks. We'll begin to see this during the review of the next activity.

### 22. Students Do: Joke Saver (10 mins)

* Direct students to the instructions found in [35-Stu-Joke-Saver/README.md](../../../../01-Class-Content/09-NodeJS/01-Activities/35-Stu-Joke-Saver/README.md):

```md
# Joke Saver

In this activity, you will write code to get a random joke from an API, append the joke to a file, and then read out all saved jokes from the file.

## Instructions

* Change directories into the `Unsolved` folder and run `npm install`.

* Once the installation completes, open `Unsolved/index.js` and examine the code.

  * A request is being made to the `icanhazdadjoke` API using axios.

  * This API requires some additional configuration be passed to axios to work.

* Run the `index.js` file to examine the response from the API. You should notice that an object containing a random joke is returned each time.

* Append the `joke` property of the response data to a file named `jokes.txt`.

* After appending the joke, read from the `jokes.txt` file and print its entire contents to the console.

* You can verify you've successfully completed this activity if every time the program is run a new joke is saved to the `jokes.txt` file and all the jokes are printed to the console.

## 💡Hints

* Check out the documentation for [fs.appendFile](https://nodejs.org/api/fs.html#fs_fs_appendfile_path_data_options_callback). Keep in mind that the async version will utilize Promises rather than callbacks.

* Check out the documentation for [fs.readFile](https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback). Keep in mind that the async version will utilize Promises rather than callbacks.

## 🏆Bonus

* Chain the calls to `axios.get`, `fs.appendFile`, and `fs.readFile` rather than nest them. See more about Promise chaining from the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#Chaining).
```

### 23. Instructor Do: Review Joke Saver (5 mins)

Use the prompts and talking points below to demonstrate the following key point(s):

* ✔️ By nesting Promises, we can control the order in which they resolve.

* ✔️ The `util.promisify` method allows us to convert a NodeJS-style callback function to a function that uses Promises instead.

* ✔️ We'll need to use the `fs.appendFile` method to append text to a `txt` file, keeping in mind that each line should be separated by a newline character (`\n`).

* Open the [35-Stu-Joke-Saver/Solved/index.js](../../../../01-Class-Content/09-NodeJS/01-Activities/35-Stu-Joke-Saver/Solved/Basic/index.js) in your IDE and point out the following:

  * We first require the necessary packages.

  ```js
  const fs = require("fs");
  const util = require("util");
  const axios = require("axios");
  ```
  
  * 🔑 We're using `utils.promisify` to create Promise-based versions of `fs.readFile` and `fs.appendFile`.

  ```js
  const appendFileAsync = util.promisify(fs.appendFile);
  const readFileAsync = util.promisify(fs.readFile);
  ```

  * 🔑 We're appending the joke retrieved from the API to the `jokes.txt` file with a newline at the end. Inside of the `.then` of the `appendFileAsync` function, we're calling `readFileAsync` to read the file's contents. Since both functions run asynchronously, this is how we can ensure the file isn't read before it's been written to.

  ```js
  const config = { headers: { accept: "application/json" } };

  axios
    .get("https://icanhazdadjoke.com/", config)
    .then(function(res) {
      const { joke } = res.data;

      appendFileAsync("jokes.txt", joke + "\n").then(function() {
        readFileAsync("jokes.txt", "utf8").then(function(data) {
          console.log("Saved dad jokes:");
          console.log(data);
        });
      });
    })
    .catch(function(err) {
      console.log(err);
    });
  ```

* Ask the class the following question(s) and call on students for the corresponding answer(s):

  * ☝️ What are the advantages of using Promises over callbacks in this example?

  * 🙋 Trick question! There isn't one.

  * ☝️ How are Promises more useful than callbacks?

  * 🙋 So far we still aren't doing anything with Promises that we couldn't do with callbacks alone. One of the advantages of using Promises starts to become clear in the solution to the bonus activity.

Use the prompts and talking points below to demonstrate the following key point(s):

* ✔️ `.then` is chainable.

* ✔️ The returned value of a `.then` is available to the next `.then` call.

* ✔️ If the return is an object, the next `.then` doesn't run until the previous resolved.

* Open [35-Stu-Joke-Saver/Solved/Bonus/index.js](../../../../01-Class-Content/09-NodeJS/01-Activities/35-Stu-Joke-Saver/Solved/Bonus/index.js) in your IDE and explain the following:

  * The functionally of these examples is the same, but there's a key difference in the way the code is written. Promises, similar to jQuery methods, are chainable.

  ```js
  axios
    .get("https://icanhazdadjoke.com/", config)
    .then(function(res) {
      const { joke } = res.data;

      return appendFileAsync("jokes.txt", joke + "\n");
    })
  ```

  * 🔑 Whatever is returned from the function passed into a Promise's `.then` method is available inside of the next chained Promise. If what's being returned is a Promise object itself, the next `.then` only runs when the returned Promise resolves. This is useful as it allows us to write clearer code that's easier to understand and have more control over the sequencing of async behavior.

  ```js
    .then(function() {
      return readFileAsync("jokes.txt", "utf8");
    })
    .then(function(data) {
      console.log("Saved dad jokes:");
      console.log(data);
    })
    .catch(function(err) {
      console.log(err);
    });
  ```

* Ask the class the following question(s) and call on students for the corresponding answer(s):

  * ☝️ How is the code in the bonus solution arranged differently than the code in the basic solution?

  * 🙋 Promises are being chained, rather than being nested inside of each other.

  * ☝️ Why not just use callbacks?

  * 🙋 If Promises didn't exist and we only had callback functions, we'd eventually find ourselves in what's referred to as ["callback hell"](http://callbackhell.com/). In "callback hell" our code nesting becomes so deep it's difficult to understand and we have to scroll horizontally in our editors to read everything.

* Slack out the following image to better demonstrate "callback hell":

  ![Callback Hell](https://miro.medium.com/max/3200/1*YCh1fXt_Ycf-00a9E88-Hg.png)

* Answer any remaining questions before the next activity.

### 24. Instructor Do: Introduce the Promise Constructor (10 mins)

* Use the following talking points below:

  * ✔️ Promise objects can be "constructed" from scratch using a JavaScript function

  * ✔️ ES6 introduced native Promises to JavaScript. Before this, Promises were still used, but that functionality was provided by various third party libraries.

  * ✔️ Now that Promises are built-in to JavaScript, we can more easily use Promises to wrap any asynchronous behavior.
  
  * ✔️ The built-in Promise constructor can be used to convert a callback-based function into one using Promises, similar to what `util.promisify` can do for some types of functions.

* Open [36-Ins_Promise-Constructor/index.js](../../../../01-Class-Content/09-NodeJS/01-Activities/36-Ins_Promise-Constructor/index.js) in your editor:

  * 🔑 In this example we're using the Promise constructor function to create a `readFileAsync` function, essentially doing what `util.promisify` does for us. `Promise` is a special type of function known as a constructor function. We'll discuss constructor functions in-depth in the next unit, but for now, students just need to understand we call this function using the `new` keyword, and that it returns a new Promise object.

  ```js
  const fs = require("fs");

  function readFileAsync(path, encoding) {
  ```

  * 🔑 The `Promise` function takes one parameter: a callback function. The callback function passed to `Promise` has two parameters of its own: a `resolve` function and a `reject` function.

  ```js
  return new Promise(function(resolve, reject) {
  ```

  * 🔑 The `resolve` function is called when we're done with our async functionality if nothing went wrong. The `resolve` function can be provided arguments which will be available inside of the `.then` of the resolved Promise. The `reject` function is called if something when wrong, such as an error occurring. Anything provided as an argument to `reject` is available inside of the `.catch` of the rejected Promise.

  ```js
  fs.readFile(path, encoding, function(err, data) {
    if (err) {
      return reject(err);
    }

    resolve(data);
  ```

  * 🔑 Since `readFileAsync` returns a Promise object, we can execute `readFileAsync` and then use `.then` or `.catch` from its returned value.

  ```js
  readFileAsync("example.txt", "utf8")
    .then(function(data) {
      console.log(data);
    })
    .catch(function(err) {
      console.log(err);
    });
  ```

* Take a moment to answer any questions before moving on to the next activity.

### 25. Students Do: Promise Constructor (10 mins)

* Direct students to the instructions found in [37-Stu_Promise-Constructor/README.md](../../../../01-Class-Content/09-NodeJS/01-Activities/37-Stu_Promise-Constructor/README.md):

```md
# Promise Constructor

In this activity, you will refactor a callback-based asynchronous function to utilize Promises.

## Instructions

* Open `Unsolved/index.js` and take a moment to examine the provided code.

* When the provided code is run, the `waitFor` function waits `2` (or however many seconds are provided) and then prints a message. If `seconds` is not a number or is a number less than 1, an error is thrown instead.

* Refactor the `waitFor` function to use Promises instead of callbacks.

* You should be able to call the refactored `waitFor` function like so:

  waitFor(2)
    .then(function(msg) {
      console.log(msg); // msg is printed since seconds is more than 0
    })
    .catch(function(err) {
      console.log(err);
    });

  waitFor(-5)
    .then(function(msg) {
      console.log(msg);
    })
    .catch(function(err) {
      console.log(err); // err is printed since 'seconds' is less than 1
    });

## 💡 Hints

* Refer back to the previous demo for an example using the Promise constructor.

* Check out the [MDN Documentation on Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
```

### 26. Instructor Do: Review Promise Constructor (5 mins)

* Use the prompts and talking points below to demonstrate the following key point(s):

  * ✔️ When constructing Promise objects, we "resolve" on success or we "reject" on failure.

* Open [37-Stu_Promise-Constructor/Solved/index.js](../../../../01-Class-Content/09-NodeJS/01-Activities/37-Stu_Promise-Constructor/Solved/index.js) in your IDE and explain the following points:

  * If `seconds` isn't a number or is a number less than 1, we `reject` an error that will be available in the Promise's `.catch`.

  ```js
  function waitFor(seconds) {
    return new Promise(function(resolve, reject) {
      if (isNaN(seconds) || seconds < 1) {
        return reject(Error("Parameter 'seconds' must be a positive number!"));
      }
  ```

  * When the timeout completes, we call the `resolve` function. Optionally we can pass arguments into `resolve` that will be available in the Promise's `.then`.

  ```js
  setTimeout(function() {
    resolve("Success!");
  }, seconds * 1000);
  ```

  * We can then invoke our `waitFor()` function.

  ```js
  waitFor(2)
    .then(function(msg) {
      console.log(msg);
    })
    .catch(function(err) {
      console.log(err);
    });
  ```

* Answer any remaining questions before the next activity.

### 27. Instructor Do: Introduce Async/Await (10 mins)

* Use the prompts and talking points below to demonstrate the following key point(s):

  * ✔️ ES2017 introduced an alternative syntax for Promises called async/await.

  * ✔️ Async/await is "sugar-syntax" for Promises, and allows us to write asynchronous code that looks synchronous, which can be easier to understand.

  * ✔️ Async/await is used with functions and methods that return Promise objects.
  
  * ✔️ Code using the `await` syntax must be inside of a function declared with the `async` identifier.

  * ✔️ Typically `try/catch` is used with `async/await`.

* Ask the class the following questions:

  * ☝️ What do we think is easier? Writing functions with Promises? Or writing functions with callbacks? Which one do we have to know more to use?

  * 🙋 Promises look nicer than callbacks, but we have to write and understand more code to use them.

  * ☝️ If JavaScript is single-threaded, why create this asynchronous functionality?

  * 🙋 For many developers, Promises aren't the most intuitive way to handle asynchronous behavior, especially for those coming from other programming languages. As the number of web developers increases, ideas found in other languages often make their way into JavaScript.

  * ☝️ Have any new "asynch" features been added?

  * 🙋 The ES2017 JavaScript update gave us a feature found in C#: **async/await**. In JavaScript, async/await uses Promises under the hood, but allows us to write asynchronous code in a way that _looks_ synchronous.

  * ☝️ Why is `async/await` considered "sugar-syntax"?

  * 🙋 Sugar-syntax is any aspect of the syntax a programming language that makes it easier to read, write, or understand. As an example, the `x += 1` is sugar-syntax for `x = x + 1`. As a result, code written with async/await is often easier to read, write, and understand.

* Open the example in [38-Ins_Async-Await/index.js](../../../../01-Class-Content/09-NodeJS/01-Activities/38-Ins_Async-Await/index.js) in your editor:

  * 🔑 Async/await is used with functions and methods that return Promise objects such as `axios.get` and `inquirer.prompt`.

  ```js
  const axios = require("axios");
  const inquirer = require("inquirer");

  getMovie();
  ```

  * 🔑 Code using the `await` syntax must be inside of a function declared with the `async` identifier. We typically use `try/catch` blocks to catch errors when using async/await, though the `.catch` method can still be used since we're still working with Promises.

  ```js
  async function getMovie() {
    try {
  ```

  * 🔑 Using the `await` keyword, we can assign the result of a Promise-based function to a variable.

  ```js
  const { movie } = await inquirer.prompt({
    message: "Search a movie:",
    name: "movie"
  });

  const { data } = await axios.get(
    `https://www.omdbapi.com/?t=${movie}&apikey=trilogy`
  );

  console.log(data);

  } catch (err) {
    console.log(err);
  }
  ```

* Answer any questions before moving on to the next activity.

### 28. Students Do: Async/Await (15 mins)

* Direct students to the instructions found in [39-Stu_Async-Await/README.md](../../../../01-Class-Content/09-NodeJS/01-Activities/39-Stu_Async-Await/README.md):

```md
# Async Await

In this activity, you will convert a previous Promise-based activity to utilize async await.

## Instructions

* Change directories into the `Unsolved` folder and run `npm install` from your terminal.

* Take a moment to examine the contents of `Unsolved/index.js`. This file:

  * Contains an async function called `combineAnimals` that gets called when the file loads.

  * The `combineAnimals` function contains a try/catch block.
  
  * The goal of this activity is to read data for each animal from each of the `.json` files and then combine the data into a new `combined.json` file as an array of animal objects.

    ```json
    [
      {
        "name": "Frank",
        "species": "cat",
        "age": 10,
        "gender": "M"
      },
      {
        "name": "Loki",
        "species": "dog",
        "age": 5,
        "gender": "M"
      },
      // ...
    ```

* Write code inside of the `try` block to read from each file (`dog.json`, `cat.json`, `goldfish.json`, `hamster.json`) one at a time using the async/await syntax.

* Parse the data from each file to objects using `JSON.parse`.

* Store the animal objects into an array and use `JSON.stringify` to convert the array of objects to a JSON string.

* Save the new combined animal JSON to a `combined.json` file.

* Print a message to the console indicating that this was successful.

## 💡Hints

* Check out the [MDN documentation on async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

## 🏆 Bonus

* Rather than manually writing out code to read each file one at a time, find a way to do so using a loop instead using async/await.

* Sort animals by age before saving them to the `combined.json` file.
```

### 29. Instructor Do: Review Async/Await (10 mins)

* Use the prompts and talking points below to demonstrate the following key point(s):

  * ✔️ Using async/await, we can write asynchronous code that looks synchronous

  * ✔️ async/await is sugar syntax for Promises, meaning Promises are still used under the hood

* Open [39-Stu_Async-Await/Solved/index.js](../../../../01-Class-Content/09-NodeJS/01-Activities/39-Stu_Async-Await/Solved/Basic/index.js) in your editor:

  * 🔑 Code using the `await` syntax must be inside of a function declared with the `async` identifier.

  ```js
  async function combineAnimals() {
    try {
  ```

  * 🔑 We can `await` reading from each file one at a time. This is equivalent to chaining Promise functions in sequence.

  ```js
  const hamster = await readFileAsync("hamster.json", "utf8");
  const dog = await readFileAsync("dog.json", "utf8");
  const cat = await readFileAsync("cat.json", "utf8");
  const goldfish = await readFileAsync("goldfish.json", "utf8");
  ```

  * Since data read from a file comes in as a string, we need to parse the strings to JSON to work with them. We use `try/catch` blocks to handle any errors that may occur.

  ```js
      const animalJSON = [hamster, dog, cat, goldfish].map(JSON.parse);

      await writeFileAsync(
        "combined.json",
        JSON.stringify(animalJSON, null, 2),
        "utf8"
      );
      console.log("Successfully wrote to 'combined.json' file");
    } catch (err) {
      console.log(err);
    }
  }

  combineAnimals();
  ```

### Lesson Plan Feedback

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this anonymous survey.

[Class Survey](https://forms.gle/nYLbt6NZUNJMJ1h38)

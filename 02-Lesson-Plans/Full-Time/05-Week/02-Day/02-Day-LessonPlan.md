# 05.2 Full-Time Lesson Plan: Node 

## Overview 

In this lesson we will be taking a deeper dive into the world that is Node. We will be learning how to take advantage of native modules that come baked into Node itself. We will access the file system, pass command line arguments into our applications, get acquainted with Node Package Manager and finally build our own CLI apps using a package called inquirer.

## Instructor Notes

* Complete activities `15-Ins-Modularization` through `20-Stu_Inquirer`

* We can explain to students that npm is much like linking a CDN link for a framework directly in our HTML, only we will download it into our project and store it in a folder called "node_modules"

* At this point students should have both Node and NPM installed, as they are packaged together when installed. To ensure that npm is installed properly please have the students run `npm --version` in the terminal. Anything other than a version number should be indicate to the the TAs that student needs assistance.

* Remind students to do a `git pull` of the class repo to have today's activities ready and open in VS Code. 

* If you are comfortable doing so, live code the solutions to the activities. If not, no worries. Use the solutions provided and follow the prompts and talking points for review. 

* Let students know that the Bonus for each activity is meant to give them "food for thought". Rather than extra coding practice, it is a self-study on related topics that are beyond the scope of this unit for those who want to dig deeper and further their knowledge on this topic.

## Learning Objectives

By the end of class, students will be able to:

* Run Node.js applications from the command line with arguments

* Import and use the native `fs` module to read and write to the file system

* Initialize projects and install third-party modules like Inquirer using npm

* Use "dependencies" and investigate the content of `package.json`

## Time Tracker

| Start  | #   | Activity Name                              | Duration |
|---     |---  |---                                         |---       |
| 10:00AM| 1   | Instructor Demo: Modularization            | 0:05     |
| 10:05AM| 2   | Student Do: Modularization                 | 0:15     |
| 10:20AM| 3   | Instructor Review: Modularization          | 0:10     |
| 10:30AM| 4   | Instructor Demo: `npm`                     | 0:05     |
| 10:35AM| 5   | Student Do: `npm`                          | 0:15     |
| 10:50AM| 6   | Instructor Review: `npm`                   | 0:10     |
| 11:00AM| 7   | Instructor Demo: Inquirer                  | 0:05     |
| 11:05AM| 8   | Student Do: Inquirer users                 | 0:15     |
| 11:20AM| 9   | Instructor Review: Inquirer users          | 0:10     |
| 11:30AM| 10  | FLEX                                       | 0:30     |
| 12:00PM| 11  | BREAK                                      | 0:30     |
| 12:30PM| 12  | Instructor Do: Stoke Curiosity             | 0:10     |
| 12:40PM| 13  | Instructor Demo: for...of                  | 0:05     |
| 12:45PM| 14  | Student Do: for...of                       | 0:15     |
| 1:00PM | 15  | Instructor Review: for...of                | 0:10     |
| 1:10PM | 16  | Instructor Demo: Rest and Spread           | 0:05     |
| 1:15PM | 17  | Student Do: Rest and Spread                | 0:15     |
| 1:30PM | 18  | Instructor Review: Rest and Spread         | 0:10     |
| 1:40PM | 19  | Instructor Demo: Object Destructuring      | 0:05     |
| 1:45PM | 20  | Student Do: Object Destructuring           | 0:15     |
| 2:00PM | 21  | Instructor Review: Object Destructuring    | 0:10     |
| 2:10PM | 22  | Everyone Do: Git                           | 0:20     |
| 2:30PM | 23  | END                                        | 0:00     |

---

### 1. Instructor Demo: Modularization (5 min) 

* Open the [15-Ins-Modularization](../../../../01-Class-Content/09-NodeJS/01-Activities/15-Ins_Modularization) directory in your IDE and demonstrate the following:

* Run `node index.js` from the command line and demonstrate the following: 

  * 🔑 We notice that the output of this file is: 

    ```sh
    apple
    1
    ```

  * 🔑  We are importing a dependency, `badmath`, and logging the results of `badmath.pie` and `badmath.predictable`. 

    ```js
    var badmath = require("./badmath.js");

    console.log(badmath.pie);

    console.log(badmath.predictable());
    ```

* Open the [badmath.js](01-Class-Content/09-NodeJS/01-Activities/15-Ins_Modularization/badmath.js) file and explain the following:

  * We declare a `pie` and `predictable` variables:

  ```js
  var pie = "apple";

  var predictable = function(){
    return 1;
  }
  ```

  * 🔑 We _export_ our `pie` and `predictable` variables as an object stored in `module.exports`:

  ```js
  module.exports = {
    pie: pie,
    predictable: predictable
  };
  ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is referenced by the keyword **module**?'

  * 🙋 Our file, `badmath.js`.

  * ☝️ Where can we look if we want to learn more about `module.exports`?

  * 🙋 If we want to learn more, we can read about it in the [module.exports documentation](https://nodejs.org/api/modules.html#modules_module_exports)

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in [16-Stu-maths](../../../../01-Class-Content/09-NodeJS/01-Activities/16-Stu_maths/README.md).

### 2. Student Do: Modularization (15 min) 

* Direct students to the activity instructions found in [16-Stu-maths](../../../../01-Class-Content/09-NodeJS/01-Activities/16-Stu_maths/README.md).

* Break your students into pairs that will work together on this activity.

    ```md
    # Maths Module

    The JavaScript `Math` library contains many useful properties and methods. But it's missing a few of the basics. In this activity, you will create your own `maths` module then import it into a Node application to access its properties and methods.

    Running `node index.js sum 3 4` will return 7.

    ## Instructions

    * Create two files, `index.js` and `maths.js`, then import `maths.js` into `index.js`.

    * Write four methods for the results of the four basic mathematical operations in `maths.js`: `sum`, `difference`, `product`, and `quotient`; and then export them.

    * In `index.js`, create variables to capture the values passed from the command line in `process.argv`: `operation`, `numOne` and `numTwo`.

    * Next, write a `switch` statement that accepts an `operation` parameter.

    * Within each `case` of the `switch`, use the corresponding `maths` methods to perform the operation on the numbers taken from the command line using `process.argv`.

    ## Hint(s)

    * You will need to use `parseInt()`. But why?

    ## Bonus

    * You can also export your functions directly. How? 

    ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help while circulating through room.

### 3. Instructor Review: Modularization (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with modularization? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

  * ✔️ This exercise combines the concepts of `process.argv` with the idea of `module.exports`.

  * ✔️ We exported an object containing all our math methods like sum, difference, product and quotient

  * We capture the exported object on the other side by using a require statement at the top of the file

* Open [index.js](../../../../01-Class-Content/09-NodeJS/01-Activities/16-Stu_maths/Solved/index.js) in your IDE and explain the following: 

  * When we run the commands below, we can see the output of each math operation in the terminal.

    ```sh
    node index.js sum 3 4
    node index.js difference 3 4
    node index.js product 3 4
    node index.js quotient 3 4
    ```

  * We import our `maths` module and declare three variables, `operation`, `numOne` and `numTwo` to store the values passed to `process.argv` from the command line:

    ```js
    const maths = require('./maths');

    const operation = process.argv[2];

    const numOne = parseInt(process.argv[3]);
    const numTwo = parseInt(process.argv[4]);
    ```

  * We use a `switch` statement to evaluate the `operation` case and call the corresponding method from our `maths` module:

    ```js
    switch (operation) {
        case 'sum':
            console.log(maths.sum(numOne, numTwo));
            break;
        case 'difference':
            console.log(maths.difference(numOne, numTwo));
            break;
        case 'product':
            console.log(maths.product(numOne, numTwo));
            break;
        case 'quotient':
            console.log(maths.quotient(numOne, numTwo));
            break;
        default:
            console.log('Check your maths!');
    }
    ```

  * 🔑  Open [maths.js](../../../../01-Class-Content/09-NodeJS/01-Activities/16-Stu_maths/Solved/maths.js) show that we export our methods directly by declaring them inside of the `exports` object:

    ```js
    module.exports = {
        sum: (a, b) => a + b,
        difference: (a, b) => a - b,
        product: (a, b) => a * b,
        quotient: (a, b) => a / b,
    };
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why do we need to use `parseInt` when getting the numbers from the command line?

  * 🙋 In order to preform math operations in code, the data type for those numbers has to "number".

* Answer any questions before proceeding to the next activity.

### 4. Instructor Demo: Node Package Manager (NPM) (5 min) 

* Run [npm/index.js](../../../../01-Class-Content/09-NodeJS/01-Activities/17-Ins-npm/npm/index.js) from the command line and demonstrate the following: 

  * 🔑  When we run this javascript file with node, we will see an error message with a code of `MODULE_NOT_FOUND`

  * 🔑  We will also see the error `Error: Cannot find module 'badmath'`. This refers to the module we are attempting to import on line one of `index.js`

    ```js
    const badmath = require('badmath');
    ```

  * To resolve this issue we would need to run the following commands to initialize npm inside this repository. This will a `package.json` file which will keep track of what packages are needed to use the project properly.

    ```sh
    npm init -y
    npm i badmath
    ```

  * 🔑 The `-y` flag tells npm to answer "yes" to each question it normally asks during the init process. This is to save us some time. 

  * The second command `npm i` is shorthand for `npm install`. These two commands can be used interchangeably. `npm i badmath` will reach out to npm's registry and install the latest version of the package you named after the command. In our case, we are installing `badmath`. 
 
* Open the [init](../../../../01-Class-Content/09-NodeJS/01-Activities/17-Ins-npm/init) folder to examine the additional file. 

  * 🔑  You will notice a difference immediately. This folder comes with a `package.json` file. This describes the repository itself as well as any scripts, dependencies, and licenses associated with the project.

  * 🔑  We can also see when we examine the content of the `package.json` file that one of our required dependencies is `badmath`.

    ```json
    "dependencies": {
        "badmath": "^1.0.1"
    },
    ```
  * Running `npm install` inside the [init directory](../../../../01-Class-Content/09-NodeJS/01-Activities/17-Ins-npm/init) will instruct npm to examine the content of the `package.json` and install anything listed in the dependencies section.
  
  * 🔑 You will also notice a `package-lock.json` file that gets created. This keeps track of specific version numbers, but for the most part we don't need to interact with this file in any way.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we make our own `package.json` file?

  * 🙋 We would run `npm init`
  
  * ☝️ What should we do if there is already a `package.json` in a project we cloned?

  * 🙋 We would run `npm install` to get all the needed dependencies.
  
  * ☝️ Where can we find out what other npm commands are available?

  * 🙋 We can check out the [npm docs](https://docs.npmjs.com/cli-documentation/).

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in [18-Stu-Package-npm](../../../../01-Class-Content/09-NodeJS/01-Activities/18-Stu-Package-npm/README.md).

### 5. Student Do: Package.json and NPM (15 min)

* Direct students to the activity instructions found in [18-Stu-Package-npm](../../../../01-Class-Content/09-NodeJS/01-Activities/18-Stu-Package-npm/README.md).

* Break your students into pairs that will work together on this activity.

```md
## NPM

This activity contains two parts where you will be creating a `package.json` and also installing dependencies from an existing `package.json`. 

1. npm initialization
2. npm install

Please refer to the `/init` and `/package` folders and their respective `README.md` files.
```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help while circulating through room.

### 6. Instructor Review: Node Package Manager (NPM) (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with npm? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

  * ✔️ In one activity we started from scratch by creating a `package.json` file using `npm init`

  * ✔️ In the other activity we used the existing `package.json` to install the dependencies already outlined in the file.

* Open the [init](../../../../01-Class-Content/09-NodeJS/01-Activities/18-Stu-Package-npm/init/README.md) readme in your IDE and explain the following: 

  * We start out here by running `npm init -y`, which will generate the `package.json` file. Optionally, we can run the command without the `-y` flag to allow for more custom responses.

    ```sh
    npm init -y
    npm install inquirer --save
    ```

  * 🔑  The second command will install inquirer and also add the package, inquirer, to our dependency list in `package.json`
  
* Open [package](../../../../01-Class-Content/09-NodeJS/01-Activities/18-Stu-Package-npm/package/README.md) in your IDE and explain the following: 

  * This exercise has us simply run the install command, because as you can see the `package.json` already exists for this project. Furthermore, this file contains "inquirer" as a dependency.

    ```sh
    npm install
    ```

  * 🔑  Running `npm install` is a great first step with any project or exercise that you cloned down from another user or organization.

  * 🔑  Sometimes you want to install a package, but not as part of your production app. In this case, you can use `npm install jest --save-dev`.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What does the `--save` flag do, and is it always necessary?

  * 🙋 The save flag ensures that we add our dependency to the list outlined inside the package.json. Newer versions of `npm` will do this automatically so it isn't always required.

  * ☝️ How do we install a specific package?

  * 🙋 We can run `npm install <package name>`
  
  * ☝️ How do we create a package.json file and skip the questions?

  * 🙋 We can run `npm init -y`

* Answer any questions before proceeding to the next activity.

### 7. Instructor Demo: Inquirer (5 min) 

* Open [19-Ins_Inquirer-Demo](../../../../01-Class-Content/09-NodeJS/01-Activities/19-Ins_Inquirer-Demo/) in your browser and demonstrate the following:

* Run [19-Ins_Inquirer-Demo](../../../../01-Class-Content/09-NodeJS/01-Activities/19-Ins_Inquirer-Demo/index.js) from the command line and demonstrate the following: 

  * 🔑 This is a folder for a new activity, and we can a `package.json` that exists already. This is an indicator that we should run the following command:

    ```sh
    npm install
    ```
  
  * 🔑 When we run `node index.js` we notice that unlike previous node applications we have built, this one is not only outputting text to the terminal, it is also asking us for some input.

    ```sh
    ? What is your user name?
    ? What is your password?
    ? Re-enter password to confirm:
    ```

  * 🔑 The application asks for our username, a password and then a confirmation. If the passwords match, the application then logs "Success!

* Open [index.js](../../../../01-Class-Content/09-NodeJS/01-Activities/19-Ins_Inquirer-Demo/index.js) and examine the code:
  
  * At the top of the file, we import `inquirer`

    ```js
    var inquirer = require("inquirer");
    ```

  * 🔑  We use the `prompt` method to ask the user for input

    ```js
    inquirer
        .prompt([
        {
            type: "input",
            message: "What is your user name?",
            name: "username"
        },
        {
            type: "password",
            message: "What is your password?",
            name: "password"
        },
        {
            type: "password",
            message: "Re-enter password to confirm:",
            name: "confirm"
        }
        ])
    ```

  * The prompts are an array of objects have a `name`, `type`, and `message` property.
  
  * The input of each prompt will be stored in an object property that corresponds to the `name` value. The `type` values are built in to `inquirer` and what allows us to enter _secure_ passwords.
  
  * The `message` property is the prompt that the user ends up seeing. 

  * Once all of the prompts are answered, we can _then_ work with the user `response`. Here, the `response` parameter in the `.then` callback corresponds with the user input, which `inquirer` store in an object. 

    ```js
    .then((response) =>
        response.confirm === response.password
            ? console.log('Success!')
            : console.log('You forgot your password already?!'));
    ```

  * Here we are checking to see if the confirmed password input is strictly equal to the password the user provided in the previous response. We then use a conditional (ternary) operator to check if the passwords match. If so, we log "success!", otherwise let the user know they forgot their password.
 
* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Based on the name alone, what do you think the `inquirer` package allows us to do?

  * 🙋 Based on the dictionary definition of _inquire_, it might be used to ask for information from someone, that someone being the user of our application. 

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `@TODO/folder/file`.

### 8. Student Do: Inquirer Users (15 min) 

* Direct students to the activity instructions found in [20-Stu-Inquirer-Users](../../../../01-Class-Content/09-NodeJS/01-Activities/20-Stu_Inquirer-Users/README.md).

* Break your students into pairs that will work together on this activity.

```md
# Inquirer Users

In this activity, you will build a simple command line application that accepts user input and writes it to a `.json` file. 


## Instructions

* Initialize your repository and install the `inquirer` dependency.

    * Is there another dependency you will need? 

* Prompt your user with the following questions:

    * "What is your name?"

    * "What languages do you know?"

    * What is your preferred method of communication?"

* Then write the user response to a file. 


## Hint(s)

* You will need to use `JSON.stringify()`.

* You will need to consult the `inquirer` documentation on how to prompt users for checkboxes and lists.


## Bonus

* How would you format your JSON?

* Can you generate the name of your user file from their input?
```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help while circulating through room.

### 9. Instructor Review: Inquirer Users (15 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with inquirer? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

  * ✔️ Our application requires two dependencies, one third-party (`inquirer`) the other standard library (`fs`).

  * ✔️ We use two new `type` properties to prompt our user for a `"checkbox"` and a `"list"`, both of which require a `choices` property and a corresponding array of options.

  * ✔️ We use the `JSON.stringify` optional `replacer` (`null`) and `space` (`\t`) parameters to format our `data` object with pretty-print appearance. 

* Open [20-Stu-Inquirer-Users](../../../../01-Class-Content/09-NodeJS/01-Activities/20-Stu_Inquirer-Users/Solved/index.js) in your IDE and explain the following: 

  * 🔑 Our application requires two dependencies, one third-party (`inquirer`) the other standard library (`fs`).

    ```js
    const inquirer = require('inquirer');
    const fs = require('fs');
    ```

  * 🔑 We use two new `type` properties to prompt our user for a `"checkbox"` and a `"list"`, both of which require a `choices` property and a corresponding array of options.

    ```js
      inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?"
        },
        {
            type: "checkbox",
            message: "What languages do you know?",
            name: "stack",
            choices: [
                "HTML", 
                "CSS", 
                "JavaScript", 
                "MySQL"
            ]
        },
        {
            type: "list",
            message: "What is your preferred method of communication?",
            name: "contact",
            choices: [
                "email",
                "phone",
                "telekinesis"
            ]
        }
    ])
    ```
  
  * We pass the output of the `prompt` method to our Promise callback as `data`.

    ```js
      .then((data) => {
        const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

        fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });
    ```
  * We are creating a filename by removing the spaces and setting all letters to lowercase. We then concat the filename using the `.join` method. Finally, we add `.json` to the filename.
  
  * 🔑 We use the `fs.writeFile` method to create a new file using our `filename` variable. We use the `JSON.stringify` optional `replacer` (`null`) and `space` (`\t`) parameters to format our `data` object with pretty-print appearance.


* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why do we need to use `JSON.stringify` when passing in the data?

  * 🙋 The data needs to be converted to a string, because as is, `data` is not of type `string`. We can learn more about this method at [MDN's documentation for JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).
  
  * ☝️ What can we do if we don't completely understand this?

  * 🙋 The inquirer documentation has some examples of how to use their package on their [github page](https://github.com/SBoudrias/Inquirer.js#readme)
  

* Answer any questions before ending the class.


### 10. FLEX (30 min)

### 11. BREAK (30 min)

### 12. Instructor Do: Stoke Curiosity (10 min)

* Welcome students to class and congratulate them on learning some of the most used ES6 syntax rules

* Reassure students that learning new syntax can be time consuming and difficult, but it won't always feel like that. Using these rules more will allow you to commit them to memory and use less mental bandwidth going forward.

* Explain that one of the best ways to learn these new rules is to try and use the newer syntax whenever possible. The old syntax is still perfectly valid, and if you have any doubts, it is always there to fall back on.

* These newer syntax rules are not born in a vacuum. They are the result of years of revision by a standards organization called ECMA. The ES in ES6 stands for ECMAScript. It is important to have standards in web development to ensure maximum compatibility across a wide spectrum of web browsers.

* ECMAScript itself is a programming language, but as far as we are concerned it is just a language from which our syntax rules are inherited. A more detailed history of ECMAScript can be found [here](https://en.wikipedia.org/wiki/ECMAScript).


### 13. Instructor Demo: for...of (5 min) 

* Open [21-Ins-For_Of](../../../../01-Class-Content/01-HTML-Git-CSS/01-Activities/02-IntroToConsoleBash/README.md01-Class-Content/09-NodeJS/01-Activities/21-Ins_For_Of/index.js) in your browser and demonstrate the following:

* Run `node index.js` after commenting out the `.map` example. 

  * 🔑 Notice that when we run our code we see each value in our songs array.

    ```js
    const songs = ['Bad Guy', 'Old Town Road', '7 Rings'];

    for (const value of songs) {
        console.log(value);
    }
    ```

  * 🔑 After we comment in the second example, we can also see that the we use a "for of" loop to iterate over an object or map

    ```js
    const songs = new Map([['Bad Guy', 1], ['Old Town Road', 2]]);

    for (const [key, value] of songs) {
        console.log(`${key}'s chart position is ${value}`);
    }
    ```

  * 🔑 Explain that the for...of statement creates a loop iterating over objects, including Array, Map, Set, String, TypedArray.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How does the "for ... of" seem to differ from a `forEach`?

  * 🙋 The `forEach` method only applies to arrays, while the "for ... of" is much more flexible.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in [22-Stu_For_Of - Readme](../../../../01-Class-Content/09-NodeJS/01-Activities/22-Stu_For_Of/README.md).

### 14. Student Do: for...of (15 min) 

* Direct students to the activity instructions found in [22-Stu_For_Of](../../../../01-Class-Content/09-NodeJS/01-Activities/22-Stu_For_Of/README.md).

* Break your students into pairs that will work together on this activity.

  ```md
    ## For...of

    ### Instructions

    * Select all of the songs in `index.html` and store them in a variable using JavaScript.

    * Iterate through your collection with a for...of and:

    * Add a `class` that changes the color to red (you have to create this class in your CSS file)
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help while circulating through room.

### 15. Instructor Review: for...of (10 min)  

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with the "for ... of" loop? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

  * ✔️ The syntax for the "for ... of" loop reads very similar to plain english which helps us conceptualize what is happening in our program.

  * ✔️ The syntax is relatively straightforward, the key takeaway is knowing when to use and and what to use it for.

* Open [index.html](../../../../01-Class-Content/09-NodeJS/01-Activities/22-Stu_For_Of/Solved/index.html) in your browser and explain the following: 

  * When we open the `index.html` file, we notice that each line item in our unordered list has green color
  
  * This is the result of using the `for ... of` loop to iterate over each line item and add the class of `green` to the class list for the given element. 

    ```js
        const songs = document.querySelectorAll("ul > li");

        for (const song of songs) {
            song.classList.add("green");
        }
    ```

  * 🔑 If you forget the syntax, VSCode can help you create these types of loops by offering a snippet to work from. You can try it yourself by typing `forof` and simply hitting enter.
    
    ```js
        for (const iterator of object) {
            
        }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do you know when to use a "for ... of" loop

  * 🙋 While it generally depends on the situation, "for ... of" loops help most when you need to iterate through key/value pairs in an object

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of), and stick around for Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 16. Instructor Demo: Rest and Spread Operators (5 min) 

* Open [Ins_Rest_and_Spread](../../../../01-Class-Content/09-NodeJS/01-Activities/23-Ins_Rest_and_Spread/index.js) in your browser and demonstrate the following:

* Run `node index.js` from the command line and demonstrate the following: 

#### Rest Parameters

  * 🔑 When we run the file we notice that we get output for a few different operations: without the rest operator, with the rest operator, without spread, and with spread.

    ```js
    function add(x, y) {
        return x + y;
    }

    console.log(add(1, 2, 3, 4, 5)) // => 3
    ```
  * Explain to the class that it is possible to call a function with any number of arguments, but only the first two will be counted.
  
  * Let's examine this function using the `rest` operator:

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

  * Let's examine another example:

    ```js
    function howManyArgs(...args) {
        return `You passed ${args.length} arguments.`; // point out the template literal
    }

    console.log(howManyArgs(0, 1)); // You have passed 2 arguments.
    console.log(howManyArgs("argument!", null, ["one", 2, "three"], 4)); // You have passed 4 arguments.
    ```
  * 🔑  The takeaway here is that variables are now available inside the array of our function. We can also pass as many in as we want.

#### Spread Operator

  * 🔑  The spread operator allows iterables like arrays, objects and strings to be expanded into single arguments or elements. 
  
  * One way to think of this is like pouring out items from a cup. The only difference is that our items are variables and the cup is an iterable.

    ```js
    // Spread Operator

    let dragons = ['Drogon', 'Viserion', 'Rhaegal'];
    let weapons = ['dragonglass', ...dragons, 'wildfire']; // notice the spread operator ...dragons

    console.log(weapons); // prints ["dragonglass", "Drogon", "Viserion", "Rhaegal", "wildfire"]

    ```

  * Here you can see that we have expanded both arrays into a new array with all of the elements. 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why does the first example of our `add` function only output `3`?

  * 🙋 This is due to the fact that only the first and second parameter get counted without the use of the rest operator
  
  * ☝️ The syntax for spread and rest are similar, but what is the difference between the two?

  * 🙋 The rest operator allows us to pass in any number of arguments while the spread operator allows us to spread out an iterable into unique variables.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in [24-Stu_Rest_and_Spread - readme](../../../../01-Class-Content/09-NodeJS/01-Activities/24-Stu_Rest_and_Spread/README.md).

### 17. Student Do: Rest and Spread Operators (15 min) 

* Direct students to the activity instructions found in [24-Stu_Rest_and_Spread - readme](../../../../01-Class-Content/09-NodeJS/01-Activities/24-Stu_Rest_and_Spread/README.md).

* Break your students into pairs that will work together on this activity.

```md
## Spread and Rest

**Follow the comments in `index.js`.

1. Copy the `songs` array into another array using spread and console.log what it returns.

2.  Modify the `addition` function so that is uses the rest operator and maintains the same functionality. You should still be able to pass in any number of arguments. Run the code first in your console to see the functionality.
```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help while circulating through room.

### 18. Instructor Review: Spread and Rest Operators (10 min)  

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with spread and rest operators? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

  * ✔️ The spread and rest operators might look very similar to you at this point, so don't be intimidated if you get them confused at first. We will have plenty of examples to help solidify your understanding moving forward.

  * ✔️ During this exercise we also used something called `reduce` which is used in our case to calculate the sum of an array. Lets look at the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) briefly before we review.

* Open [Solved/index.js](../../../../01-Class-Content/09-NodeJS/01-Activities/24-Stu_Rest_and_Spread/Solved/index.js) in your IDE and explain the following: 

  * The first example we are using the spread operator copy the items in `songs` to `new_songs`. Much like we would be dumping out the contents of a cup, we are populating the `new_songs` array with the items in `songs`.

    ```js
    const songs = ["Creep", "Everlong", "Bulls On Parade", "Song 2", "What I Got"];
    const new_songs = [...songs];

    console.log(new_songs); // => ["Creep", "Everlong", "Bulls On Parade", "Song 2", "What I Got"];
    ```

* In the next example we modify our addition function to make use of the rest operator. This allows us to pass in as many arguments as we need. This is particularly useful in this case where we want to add as many numbers as necessary.

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

  * 🔑  There is a good chance that you may be confused on where spread and operators go, since they are very similar and can be used in similar situations. This is just an introduction and they will begin to pick up fluency as they get more practice.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What does the reduce method help us with in this exercise?

  * 🙋 The reduce method reduces an array to a single value. It takes a callback function and runs that function for each value in the array starting from the left to the right.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN spread docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax), the [MDN rest docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters), and stick around for Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 19. Instructor Demo: Object Destructuring (5 min) 

* Open [25-Ins-ObjDestructuring](../../../../01-Class-Content/09-NodeJS/01-Activities/25-Ins_ObjDestructuring/index.js) in your browser and demonstrate the following:

* Run `node index.js` from the command line and demonstrate the following: 

  * 🔑 Notice that when we run the `index.js` file we see several variables logged to the terminal. Each of these are different ways of accessing variables inside an object.

  * 🔑 We also notice that in the file, we are using dot notation to access variables inside an object, as we have in the past. We are also plucking off certain variables and setting them equal to the value of the object. This is done with syntax that uses curly braces on the left side of the equals sign:

  ```js
  const arya = {
    name: 'Arya Stark',
    parents: ['Eddard Stark', 'Catelyn Stark'],
  };

  const { name, parents } = arya;
  ```

  * You can now also use object destructuring as a way to pluck of certain variables from a object. Consider this example:

  ```js
  const betterLogCharacter = ({ name, parents }) =>
  console.log(`${name}'s parents are: ${parents[0]} and ${parents[1]}.`);

  betterLogCharacter(jaime);
  ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 We could look up examples of object destructuring and get a feel for the logic before attempting the activity.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in [26-Stu-ObjDestructuring - readme](../../../../01-Class-Content/09-NodeJS/01-Activities/26-Stu_ObjDestructuring/README.md).

### 20. Student Do: Object Destructuring (15 min) 

* Direct students to the activity instructions found in [26-Stu-ObjDestructuring - readme](../../../../01-Class-Content/09-NodeJS/01-Activities/26-Stu_ObjDestructuring/README.md).

* Break your students into pairs that will work together on this activity.

  ```md
  # Object Destructuring

  In this activity we will use ES6 object destructuring to pull out object data into variables.

  ## Instructions

  * Open the [Unsolved](Unsolved) folder and write ES6 destructuring code to make all of the console.log's print successfully.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help while circulating through room.

### 21. Instructor Review: Object Destructuring (10 min)  

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with object destructuring? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

  * ✔️ This exercise helps us highlight how we can pluck off multiple properties at once, saving us a few lines of code.

  * ✔️ We also are able to destructure function parameters. This allows us to name them directly and again save a few steps.  

  * ✔️ Now we can simply expect an object and pull the properties off without worrying about the order they're passed in or write extra code to destructure them the old way.

* Open [26-Stu-ObjDestructuring](../../../../01-Class-Content/09-NodeJS/01-Activities/26-Stu_ObjDestructuring/Solved/index.js) in your IDE and explain the following: 

  * In the past, if we wanted to cherry pick an object's properties, we'd have to do something like the following:

  ```js
  const arya = {
    name: "Arya Stark",
    parents: ["Eddard Stark", "Catelyn Stark"]
  };

  const aryaName = arya.name; // "Arya Stark"
  const aryaParents = arya.parents; // ["Eddard Stark", "Catelyn Stark"]`
  ```

  * 🔑  Now with ES6 object destructuring syntax, we can do this:

  ```js
  const { name, parents } = arya;

  console.log(name); // prints `"Jaime Lannister"`
  console.log(parents); // prints `["Tywin Lannister", "Joanna Lannister"]`
  ```

  * We can also rename our destructured properties like so:

  ```js
  const jaime = {
    name: "Jaime Lannister",
    parents: ["Tywin Lannister", "Joanna Lannister"]
  };

  const { name: jaimeName } = jaime;
  console.log(jaimeName); // prints `"Jaime Lannister"`
  ```

  * We are also able to handle nested objects in a much more elegant way:

  ```js
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
  ```

  * 🔑  This also works with arrays:

  ```js
  const characters = ["Ned Stark", "The Quiet Wolf", "House Stark"];

  const [name, alias, allegiance] = characters;
  console.log(name, alias, allegiance); // <= Ned Stark The Quiet Wolf House Stark
  ```

  * You can also use destructuring with strings:

  ```js
  const skills = "The Usurper, male, Baratheon, Cersei"; // string of data

  const [alias, gender, family, spouse] = skills.split(","); // set variables and split
  console.log(alias, gender, family, spouse); // print them by variable name
  ```


* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Does the order matter when passing destructured object properties into a function? 

  * 🙋 No! Because we are referring to the properties in the object by name, the key names will align with the correct value every time.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋  We can refer to supplemental material, look up some examples on google, and stick around for Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in [27-Evt_Git_Fork](../../../../01-Class-Content/09-NodeJS/01-Activities/27-Evr_Git_Fork/README.md).

### 22. Everyone Do: Git Fork (20 min)

*  Open [Git docs](https://git-scm.com/book/en/v2/GitHub-Contributing-to-a-Project) in your browser and explain the following:

  * Fork allows you to contribute to a repository that you don't have 'push' access to. When you fork a project, Github will make an exact copy of the project that will live on your account that you can push to.
  
  * This workflow then allows you to create a pull request to the parent repository when you have finished your contributions. This is a very common workflow in many open source projects. 

* Direct students to the activity instructions found in [27-Evt_Git_Fork](../../../../01-Class-Content/09-NodeJS/01-Activities/27-Evr_Git_Fork/README.md).

* While everyone is working on the activity, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help while circulating through room.

* Open your browser and choose a repository to fork. Click the green "fork" button. 

* Open your command line and demonstrate the following:

  * After we clone the repository, we will want to visit our own fork and copy the git url to clone it our local machine

  ```sh
  git clone git@github.com:microsoft/vscode.git
  ```

  * 🔑 After you clone the local repository, run the following command to demonstrate that the remote is pointed to your namespace rather than the parent repository

  ```sh
  git remote -v
  ```

* Answer any questions before students go on break.

### 23. END (0 min)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete [this anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

- - -

@TODO © <year> Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

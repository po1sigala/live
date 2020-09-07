### 5. Instructor Demo: Hello Variable (5 mins) 

* Open `O3-Ins_Hello-Variable/script.js` in your IDE and demonstrate the following:

  * The `var` keyword is used to declare a variable. Following the `var`, the variable is given a unique name, or identifier.

  ```
    var studentName;
  ```

  * Declaring a variable only gives it a name. To assign a value, use the `=` assignment operator followed by the value you want the variable to hold. 

  ```
    var studentName = "Abdul";
    var studentAge = 32;
  ```

  * The `=` assignment operator is also used to re-assign a new value to a variable. Use the variable's name followed by `=` and the new value. Since the variable has already been declared, there is no need to use `var` again.

  ```
    studentName = "Tonya";
    studentAge = 52;
  ``` 

  * Variable names are used to access the value the variable holds. 

  * In the previous activity, we put a value directly into the `()` in a console log function to log a message. Since the value entered is `"My name is "` then that value logs to the console. 

  ```
    console.log("My name is ");
  ```

  * To log the value stored in a variable, use the variable's name to give the console log access to the value assigned to that variable. Since the value of `studentName` has been re-assigned to the value `Tonya`, the value `Tonya` logs to the console. 

  ```
    console.log(studentName);
  ```
 
  * It is also possible to combine the value `"My name is "` and the value stored in the `studentName` variable into a single console log. Use the concatenation operator `+` to combine the values and log the message `"My name is Tonya"`.

  ```
    console.log("My name is " + studentName);
  ```
  
* Open `O3-Ins_Hello-Variable/script.js` in your IDE and demonstrate the following:

  * Since the value `"My name is "` is written directly between the `()`, the message `My name is ` is logged.

  * Since the variable `studentName` is written in between the `()`, the variable's current assigned value `Tonya` is logged. 

  * Combining the value `"My name is "` and the value stored in the `studentName` variable with a `+` logs "My name is Tonya". 
  
* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What keyword is used to declare a variable? 

  * 🙋 The `var` keyword is used to declare a variable. 

  * ☝️ What operator is used to assign a value to a declared variable?  

  * 🙋 The `=` assignment operator is used to assign and re-assign a value to variable that has already been declared. 

  * ☝️ How do you access the value assigned to a variable?  

  * 🙋 Use the variable's name.  

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `04-Stu_Hello-Variable/README.md`.

### 6. Student Do: Hello Variable (15 mins) 

* Direct students to the activity instructions found in `04-Stu_Hello-Variable/README.md`.

* Break your students into pairs that will work together on this activity.

```md
# Hello Variable 

In this activity, you will work with a partner to write introductions in the console using console.log() and variables.

## Instructions

* Be sure to work with your partner!

* Open [script.js](04-Stu_Hello-Variable/Unsolved/script.js) to implement the following features:

  * As a class member, I want to input name, number of pets, and a fun fact about myself and log an introduction to the console. Then, by only re-assigning the variables, I want to introduce my partner.

  * When I store a name in a variable called `name`, then it should log this introduction line to the console: "My name is `VALUE_STORED_IN_VARIABLE_NAME`."

  * When I store a number in a variable called `pets`, then it should log this introduction line to the console:  "I have `VALUE_STORED_IN_VARIABLE_PETS` pet(s)."

  * When I store a fun fact in variable called `funFact`, then it should log this introduction line to the console: "Fun fact: `VALUE_STORED_IN_VARIABLE_FUNFACT`"

  * When I re-assign the values of `name`, `pets` and `funFact` with my new partner's information the introduction messages above should reflect the new values.

* Open [index.html](04-Stu_Hello-Variable/Unsolved/index.html) to implement the following features:

  * When I open the HTML file in the browser and go to the console, the logs should appear. 

## 💡 Hint

The `+` operator is used to combine values in a single console log message.

## 🏆 Bonus

* If you have fully completed the above tasks, here is something you and your partner can work through as an added challenge to further your knowledge:

  * What happens when you concatenate two or more variables in a single console log using `+`? Is the result what you expected? Why or why not? 

* Use [Google](https://www.google.com) or another search engine to research the above.

```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help while circulating through room.

### 8. Instructor Review: Hello Variable (10 mins) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with JavaScript variables? (Poll via Fist of Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

  * ✔️ Variable declaration

  * ✔️ Value assignment

  * ✔️ Accessing stored values

* Open `04-Stu_Hello-Variable/Solved/script.js` in your IDE and explain the following: 

  * Variables are declared using `var` and assigned a value using `=`.

  ```
    var name = "Sakura";
  ```

  * The variable's values are accessed using the variable name. Since the variables have assigned the values `"Sakura"`, `3` , `"I like pineapple on my pizza."`, that is the values that are used in the console logs below.  To create the longer messages, the `+` concatenation operator is used.

  ```
    console.log("My name is " + name + ".");
    console.log("I have " + pets + " pet(s).");
    console.log("Fun fact: " + funFact);
  ```

  * Re-assign a variables' values using  `=`. The `var` keyword is not used during re-assignmment because the variable has already been declared.

  ```
    name = "Mateo";
    pets = 5;
    funFact = "I was a yo-yo champ in third grade."
  ```

  * After the variables are re-assigned, using the variable names will access the new values `"Mateo"`, `5`, `"I was a yo-yo champ in third grade."` when logged. Note that the console logs have not changed, only the values stored in the variables.

```
    console.log("My name is " + name + ".");
    console.log("I have " + pets + " pet(s).");
    console.log("Fun fact: " + funFact);
```

* Open`01-Ins_S cript-ConsoleLog\Solved\index.html` in your browser and navigate to the console. 

    * Note that the logs created by using `+` appear as a single message in the console. 

    * In the first introduction, the console logs use the values stored in variables as originally assigned (`"Sakura"`, `3` , `"I like pineapple on my pizza."`). 

    * Then, point out that the second introduction, the console logs uses the re-assigned values (`"Mateo"`, `5`, `"I was a yo-yo champ in third grade."`). 
    
    * Point out that value re-assignment does not change all the console logs. Since JavaScript is read from top to bottom, when the value is re-assigned only the code executed after the re-assignment is changed. 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

    * ☝️ How do you re-assign a new value to a variable?  

    * 🙋 You can re-assign a variable's value by using tha assignment operator `=`. You do not need to use `var` since the variable is already declared. 

    * ☝️ How do you console log the value stored in a variable? 

    * 🙋 To access the value stored in a variable, use the variable's name. To console log the value, the variable name is placed inside the `()`. 

    * ☝️ How do you think the ability to re-assign values to a variable may be useful in your code? 

    * 🙋 The ability to re-assign values to variables makes your code more flexible and reusable. In the activity we just completed, we were able to log new messages simply by re-assigning the values stored in the variables. 

    * ☝️ What can we do if we don't completely understand this?

    * 🙋 We can refer to supplemental material, read the [MDN Web Docs: Storing the Information You Need -- Variables](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables), and stick around for Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

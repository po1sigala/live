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

  * The `=` assignment operator is also used to re-assign a new value to a variable. Use the variable's name followed by `=` and the new value you want the variable to hold. Since the variable has already been declared, there is no need to use `var` again.

  ```
        studentName = "Tonya";
        studentAge = 52;

  ``` 

* To access the value stored in a variable, use the variable's name. 

* In the previous activity, we put a value directly into the `()` in a console log function to log a message. This logs `"My name is "`.

```
console.log("My name is ");

```
* To log the value stored in the `student` variable instead, use the variable's name without quotes. This will log `Tonya`, the current value held in the `student` variable.

```
console.log(studentName);

```

* Often, we want the value stored inside a variable to be part of a longer message logged to the console. To do this, use the concatenation operator `+`,  This will log the value `"My name is "` combined with the current value stored in the variable `studentName`.
```
console.log("My name is " + studentName);

```

* Open `O3-Ins_Hello-Variable/script.js` in your IDE and demonstrate the following:

  * Since the value `"My name is "` is written directly between the `()`, the message `My name is` is logged.

  * Since the variable `studentName` is written in between the `()`, the variable's value `Tonya` is logged. 

  * Combining the value "My name is " and the value stored in the `studentName` variable with a `+` logs "My name is Tonya"


* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What keyword is used to declare a variable? 

  * 🙋 The `var` keyword is used to declare a variable. 

  * ☝️ What operator is used to assign a value to a declared variable?  

  * 🙋 The `=` assignment operator is used to assign and re-assign a value to variable that has already been declared. 

  * ☝️ How do you access the value assigned to a variable?  

  * 🙋 Use the variable's name.  


* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `@TODO/folder/file`.

### 6. Student Do: Hello Variable (15 mins) 

* Direct students to the activity instructions found in `04-Stu_HelloVariable/README.md`.

* Break your students into pairs that will work together on this activity.

```md
# Hello Variable 

In this activity, you will work with a partner to write introductions in the console using console.log() and variables.

## Instructions

* Be sure to work with your partner!

* Open [04-Stu_Hello-Variable/Unsolved/script.js]() to implement the following features:

  * As a class member, I want to input name, number of pets, and a fun fact about myself and log an introduction to the console. Then, by only re-assigning the variables, I want to introduce my partner.

  * When I store a name in a variable called `name`, then it should log this introduction line to the console: "My name is `VALUE_STORED_IN_VARIABLE_NAME`."

  * When I store a number in a variable called `pets`, then it should log this introduction line to the console:  "I have `VALUE_STORED_IN_VARIABLE_PETS` pet(s)."

  * When I store a fun fact in variable called `funFact`, then it should log this introduction line to the console: "Fun fact: `VALUE_STORED_IN_VARIABLE_FUNFACT`"

  * When I re-assign the values of `name`, `pets` and `funFact` with my new partner's information the the introduction lines above should reflect the new values.

* Open [index.html](04-Stu_Hello-Variable/Unsolved/index.html) to implement the following features:

  * When I open the HTML file in the browser and go to the console, the logs should appear. 

## 💡 Hint

The `+` operator is used to combine values in a single console log message.

## 🏆 Bonus

* If you have fully completed the above tasks, here is something you and your partner can work through as an added challenge to further your knowledge:

  * What happens when you concatenate two variables in a single console log using `+`? Is the result what you expected? Why or why not? 

* Use [Google](https://www.google.com) or another search engine to research the above.

```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help while circulating through room.

### 8. Instructor Review: Hello Variable (10 mins) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with JavaScript variables`? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

  * ✔️ Variable declaration

  * ✔️ Value assignment

  * ✔️ Accessing stored values

* Open `@TODO/folder/` in your IDE and explain the following: 

  * The variables are declared using `var` and assigned a value using `=`.

  ```
    var name = "Sakura";

  ```

  * The variable's are re-assigned using `=`. The `var` keyword is not used because the variable has already been declared.

  ```
    name = "Mateo";

  ```

  * The variable's values are accessed using the variable name. In this example, the value `5` is accessed by using the variable name `pets`.

  ```

    console.log("I have " + pets + " pet(s)."); 

  ```

  * The `+` concatenation operator allows us to combine a variable's value with other values to form a longer message. In this console log, the value "Fun fact: " is combined with the value stored in the variable funFact to log, "Fun fact: I was a yo-yo champ in third grade."


  ```
   console.log("Fun fact: " + funFact);

  ```

  * When a variable's value is re-assigned, then the code that is executed after it it will use the new values. For example, in this code, the first set of console logs uses the values XXX, XXX, and XXX. Then, the variables values are re-assigned. As a result, when the console logs are re-used, the values of the variables are now XXX, XXX, XXX. So even though the console logs look exactly the same both times they are used in the code, different messages are logged. 

* Open`01-Ins_Script-ConsoleLog\Solved\index.html` in your browser and navigate to the console. 

    * Point out that the first set of console logs use the values stored in variables as originally assigned (XXX, XXX, and XXXX). 

    * Then, point out that the second set of console logs uses the values (XXX,XXX, XXXX).

    * 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

    * ☝️ How can we use a variable to store a value in our code? 

    * 🙋 We declare the variable using `var` and assign it a value using `=`

    * ☝️ What are some advantages to using variables in JavaScript?  

    * 🙋Variables store values and allows more flexibility in your code. Since JavaScript variables can easily be assigned new values, it is simple to change the output just by changing the value stored in the variable. In our activity, for example, we are able to log new messages to the console by just re-assigning the variables.
    
  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs: Storing the Information You Need -- Variables](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables), and stick around for Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

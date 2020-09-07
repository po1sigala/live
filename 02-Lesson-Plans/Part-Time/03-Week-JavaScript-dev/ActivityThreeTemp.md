### 8. Instructor Demo: Primitive Values (5 mins) 

* Open `05-Ins_Primitive-Types/script.js` in your IDE and point out the following:

  *  In the previous activity, we learned to store values in variables. In this activity, we will take a deeper dive into types of values that are stored in variables, namely the primitive types undefined, string, numbers and booleans 

  * A variable that has been declared using `var` but has not yet been assigned a value has the type of undefined.

  ```
      var myUndefined;

  ```

  *  Strings should already look familar! Values with the type string are a series of characters and is surrounded by quotes

  ```

    var myStringWelcome = "Hello World"; 
    var myStringPassword = "865Password!2020";

  ```

  * In Javascript, a number can be either an integer (whole number) or a decimal. 

  ```

    var myNumberInt = 100;
    var myNumberDecimal = 100.100;

  ```

  *  Booleans are unique because they hold only two values: true or false

  ```
    var isMyBooleanTrue = true;
    var isMyBooleanFalse = false;

  ```

  *  Sometimes, developers want to check what type of value is stored in a variable. To evaluate type, use the `typeof` operator

  ```
    // Logs undefined
    console.log(typeof myUndefined);

    // Logs number
    console.log(typeof myNumber); 

    // Logs boolean
    console.log(typeof true);

    // Logs string
    console.log(typeof "Howdy");

  ```

* Like value, type can also change when a variable is re-assigned. In this example, the variable `myVariable` has a value of `33` and a type of `number`. On re-assignment, `myVariable` has a value of `false` and a type of Boolean. 

```
  // Logs number
  var myVariable = 33;
  console.log(typeof myVariable);

  // myVariable is reassigned; Logs false
  myVariable = false;
  console.log(typeof myVariable); 

```

* Open `05-Ins_Primitive-Types/index.html` in your browser and navigate to the console. Point out the following:

* The `typeof` operator returns a string indicating the type, including `undefined`, `number`, `boolean`, and `string`.

* When a variable is re-assigned, the type can change as well. In our code, `myVariable` was first assigned with a number with a value of `33`. As a result, we can see it logged `number`. Then, when `myVariable` was re-assigned as a boolean with a value of `false`, `boolean` is logged, indicating the type has changed. 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

    * ☝️ What primitive type has only two values? 

    * 🙋 A boolean has only two values: true or false. 

    * ☝️ What is the only primitive type that must be surrounded by quotes?

    * 🙋 Strings

    * ☝️ What primitive type would we use if we wanted to store a decimal or an integer?

    * 🙋 Numbers

     * ☝️ If we reassign a variable a new value, does the type have to stay the same?

    * 🙋 No! JavaScript is loosely typed. This means that when you declare a variable you don't have to specify a type that the variable will hold. It also means that when a variable is re-assigned the type can change too.  

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `06-Stu_Primitive-Types/README.md`.

### 9. Student Do: Primitive Types (15 mins) 

* Direct students to the activity instructions found in `06-Stu_Primitive-Types/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  @TODO ADD INSTRUCTIONS TABBED
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help while circulating through room.

### 10. BREAK (15 mins)

### 11. Instructor Review: Primitive Values (10 mins) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with Primitive Types? (Poll via Fist of Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

  * ✔️ Strings

  * ✔️ Numbers

  * ✔️ Booleans

  * ✔️ Undefined

  * ✔️ Typeof operator

  * ✔️ Type re-assignment


* Open `06-Stu_Primitive-Types/README.md` in your IDE and explain the following: 

  * The variable `one` has the whole number value of `64` and the type of `number.` 
 

    ```
    var one = 64;

    ```

    ```

    // Logs number
    console.log(typeof one);

    ```

  * The variable `two` has the value of `"656302"`. Since the value is surrounded by quotes, it is a string even if the characters inside the strings are numbers! 
 

    ```
   var two = "656302";

   ...

   // Logs string
   console.log(typeof two); 

    ```

  * The variable `three` has a value of `false`. True and false values are booleans.
 

    ```
   var three = false;

    ```

  * The variable `four` has a decimal value of 64.55. Since both integers and decimals are considered numbers in JavaScript, the type is `number`.
 

    ```
   var three = false;

    ```

  * The variable `five` has a value of `"Howdy"`. It is a string. 

    ```
   var five = "Howdy!";

    ```

  * The variable `six` is declared but has not yet been assigned a value. So the type returns `undefined`. 

    ```
   var six;

    ```

  * To test the type of a variable, use the `typeof` operator.

  ```



  ```


* Ask the class the following questions (☝️) and call on students for the answers (🙋):

     * ☝️ What are four primitive types of values? 

    * 🙋 Undefined, strings, booleans and numbers

    * ☝️ How can you test the type of a value? 

    * 🙋 Use `typeof` operator

    * ☝️ What can we do if we don't completely understand this?

    * 🙋 We can refer to supplemental material, read the [MDN Web Docs: JavaScript Data Types and Data Structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures), and stick around for Office Hours t

* Answer any questions before proceeding to the next activity.

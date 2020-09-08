### 15. Instructor Demo: Conditional Statements (5 mins) 

* Open `09-Ins_Conditional-Statements/script.js` in your IDE and make comments on the code to point out the following:

  * 🔑 Conditional statements use comparison and logical operators to test values. Conditional statements evaluate to true or false.

  * 🔑 With an if-statement, if the statement evaluates to true, then the action after the curly brackets is performed.

  * 🔑 With an if/else statement, if the statement evaluates to true, the action after the curly brackets is performed. Else, the second action is performed.
   
   * 🔑 If there are more than one statement to be evaluated, `else if` is used.

* Run `09-Ins_Conditional-Statements/index.html` in the browser and navigate to the console to show the students the console logs.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

    * ☝️ What happens if an if-statement evaluates to false?

    * 🙋 Nothing. The action after the curly bracket is not performed.
    
    * ☝️ What happens if `else` is added to the same if-statment that evaluates to false, making it an `if-else` statement? 

    * 🙋 The second action following the `else` is performed.

* Answer any questions before proceeding to the next activity.

### 16. Student Do: Conditional Statements (15 mins) 

* Direct students to the activity instructions found in `10-Stu_Conditional-Statements/README.md`. 

* Break your students into pairs that will work together on this activity.

```md

# Conditional Statements

In this activity, you will work with a partner to create an algorithm using conditional statements. 

## Instructions

* Be sure to work with your partner!

* Open [10-Stu_Conditional-Statements/Unsolved/script.js]() to examine the code and implement the following features:

  * As a developer, I want to write an algorithm that will take in two expressions and evaluate if both expressions evaluate to true, only one expression evaluates to true, or both expressions evaluate to false. 

  * If expression1 is true and expression2 is true, then log to the console: "True ✅ True ✅"

  * Else if only expression1 is true, then log to the console: "True ✅ False ❌"

  * Else if only expression2 is true, then log to the console: "False ❌ True ✅"

  * Else, log to the console: "False ❌ False ❌"

## 💡 Hint

Don't code without a plan! Before writing your algorithm in JavaScript, take a few minutes to talk with your partner and write out in everyday language what you need to do to make each line of code work. Then, using that plan, translate that pseudocode into your JavaScript algorithm. 

## 🏆 Bonus

* If you have fully completed the above tasks, here is something you and your partner can work through as an added challenge to further your knowledge:

  What’s a switch case? 

* Use [Google](https://www.google.com) or another search engine to research the above.

```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help while circulating through room.

### 17. Instructor Review: Conditional Statements (15 mins)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with conditional statements? (Poll via Fist of Five, Slack, or Zoom)

* Assure students that we will cover the solution as to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

    * ✔️ Conditional statements are a great way to add decision-making into your code. 

    * ✔️ If-statements only execute if the condition is true.

    * ✔️ In an if/else statement, if the condition is true, the first block of code is executed. Else, the second block of code is executed.

* Open `10-Stu_Conditional-Statements/Unsolved/index.html` in your IDE and explain the following: 

    * If/else statements are tested in order. If the first conditional statement evaluates to true then the first block of code is executed. Only if the first conditional statement evaluates to false is the second conditional statement tested. The process repeats until a conditional statement evaluates to true and its associated block of code is evaluated. If none of the statements evaluate to true, then the block of code following `else` is executed.

    ```
      if(expression1 && expression2) {
      console.log("True ✅ True ✅");

      // If both conditions are not true, check if expression1 is true
      } else if (expression1) {
      console.log("True ✅ False ❌");

      // If expression1 is not true, then check if expression2 is true
      } else if (expression2) {
      console.log("False ❌ True ✅");

      // If none of the conditions above evaluate to true, both expressions must be false
      } else {
      console.log("False ❌ False ❌");
      }

    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

    * ☝️ What is the difference between an if-statement and an if/else statement? 

    * 🙋 An if-statement only evaluates if the condition is true. An if/else statement provides a choice. If the statement is true, one block of code executes, else another block of code executes. 

    * ☝️ What can we do if we don't completely understand this?

    * 🙋 We can refer to supplemental material, read the [MDN Web  Docs: If...Else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else), and stick around for Office Hours to ask for help.

### 18. END (0 min)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete [this anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

---
© 2020 Trilogy Education Services, LLC, a 2U, Inc. brand.  Confidential and Proprietary.  All Rights Reserved.

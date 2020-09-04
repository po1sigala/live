# 03.1 Part-Time Lesson Plan: Introduction to JavaScript

## Overview

This class introduces the fundamentals of JavaScript including variables, primitive types, comparison operators, and conditional statements. Students will also gain experience writing console logs and using the developer console in Google Chrome.

## Instructor Notes

* Complete activities `01-Ins_Script-ConsoleLog` through `10-Stu_Conditional-Statements`.

* Take a few minutes before class to get familiar with the activities of the day and anticipate questions a student new to JavaScript may ask.

* There is a lot of information in today's lesson that may be new for many students. If you find that the students are feeling overwhelmed, take a moment to point out that these are the building blocks of JavaScript and each activity builds on one another. They can look back at previous activities for guidance or reach out during office hours for help.

* At the beginning of today's class, the students will learn how to link an external JavaScript file and use the developer console in Google Chrome. Please make sure to remind yourself of the various ways to open up [Chrome Developer Tools](https://developers.google.com/web/tools/chrome-devtools/open) on both Mac and Windows so you can help students navigate the process on their own computers. 

* Remind students to do a `git pull` of the class repo to have today's activities ready and open in VS Code.

* If you are comfortable doing so, live code the solutions to the activities. If not, no worries. Use the solutions provided and follow the prompts and talking points for review.

* Let students know that the Bonus for each activity is meant to give them "food for thought". Rather than extra coding practice, it is a self-study on related topics that are beyond the scope of this unit for those who want to dig deeper and further their knowledge on this topic.

## Learning Objectives

By the end of class, students will be able to:

* Identify and declare variables containing primitive data types 

* Explain and implement comparison and logical operators 

* Write conditional statements using if/else

## Time Tracker

| Start  | #   | Activity Name                              | Duration |
|---     |---  |---                                         |---       |
| 6:30PM | 1   | Instructor Do: Stoke Curiosity             | 0:10     |
| 6:40PM | 2   | Instructor Demo: Script & Console.Log      | 0:05     |
| 6:45PM | 3   | Student Do: Script & Console.Log           | 0:15     |
| 7:00PM | 4   | Instructor Review: Script & Console.Log    | 0:10     |
| 7:10PM | 5   | Instructor Demo: Hello Variable            | 0:05     |
| 7:15PM | 6   | Student Do: Hello Variable                 | 0:15     |
| 7:30PM | 7   | Instructor Review: Hello Variable          | 0:10     |
| 7:40PM | 8   | Instructor Demo: Primitive Type            | 0:05     |
| 7:45PM | 9   | Student Do: Primitive Type                 | 0:15     |
| 8:00PM | 10  | BREAK                                      | 0:15     |
| 8:15PM | 11  | Instructor Review: Primitive Type          | 0:10     |
| 8:25PM | 12  | Instructor Demo: Operators                 | 0:05     |
| 8:30PM | 13  | Student Do: Operators                      | 0:15     |
| 8:45PM | 14  | Instructor Review: Operators               | 0:10     |
| 8:55PM | 15  | Instructor Demo: Conditional Statements    | 0:05     |
| 9:00PM | 16  | Student Do: Conditional Statements         | 0:15     |
| 9:15PM | 17  | Instructor Review: Conditional Statements  | 0:15     |
| 9:30PM | 18  | END                                        | 0:00     |

---

## Class Instruction

### 1. Instructor Do: Stoke Curiosity (10 mins)

* Welcome students to class.

* Inform the students that during today's class, they will take the first steps to build interactive websites with JavaScript. 

* Stress that JavaScript builds on skills they have already learned. HTML provides the structure for the webpage. CSS enhances HTML by providing styling, formatting and improving presentation. JavaScript is what makes webpages dynamic.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is JavaScript?

  * 🙋 JavaScript is a scripting language that allows us to make web pages interactive.

  * ☝️ What are some things that you can do with JavaScript?

  * 🙋 With JavaScript, you can store useful data and user inputs, manipulate HTML and CSS, play video and audio and much, much more.

* Tell the students that using the skills learned in class today, they will have the tools to implement one of JavaScript's key uses: decision-making using conditional statements. 

* Open `10-Stu_Conditional-Statements/Solved/script.js` in your IDE.

   *  Assure students that it is okay if the code does not look familiar just yet. This is a just a preview of the decision-making code they will be able to implement at the end of class. 

   * Point out that the code is made up of a series of conditions that decide which message will log to the console. For example, in the code below, if this condition is met, `True ✅ True ✅` will log. 

   ```
        if(expression1 && expression2) {
        console.log("True ✅ True ✅");

   ```

   * If not, the other conditions are tested. If none of the conditions are met, then `False ❌ False ❌` is logged.

   ```
        } else {
          console.log("False ❌ False ❌");
        }

    ```

* Open `10-Stu_Conditional-Statements/Solved/index.html` and navigate to the console to show them that a single message `False ❌ False ❌` appears indicating none of the conditions are met.  


* Assure the students that during class we will delve into this JavaScript code in more detail.

### 2. Instructor Demo: Script and Console.Log (5 mins)


* Open `01-Ins_Script-ConsoleLog\index.html` in your IDE and note the following: 

  *  In this HTML file, HTML and CSS are working together to provide style and structure to the page.

  ```
        <h1 style="text-align:center;">Open the Console to See the Magic ✨! </h1>

  ```
    
  * There is also something new: `<script>` tags for JavaScript

    * Inline `<script>` tags allow you to write scripts directly in an HTML file.

  ```
        <script>

        //Console logs write data directly to the console.

        console.log("This is the log for the 🔥INLINE🔥 JavasSript");
    
        </script>
   
  ```
    * Adding an src attribute to the opening `<script>` tag allows you to link to an external JavaScript file

  ```
        <script src="script.js"></script>

  ```

    * You should write your `<script>` tags above the closing `</body>` tag to make sure your HTML and CSS load first.

  ```

        <body>
            <h1 style="text-align:center;">Open the Console to See the Magic ✨! </h1>

            <!--Inline script-->

            <script>

                //Console logs write data directly to the console.

                console.log("This is the log for the 🔥INLINE🔥 JavasSript");
    
            </script>

            <!--Link to external Javascript file-->

            <script src="script.js"></script>

        </body>
      
  ```

  * 🔑 Console logs are JavaScript functions that log messages to the console.


```
        console.log("This is the log for the 🔥INLINE🔥 JavasSript");

```

* Open `01-Ins_Script-ConsoleLog\script.js` in your IDE and note the following: 

  * 🔑 JavaScript looks and performs the same whether it is written inline or in an external file. 

  ```
        console.log("This is the log for the 🔥EXTERNAL🔥JavaScript");

  ```

* Open `01-Ins_Script-ConsoleLog\index.html` in the browser and demo how to navigate to the console in Chrome Developer Tools. 

* Point out that both the console log from the inline JavaScript and external file appear as messages in the console.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do you link an HTML file to an external JavaScript file?
  
  *  🙋 Use `<script>` tags and set the src attribute to the path of the external JavaScript file.
  
  * ☝️ What does the console log function do?
 
  *  🙋 It logs a message to the console. 

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `02-Stu_Script-ConsoleLog\README.md`.

### 3. Student Do: Script and Console.Log (15 mins)

* Direct students to the activity instructions found in `02-Stu_Script-ConsoleLog\README.md`.

* Break your students into pairs that will work together on this activity.
 
```md

# Adding JavaSript to HTML

In this activity, you will work with a partner to use MDN Script Element documentation to link an external JavaScript file to an HTML file. 

## Instructions 

* Be sure to work with your partner!

* Navigate to the [MDN Web Docs: The Script Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) in your browser.

* Open [index.html](02-Stu_Script_ConsoleLog/Unsolved/index.html) in your IDE and examine the code.

* Locate [script.js](02-Stu_Script_ConsoleLog/Unsolved/script.js). This is the external JavaScript file you will link to the HTML.

* Using the documentation, implement the following:

* We are given an HTML file that is not yet linked to an external JavaScript file. We are also given a JavaScript file containing a pre-written console log to be linked.

* When we open the HTML file in the browser and go to the console, the message contained in the console log in the JavaScript file should appear.

## 💡 Hint

Use `Cmd + Option + J` on a Mac or `Cmd +Shift +J` on Windows to open up the Developer's Console on Chrome. Alternatively, right-click on the page and select `Inspect`.

## 🏆 Bonus

* If you have fully completed the above tasks, here is something you and your partner can work through as an added challenge to further your knowledge:

* Comments are a key part of a developer's toolbox. Why do you think it is so important to include comments in your code? How do you write single-line and multi-line comments in JavaScript?

* Use [Google](https://www.google.com) or another search engine to research the above.

```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help while circulating through the room.

### 4. Instructor Review: Script and Console.Log (10 mins)

* Ask the class the following question (☝️) and call on students for the answers (🙋):

* ☝️ How comfortable do you feel with linking an external JavaScript file to your HTML? (Poll via Fist of Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

  * ✔️ `<script>` tags 

  * ✔️ `console.log()` 

* Open`01-Ins_Script-ConsoleLog\Solved\index.html` in your IDE and explain the following:

  * Inline `<script>` tags add JavaScript directly in the HTML file


```

    <script>
  
    console.log("This is inline JavaScript");

    </script>

```

  * Adding an src attribute to `<script>` tags, links to an external JavaScript file

  ```
     <script src="script.js"></script>

  ```

  * A console log is a JavaScript function. The message to the console is written between `()`. 

  ```

     console.log("This is inline JavaScript");

  ```

* Open`01-Ins_Script-ConsoleLog\Solved\index.html` in your browser and navigate to the console. Show the students that the message written in between the `()`is that same as what appears in the console.
  
* Ask the class the following questions (☝️) and call on students for the answers (🙋):

* ☝️ What are two ways the `<script>` tag is used to add JavaScript to HTML files?

* 🙋 The `<script>` tag can be used to create inline JavaScript by writing code in between the opening and closing tags. The`<script>`tag when given an src attribute that equals the path to an external JavaScript file, links the HTML file to the external JavaScript page.


* ☝️ What can we do if we don't completely understand this?

* 🙋 We can refer to supplemental material, read the [MDN Web Docs: The Script Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script), and stick around for Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

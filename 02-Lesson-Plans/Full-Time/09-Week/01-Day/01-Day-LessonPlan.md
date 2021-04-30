# 09.1 Full-Time Lesson Plan: How Does JavaScript Execute? 

## Overview 

In this class, students will be re-introduced to JavaScript within the context of some general computer-science concepts. They will learn about how JavaScript executes an application, including global and functional execution context, in order to understand how the various components work together to run a program. Along the way, they'll review various data structures, including stacks, queues, and callback queues. Students will also use the browser to understand the role of Web APIs and asynchronous behavior. Next, they'll learn about higher-order functions and how to implement them. Finally, they'll explore closures, including how to leverage them using factory functions. 

## Instructor Notes

* In this lesson, students will complete activities `01-Ins_Global-Execution-Context` through `14-Stu_Closures`.

* Be sure to review the activities before class and try to anticipate any questions that students might have.

* The first activity, `01-Ins_Global-Execution-Context`, steps through the process of how JavaScript executes in the browser. This allows students to "peek behind the curtain" to observe which JavaScript components execute the different parts of a program.

* Students might get stuck on the difference between scope and context. **Scope** refers to the accessibility of variables, whereas **context** refers to the object to which the function belongs. For more information, refer to this [blog post on Scope vs. Context](https://blog.kevinchisholm.com/javascript/difference-between-scope-and-context/).

* You will use Jest to test some of the activities. Before class, be sure to familiarize yourself with the unit tests and their descriptions.

* Activities `04-Stu_Functional-Execution-Context` through `08-Stu_Queues` have test suites. Most of the instructions on how to pass the tests are described in each unit test. Please do not modify the tests. These are Node.js activities, so you will need to run `npm install` before running the tests. A `jest --watch` script is used to simplify re-running tests.

* The last activity of the class, `10-Stu_Callback-Queues`, uses a `while` loop to create a blocking process that makes the page unresponsive and slow to load. Students may need to refresh their browsers or select the Block button to demonstrate the blocking effect. The activity's objective is to **delay** the blocking process in order to allow the page to render quickly, thus improving the UX and webpage performance.

* Closures are a large part of the day's activities. If you are feeling a little unsure about them, take some time to become more familiar with them before class.

* In `13-Ins_Closures`, we use `console.dir`. Encourage students to learn about it on their own time, as we will only be using it for demonstration purposes.

* Remind students to do a `git pull` of the class repo and to have today's activities ready and open in VS Code.

* If you are comfortable doing so, live-code the solutions to the activities. If not, just use the solutions provided and follow the prompts and talking points for review.

* Let students know that the Bonus at the end of each activity is not meant to be extra coding practice, but instead is a self-study on topics beyond the scope of this unit for those who want to further their knowledge.

## Learning Objectives

* Explain the differences between a global execution context and a function execution context.

* Identify when a function execution context is created and what is stored in it.

* Describe the functions of the call stack and the callback queue.

* Compare and contrast a stack vs. a queue in terms of LIFO and FIFO.

* Summarize asynchronous behavior and the role of the event loop.

* Construct their own higher-order functions.

## Slide Deck

* [Unit 17 Slide Deck](https://docs.google.com/presentation/d/1oK8WB9pt8GfraNTsWbPNWMFpBYzXe_URem6Ch3oq9eo/edit?usp=sharing)

## Time Tracker

| Start  | #   | Activity Name                      | Duration |
|---     |---  |---                                 |---       |
| 10:00AM| 1   | Instructor Do: Stoke Curiosity     | 0:10     |
| 10:10AM| 2   | Instructor Demo: Global Execution Context                   | 0:05     |
| 10:15AM| 3   | Student Do: Global Execution Context                       | 0:15     |
| 10:30AM| 4   | Instructor Review: Global Execution Context                | 0:10     |
| 10:40AM| 5   | Instructor Demo:                   | 0:05     |
| 10:45AM| 6   | Student Do:                        | 0:15     |
| 11:00AM| 7   | Instructor Review:                 | 0:10     |
| 11:10AM| 8   | Instructor Demo:                   | 0:05     |
| 11:15AM| 9   | Student Do:                        | 0:15     |
| 11:30AM| 10  | Instructor Review:                 | 0:10     |
| 11:40AM| 11  | Instructor Demo:                   | 0:05     |
| 11:45AM| 12  | Student Do:                        | 0:15     |
| 12:00PM| 13  | BREAK                              | 0:30     |
| 12:30PM| 14  | Instructor Review:                 | 0:10     |
| 12:40PM| 15  | Instructor Demo:                   | 0:05     |
| 12:45AM| 16  | Student Do:                        | 0:15     |
| 1:00PM | 17  | Instructor Review:                 | 0:15     |
| 1:15PM| 18  | Instructor Do: Stoke Curiosity      | 0:10     |
| 1:25PM| 19  | Instructor Demo: Higher-Order Functions                    | 0:05     |
| 1:30PM| 20  | Student Do: Higher-Order Functions                         | 0:15     |
| 1:45PM| 21  | Instructor Review:Higher-Order Functions                   | 0:10     |
| 1:55PM| 22  | Instructor Demo:                    | 0:05     |
| 2:00PM| 23  | Student Do:                         | 0:15     |
| 2:15PM| 24  | Instructor Review:                  | 0:15     |
| 2:30PM| 25  | END                                 | 0:00     |

---

## Class Instruction

### 1. Instructor Do: Stoke Curiosity (10 min)

* Welcome students to class.

* Open the [slide deck]() and follow these prompts on their corresponding slides:

  * **@TODO TITLE OF SLIDE**: @TODO ADD TALKING POINTS

  * **@TODO TITLE OF SLIDE**: @TODO ELABORATE ON SLIDE CONTENT
  
  * **@TODO TITLE OF SLIDE**: @TODO TRANSITION INTO MINI-PROJECT DEMO

* Navigate to `@TODO/folder/file` in your command line and demonstrate the following:

  * @TODO { WHAT ARE WE GOING TO BE BUILD? }

  * @TODO { ISN'T THIS NEAT! A SOPHISTICATED OR MODERN APPLICATION OF A KEY TOPIC. }

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are we learning?

  * 🙋 @TODO { YES, WHAT? }.

  * ☝️ How does this project build off or extend previously learned material?

  * 🙋 @TODO {YES, WHAT? }.

  * ☝️ How does this project relate to your career goals?

  * 🙋 @TODO { HOW DO COMPANIES USE IT IN INTERESTING WAYS? HOW POPULAR OR IN-DEMAND IS IT? WHY IS THE PROJECT ENTICING TO EMPLOYERS? }

* Answer any questions before proceeding to the next activity.

### 2. Instructor Demo: Global Execution Context (5 min) 

* Open `01-Ins_Global-Execution-Context/index.html` in your browser and demonstrate the following:

  * 🔑 When the program runs, the `main()` function is placed onto the call stack and a global execution context is created.
  
  * The `main()` function is a reference to the program that is running. `main()` is removed off the call stack when the program has concluded its execution.

  * 🔑 Follow the comment prompts, following the thread of execution in sequence, describing how each statement is processed.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is a Web API?

  * 🙋 A library of methods and properties located on the `window` object, which is associated with the browser.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `02-Stu_Global-Execution-Context/README.md`.

### 3. Student Do: { ACTIVITY NAME } (15 min) 

* Direct students to the activity instructions found in `@TODO/folder/file`.

* Break your students into pairs that will work together on this activity.

  ```md
  @TODO ADD ACTIVITY INSTRUCTIONS, TABBED ONCE OR TWICE (DEPENDING ON CODE SNIPPETS IN ACTIVITY INSTRUCTIONS)
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 4. Instructor Review: { ACTIVITY NAME } (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with @TODO { TOPIC }? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ @TODO { THIS }

  * ✔️ @TODO { THAT }

  * ✔️ @TODO { THE OTHER }

* Open `@TODO/folder/file` in your IDE and explain the following: 

  * @TODO { WE DO THIS AND THE RESULT IS THAT }

    ```
    @TODO ADD CODE SNIPPET, TABBED TWICE (4 SPACES)
    ```

  * 🔑 @TODO DON'T FORGET TO USE THE KEY EMOJI ON KEY POINTS, BUT ONLY KEY POINTS, NOT _EVERY_ POINT

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ @TODO { DO WE END OUR REVIEWS WITH A QUESTION? }

  * 🙋 @TODO { YES, WE DO! }

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 @TODO We can refer to supplemental material, read the [{ DOCS }]({ URL }), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 5. Instructor Demo: { ACTIVITY NAME } (5 min) 

@TODO USE THE FOLLOWING FOR BROWSER AND/OR COMMAND LINE DEMOS, RESPECTIVELY. REMOVE IF UNUSED

* Open `@TODO/folder/file` in your browser and demonstrate the following:

* Run `@TODO/folder/file { AND ARGS, IF ANY }` from the command line and demonstrate the following: 

  * 🔑 @TODO { WHEN WE DO THIS, IT DOES THAT. }

  * 🔑 @TODO { WE ALSO SEE THESE THINGS. }

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 @TODO { YES, HOW? } 

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `@TODO/folder/file`.

### 6. Student Do: { ACTIVITY NAME } (15 min) 

* Direct students to the activity instructions found in `@TODO/folder/file`.

* Break your students into pairs that will work together on this activity.

  ```md
  @TODO ADD ACTIVITY INSTRUCTIONS, TABBED ONCE OR TWICE (DEPENDING ON CODE SNIPPETS IN ACTIVITY INSTRUCTIONS)
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 7. Instructor Review: { ACTIVITY NAME } (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with @TODO { TOPIC }? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ @TODO { THIS }

  * ✔️ @TODO { THAT }

  * ✔️ @TODO { THE OTHER }

* Open `@TODO/folder/file` in your IDE and explain the following: 

  * @TODO { WE DO THIS AND THE RESULT IS THAT }

    ```
    @TODO ADD CODE SNIPPET, TABBED TWICE (4 SPACES)
    ```

  * 🔑 @TODO DON'T FORGET TO USE THE KEY EMOJI ON KEY POINTS, BUT ONLY KEY POINTS, NOT _EVERY_ POINT

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ @TODO { DO WE END OUR REVIEWS WITH A QUESTION? }

  * 🙋 @TODO { YES, WE DO! }

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 @TODO We can refer to supplemental material, read the [{ DOCS }]({ URL }), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 8. Instructor Demo: { ACTIVITY NAME } (5 min) 

@TODO USE THE FOLLOWING FOR BROWSER AND/OR COMMAND LINE DEMOS, RESPECTIVELY. REMOVE IF UNUSED

* Open `@TODO/folder/file` in your browser and demonstrate the following:

* Run `@TODO/folder/file { AND ARGS, IF ANY }` from the command line and demonstrate the following: 

  * 🔑 @TODO { WHEN WE DO THIS, IT DOES THAT. }

  * 🔑 @TODO { WE ALSO SEE THESE THINGS. }

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 @TODO { YES, HOW? } 

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `@TODO/folder/file`.

### 9. Student Do: { ACTIVITY NAME } (15 min) 

* Direct students to the activity instructions found in `@TODO/folder/file`.

* Break your students into pairs that will work together on this activity.

  ```md
  @TODO ADD ACTIVITY INSTRUCTIONS, TABBED ONCE OR TWICE (DEPENDING ON CODE SNIPPETS IN ACTIVITY INSTRUCTIONS)
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 10. Instructor Review: { ACTIVITY NAME } (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with @TODO { TOPIC }? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ @TODO { THIS }

  * ✔️ @TODO { THAT }

  * ✔️ @TODO { THE OTHER }

* Open `@TODO/folder/file` in your IDE and explain the following: 

  * @TODO { WE DO THIS AND THE RESULT IS THAT }

    ```
    @TODO ADD CODE SNIPPET, TABBED TWICE (4 SPACES)
    ```

  * 🔑 @TODO DON'T FORGET TO USE THE KEY EMOJI ON KEY POINTS, BUT ONLY KEY POINTS, NOT _EVERY_ POINT

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ @TODO { DO WE END OUR REVIEWS WITH A QUESTION? }

  * 🙋 @TODO { YES, WE DO! }

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 @TODO We can refer to supplemental material, read the [{ DOCS }]({ URL }), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 11. Instructor Demo: { ACTIVITY NAME } (5 min) 

@TODO USE THE FOLLOWING FOR BROWSER AND/OR COMMAND LINE DEMOS, RESPECTIVELY. REMOVE IF UNUSED

* Open `@TODO/folder/file` in your browser and demonstrate the following:

* Run `@TODO/folder/file { AND ARGS, IF ANY }` from the command line and demonstrate the following: 

  * 🔑 @TODO { WHEN WE DO THIS, IT DOES THAT. }

  * 🔑 @TODO { WE ALSO SEE THESE THINGS. }

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 @TODO { YES, HOW? } 

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `@TODO/folder/file`.

### 12. Student Do: { ACTIVITY NAME } (15 min) 

* Direct students to the activity instructions found in `@TODO/folder/file`.

* Break your students into pairs that will work together on this activity.

  ```md
  @TODO ADD ACTIVITY INSTRUCTIONS, TABBED ONCE OR TWICE (DEPENDING ON CODE SNIPPETS IN ACTIVITY INSTRUCTIONS)
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 13. BREAK (30 min)

### 14. Instructor Review: { ACTIVITY NAME } (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with @TODO { TOPIC }? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ @TODO { THIS }

  * ✔️ @TODO { THAT }

  * ✔️ @TODO { THE OTHER }

* Open `@TODO/folder/file` in your IDE and explain the following: 

  * @TODO { WE DO THIS AND THE RESULT IS THAT }

    ```
    @TODO ADD CODE SNIPPET, TABBED TWICE (4 SPACES)
    ```

  * 🔑 @TODO DON'T FORGET TO USE THE KEY EMOJI ON KEY POINTS, BUT ONLY KEY POINTS, NOT _EVERY_ POINT

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ @TODO { DO WE END OUR REVIEWS WITH A QUESTION? }

  * 🙋 @TODO { YES, WE DO! }

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 @TODO We can refer to supplemental material, read the [{ DOCS }]({ URL }), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 15. Instructor Demo: { ACTIVITY NAME } (5 min) 

@TODO USE THE FOLLOWING FOR BROWSER AND/OR COMMAND LINE DEMOS, RESPECTIVELY. REMOVE IF UNUSED

* Open `@TODO/folder/file` in your browser and demonstrate the following:

* Run `@TODO/folder/file { AND ARGS, IF ANY }` from the command line and demonstrate the following: 

  * 🔑 @TODO { WHEN WE DO THIS, IT DOES THAT. }

  * 🔑 @TODO { WE ALSO SEE THESE THINGS. }

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 @TODO { YES, HOW? } 

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `@TODO/folder/file`.

### 16. Student Do: { ACTIVITY NAME } (15 min) 

* Direct students to the activity instructions found in `@TODO/folder/file`.

* Break your students into pairs that will work together on this activity.

  ```md
  @TODO ADD ACTIVITY INSTRUCTIONS, TABBED ONCE OR TWICE (DEPENDING ON CODE SNIPPETS IN ACTIVITY INSTRUCTIONS)
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 17. Instructor Review: { ACTIVITY NAME } (15 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with @TODO { TOPIC }? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ @TODO { THIS }

  * ✔️ @TODO { THAT }

  * ✔️ @TODO { THE OTHER }

* Open `@TODO/folder/file` in your IDE and explain the following: 

  * @TODO { WE DO THIS AND THE RESULT IS THAT }

    ```
    @TODO ADD CODE SNIPPET, TABBED TWICE (4 SPACES)
    ```

  * 🔑 @TODO DON'T FORGET TO USE THE KEY EMOJI ON KEY POINTS, BUT ONLY KEY POINTS, NOT _EVERY_ POINT

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ @TODO { DO WE END OUR REVIEWS WITH A QUESTION? }

  * 🙋 @TODO { YES, WE DO! }

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 @TODO We can refer to supplemental material, read the [{ DOCS }]({ URL }), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

                                **ODD.2 LESSON PLAN BEGINS**

### 18. Instructor Do: Stoke Curiosity (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝ What is a paradigm in programming?
  
  * 🙋 A paradigm a style or philosophy that a programming language follows.

  * ☝️ What is object-oriented programming (OOP)?

  * 🙋 OOP is a programming paradigm that JavaScript uses. In OOP, we model the data around objects.

  * ☝️ What other paradigms does JavaScript use?

  * 🙋 Functional and procedural.

* Explain that we will be learning about the technical portion of the interview process, with a focus on the functional paradigm of JavaScript.

  * ☝️ In JavaScript, how else can we create objects?

  * 🙋 With classes and constructor functions.

  * ☝️ What are some problems that may occur when using class inheritance?

  * 🙋 The larger the app becomes, the more difficult it can be to restructure the class hierarchy.
  
* Explain to students that we will be learning an entirely new way to build objects by using factory functions.

* Let students know ahead of time that these topics can get abstract and encourage them to ask questions.

* JavaScript has many layers, and interviewers want to know how well a candidate understands them. 

* In JavaScript, we have a design choice to make early on that will dictate if we use inheritance or composition.

* JavaScript uses three different paradigms and it is important as developers that we understand each one and how to leverage them to our benefit.

* Let students know that this knowledge comes with time and practice, and to not fall into that sinking feeling of imposter syndrome.They have been using these concepts all along and now we are just expanding on that knowledge.

### 19. Instructor Demo: Higher Order Functions (5 min) 

* Open `11-Ins_Higher-Order-Functions/index.js` in your IDE and explain the following:

  * We first create a function that we will be using to pass into the JavaScript provided higher-order function, `.map()`.

  * We have access to the element and the index of the element which is provided to us through the `.map()` method.

    ```js
    function evenIndexMultiplier(number, index) {
      // Code...
    }
    ```
  
  * Next, we create the logic for the function that will be passed into the higher-order function, the `.map()` method.

    ```js
    function evenIndexMultiplier(number, index) {
    
      if (index % 2 === 0) {
    
        return number * 10;

      }

      return number;
    }
    ```

  * 🔑 Finally, we pass the newly created function into the `.map()` method and storing it into a variable named `evenIndexes`.
  
  * 🔑 Now we have a function which accepts another function as an argument, creating a higher-order function.

  * 🔑 We are not limited to only using `evenIndexMultiplier` inside the `.map()` method. We can use `evenIndexMultiplier` anywhere in the application or even in a custom higher-order function.

    ```js
    const evenIndexes = arrayIndex.map(evenIndexMultiplier);

    ```

* Run `node index.js` from the command line and demonstrate the following: 

  * As we can see every even index is being multiplied by ten which is exactly what the function was meant to do.

  ```
  [10, 52, 350, 6, 720, 7, 30, 19, 320, 54, 780, 95, 970]
  ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can we use higher-order functions to our benefit?

  * 🙋 It makes our code more reusable.

  * ☝️ Are we limited to using a higher-order function provided by JavaScript?

  * 🙋 No, we can create our own. The function just needs to be able to accept another function for an argument.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `12-Stu_Higher-Order-Functions/README.md`.

### 20. Student Do: { ACTIVITY NAME } (15 min) 

* Direct students to the activity instructions found in `@TODO/folder/file`.

* Break your students into pairs that will work together on this activity.

  ```md
  @TODO ADD ACTIVITY INSTRUCTIONS, TABBED ONCE OR TWICE (DEPENDING ON CODE SNIPPETS IN ACTIVITY INSTRUCTIONS)
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 21. Instructor Review: { ACTIVITY NAME } (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with @TODO { TOPIC }? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ @TODO { THIS }

  * ✔️ @TODO { THAT }

  * ✔️ @TODO { THE OTHER }

* Open `@TODO/folder/file` in your IDE and explain the following: 

  * @TODO { WE DO THIS AND THE RESULT IS THAT }

    ```
    @TODO ADD CODE SNIPPET, TABBED TWICE (4 SPACES)
    ```

  * 🔑 @TODO DON'T FORGET TO USE THE KEY EMOJI ON KEY POINTS, BUT ONLY KEY POINTS, NOT _EVERY_ POINT

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ @TODO { DO WE END OUR REVIEWS WITH A QUESTION? }

  * 🙋 @TODO { YES, WE DO! }

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 @TODO We can refer to supplemental material, read the [{ DOCS }]({ URL }), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 22. Instructor Demo: { ACTIVITY NAME } (5 min) 

@TODO USE THE FOLLOWING FOR BROWSER AND/OR COMMAND LINE DEMOS, RESPECTIVELY. REMOVE IF UNUSED

* Open `@TODO/folder/file` in your browser and demonstrate the following:

* Run `@TODO/folder/file { AND ARGS, IF ANY }` from the command line and demonstrate the following: 

  * 🔑 @TODO { WHEN WE DO THIS, IT DOES THAT. }

  * 🔑 @TODO { WE ALSO SEE THESE THINGS. }

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 @TODO { YES, HOW? } 

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `@TODO/folder/file`.

### 23. Student Do: { ACTIVITY NAME } (15 min) 

* Direct students to the activity instructions found in `@TODO/folder/file`.

* Break your students into pairs that will work together on this activity.

  ```md
  @TODO ADD ACTIVITY INSTRUCTIONS, TABBED ONCE OR TWICE (DEPENDING ON CODE SNIPPETS IN ACTIVITY INSTRUCTIONS)
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 24. Instructor Review: { ACTIVITY NAME } (15 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with @TODO { TOPIC }? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ @TODO { THIS }

  * ✔️ @TODO { THAT }

  * ✔️ @TODO { THE OTHER }

* Open `@TODO/folder/file` in your IDE and explain the following: 

  * @TODO { WE DO THIS AND THE RESULT IS THAT }

    ```
    @TODO ADD CODE SNIPPET, TABBED TWICE (4 SPACES)
    ```

  * 🔑 @TODO DON'T FORGET TO USE THE KEY EMOJI ON KEY POINTS, BUT ONLY KEY POINTS, NOT _EVERY_ POINT

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ @TODO { DO WE END OUR REVIEWS WITH A QUESTION? }

  * 🙋 @TODO { YES, WE DO! }

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 @TODO We can refer to supplemental material, read the [{ DOCS }]({ URL }), and stick around for office hours to ask for help.

* Answer any questions before ending the class.

### 25. END (0 min)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this [anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

---
@TODO © YEAR Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

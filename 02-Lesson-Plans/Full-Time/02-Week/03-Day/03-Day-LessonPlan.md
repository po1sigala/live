# 02.3 Full-Time Lesson Plan: JavaScript and Web APIs

## Overview

In this class, we will work on the Unit 03 Mini-Project and then move onto Unit 04 on Web APIs. This will be the students' first introduction to the DOM. 

## Instructor Notes 

* In this lesson, students will complete activities `28-Stu_Mini-Project` in Unit 03 through `XX-Stu_Activity-Title` in Unit 04.

* Be sure to review the activities and try to anticipate questions that students might ask. 

* This is a critical unit as it introduces real-world use cases for the programming concepts students learned in the previous unit (JavaScript) and will set them up for success when transitioning to front-end frameworks (React) at the end of the course.

* JavaScript is what ties together HTML and CSS and brings the user experience to life. Let students know that the work they are doing with JavaScript now will pay off heavily as the course proceeds.

* Students will be working with JavaScript throughout the whole course, be sure to remind them often that these are the building blocks for success.

* That said, the activities are designed to encourage independent exploration and experimentation as there are dozens of DOM methods available to developers and we will only scratch the surface here with those most commonly used. So have fun!

* Remind students to do a `git pull` of the class repo to have today's activities ready and open in VS Code. 

* If you are comfortable doing so, live-code the solutions to the activities. If not, just use the solutions provided and follow the prompts and talking points for review.

* Let students know that the Bonus at the end of each activity is not meant to be extra coding practice, but instead is a self-study on topics beyond the scope of this unit for those who want to further their knowledge.

## Learning Objectives

* @TODO Bullet the learning objectives for the lesson plan. Refer to your Activity Planner.

* @TODO When writing learning objectives, start each one with a measurable verb. Refer to this [list of measurable verbs used to assess learning outcomes](https://www.clinton.edu/curriculumcommittee/listofmeasurableverbs.cxml). For example, "Initialize projects and install third-party packages using npm."

* @TODO If a learning objective is a concept and not a demonstrable skill, use the verb "explain". For example, "Explain the client-server model."

* @TODO Do not use the verb "understand" because it is not measurable.

* @TODO Aim for 3&ndash;6 learning objectives. If you find yourself listing more than six, you may need to rethink the scope of your objectives or the lesson itself. 

## Slide Deck

* [Unit 04 Slide Deck]()

## Time Tracker

| Start  | #   | Activity Name                      | Duration |
|---     |---  |---                                 |---       |
| 10:00AM| 1   | Instructor Demo: Mini Project      | 0:05     |
| 10:05AM| 2   | Student Do: Mini Project           | 0:60     |
| 11:05AM| 3   | Instructor Review: Mini Project    | 0:10     |
| 11:15AM| 4   | Introduce Homework                 | 0:05     |
| 11:20AM| 5   | FLEX                               | 0:30     |
|        |     | **EVEN.1 BEGINS**                  |          |
| 11:50PM| 6  | Instructor Do: Stoke Curiosity      | 0:10     |
| 12:00PM| 7  | BREAK                               | 0:30     |
| 12:30PM| 8  | Instructor Demo:                    | 0:05     |
| 12:35PM| 9  | Student Do:                         | 0:15     |
| 12:50PM| 10 | Instructor Review:                  | 0:10     |
| 1:00PM | 11 | Instructor Demo:                    | 0:05     |
| 1:05PM | 12 | Student Do:                         | 0:15     |
| 1:20PM | 13 | Instructor Review:                  | 0:10     |
| 1:30PM | 14 | Instructor Demo:                    | 0:05     |
| 1:35PM | 15 | Student Do:                         | 0:15     |
| 1:50PM | 16 | Instructor Review:                  | 0:10     |
| 2:00PM | 17 | Instructor Demo:                    | 0:05     |
| 2:05PM | 18 | Student Do:                         | 0:15     |
| 2:20PM | 19 | Instructor Review:                  | 0:10     |
| 2:30PM | 20 | END                                 | 0:00     |

- - -

## Class Instruction

### 1. Instructor Demo: Mini Project (5 min) 

* Welcome students to class.

* Open `26-Stu_Mini-Project/index.html` in your browser and demonstrate the following:

  * 🔑 We will create a Rock, Paper, Scissors game that allows a user to play against the computer. 

  * 🔑 When we open the browser, we are prompted to enter a choice: R, P, or S.

  * 🔑 When we have entered the letter and pressed OK, we are alerted to the computer's choice. 

  * 🔑 After we press OK, we are alerted whether we won, tied, or lost. 

  * 🔑 When we press OK again, we are alerted to the stats.

  * 🔑 When we press OK a final time, we are presented with the prompt "Play Again?"
  
  * 🔑 If we press OK, the game starts again. If not, we exit the game. 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 Start with a plan! Pseudocoding will help us figure out what the code will need to look like. Then, using the JavaScript skills learned in class and a bit of research, we will write the actual code. 

* Answer any questions before allowing students to start the mini-project.

### 2. Student Do: Mini Project (60 min)

* Direct students to the activity instructions found in `28-Stu_Mini-Project/README.md`.

* Break your students into groups that will work together on this activity.

  ```md
  # Unit 03 Mini-Project: Rock, Paper, Scissors

  In this activity, you will work with a group to build a game using only JavaScript.

  ## Instructions

  The completed application should meet the following criteria:

  * As a user, I want to play Rock, Paper, Scissors against an automated opponent.

  * As a user, I can enter R, P, or S to signify my choice of rock, paper, or scissors.

  * As a user, I expect the computer to choose R, P, or S in return.

  * As a user, I want the option to play again whether I win or lose.

  * As a user, I want to see my total wins, ties, and losses after each round.

  ### Specifications

  * Must use the `alert()`, `confirm()`, and `prompt()` methods to collect user input and display information to the user.

  * The computer's selection must be random to ensure a fair game.

  ## 💡 Notes

  Refer to the documentation:

  * [MDN Web Docs on window.alert()](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert)

  * [MDN Web Docs on window.confirm()](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm)

  * [MDN Web Docs on window.prompt()](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)

  * [MDN Web Docs on Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your group to further your knowledge:

  * How can you customize the appearance of the `alert()`, `confirm()`, and `prompt()` dialog boxes?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 3. Instructor Review: Mini Project (10 min)  

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with this mini-project? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

  * ✔️ `window.prompt()`

  * ✔️ `Math.floor()` and `Math.random()`

  * ✔️ `window.alert()`

  * ✔️ Conditional statements

  * ✔️ `window.confirm()`

* Open `26-Stu_Mini-Project/Main/script.js` in your IDE and explain the following: 

  * We declare variables that will be used to count the wins, losses, and ties, as follows:

    ```js
    var wins = 0;
    var ties = 0;
    var losses = 0;
    ```
    
  * We also create an array to hold all the possible choices the computer can make, as shown in the following example:

    ```js
    var options = ["R", "P", "S"];
    ```

  * 🔑 To play the game, the user has to enter a choice. We use `window.prompt()` to grab the choice and store it in a variable, as follows:

    ```js
    var userChoice = window.prompt("Enter R, P, or S:");
    ```

  * To compare with the computer's pick, the `userChoice` must be capital letters. So we use a string method, shown in the following example, to ensure that all choices are uppercase:

    ```js
    userChoice = userChoice.toUpperCase();
    ```

  * 🔑 We use `Math.floor()` combined with `Math.Random()` to select a random index from the `options` array, as follows:

    ```js
    var index = Math.floor(Math.random() * options.length);
    ```

  * 🔑 The `index` is then used to assign the computer a choice, as follows:

    ```js
    var computerChoice = options[index];
    ```

  * 🔑 We use `window.alert()` to alert the user of the computer's pick in the browser, as shown in the following example:

    ```js
    window.alert("The computer chose " + computerChoice);
    ```

  * 🔑 We use conditional statements to determine whether the game is a tie, win, or loss.

  * If the `userChoice` and `computerChoice` are equal, then it is a tie. We increment `tie` and alert the user that `"It's a tie!"`, as follows:

    ```js
    if (userChoice === computerChoice) {
      ties++;
      window.alert("It's a tie!");
    }
    ```

  * If it is not a tie, we check whether the user has won, with the following code:

    ```js
    else if (
      (userChoice === "R" && computerChoice === "S") || 
      (userChoice === "P" && computerChoice === "R") || 
      (userChoice === "S" && computerChoice === "P")
    ) {
      wins++;
      window.alert("You win!");
    }
    ```

  * If it is not a tie or a win, then we alert the user that it is a loss and increment `losses`, as follows:

    ```js
    else {
      losses++;
      window.alert("You lost!");
    }
    ```

  * We use an alert to show the user the stats. In the following example, `\n` creates line breaks:

    ```js
    window.alert(
      "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
    );
    ```

* We use `window.confirm()` to determine whether the user wants to play again, as follows:

  ```js
  var playAgain = window.confirm("Play again?");
  ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can users interact with the Rock, Paper, Scissors game? 

  * 🙋 Users interact through a series of pop-up boxes that prompt them to provide a choice, share a message, or confirm whether they want to play again. The `window` methods used to create these pop-up boxes are `window.alert()`, `window.confirm()`, and `window.prompt()`. 

  * ☝️ What can we do if we don't completely understand this?

  * 🙋We can refer to supplemental material, read the [MDN Web Docs on window.prompt()](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt), the [MDN Web Docs on window.confirm()](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm), and the [MDN Web Docs on window.alert()](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 4. Instructor Demo: Introduce Homework (5 min)

* Open `02-Homework/Main/index.html` in your browser and demonstrate the following:

  * This password generator takes criteria selected by the user and uses it to generate a random string. 

  * This is a fully functioning app that integrates HTML, CSS, and JavaScript to create an interactive user experience. 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are we learning?

  * 🙋 We are learning to create an interactive user experience using HTML, CSS, and JavaScript. 

  * ☝️ How does this project build off or extend previously learned material?

  * 🙋 We will use the HTML and CSS we learned for structure and style but use JavaScript to add interactivity. 

  * ☝️ How does this project relate to your career goals?

  * 🙋 Creating interactive pages and apps is an essential skill in modern web development. This project will be a fantastic addition to your portfolio, to help you demonstrate your JavaScript skills to a future employer. 

* Ask TAs to direct students to the Homework Requirements found in `02-Homework/README.md`.

### 5. FLEX (30 min)

* This time can be utilized for reviewing key topics learned so far in this unit or getting started on the homework.

* Ask the students if there is anything they would like to review from Unit 03 before moving on to Unit 04.

                              ***EVEN.1 BEGINS***

### 6. Instructor Do: Stoke Curiosity (10 min)

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

### 7. BREAK (30 min)

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
@TODO ADD INSTRUCTIONS
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
  @TODO ADD CODE SNIPPET, TABBED
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
@TODO ADD INSTRUCTIONS
```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 13. Instructor Review: { ACTIVITY NAME } (10 min) 

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
  @TODO ADD CODE SNIPPET, TABBED
  ```

  * 🔑 @TODO DON'T FORGET TO USE THE KEY EMOJI ON KEY POINTS, BUT ONLY KEY POINTS, NOT _EVERY_ POINT

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ @TODO { DO WE END OUR REVIEWS WITH A QUESTION? }

  * 🙋 @TODO { YES, WE DO! }

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 @TODO We can refer to supplemental material, read the [{ DOCS }]({ URL }), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 14. Instructor Demo: { ACTIVITY NAME } (5 min) 

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

### 15. Student Do: { ACTIVITY NAME } (15 min) 

* Direct students to the activity instructions found in `@TODO/folder/file`.

* Break your students into pairs that will work together on this activity.

```md
@TODO ADD INSTRUCTIONS
```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 16. Instructor Review: { ACTIVITY NAME } (10 min) 

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
  @TODO ADD CODE SNIPPET, TABBED
  ```

  * 🔑 @TODO DON'T FORGET TO USE THE KEY EMOJI ON KEY POINTS, BUT ONLY KEY POINTS, NOT _EVERY_ POINT

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ @TODO { DO WE END OUR REVIEWS WITH A QUESTION? }

  * 🙋 @TODO { YES, WE DO! }

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 @TODO We can refer to supplemental material, read the [{ DOCS }]({ URL }), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 17. Instructor Demo: { ACTIVITY NAME } (5 min) 

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

### 18. Student Do: { ACTIVITY NAME } (15 min) 

* Direct students to the activity instructions found in `@TODO/folder/file`.

* Break your students into pairs that will work together on this activity.

```md
@TODO ADD INSTRUCTIONS
```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 19. Instructor Review: { ACTIVITY NAME } (10 min) 

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
    @TODO ADD CODE SNIPPET, TABBED
    ```

    * 🔑 @TODO DON'T FORGET TO USE THE KEY EMOJI ON KEY POINTS, BUT ONLY KEY POINTS, NOT _EVERY_ POINT

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

    * ☝️ @TODO { DO WE END OUR REVIEWS WITH A QUESTION? }

    * 🙋 @TODO { YES, WE DO! }

    * ☝️ What can we do if we don't completely understand this?

    * 🙋 @TODO We can refer to supplemental material, read the [{ DOCS }]({ URL }), and stick around for office hours to ask for help.

* Answer any questions before ending the class.

### 20. END (0 min)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this [anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

---
© 2020 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

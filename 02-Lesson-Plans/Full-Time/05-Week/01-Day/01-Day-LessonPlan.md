# XX.X Full-Time Lesson Plan: Node.js, ES6 (Note: Full-Time Monday LP using PT odd unit's .1/.2 LPs)

## Overview 

This lesson introduces Node.js and the new syntax that comes with ES6. This includes arrow functions also new variables `let` and `const`. Finally we will cover template literals and how they can be helpful in our development process.

## Instructor Notes

* Complete activities `01-Ins_Node-Demo` through `10-Stu_TemplateLiterals`

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
                    ODD.2 BEGINS
| 1:15PM| 18  | Instructor Do: Stoke Curiosity              | 0:10     |
| 1:25PM| 19  | Instructor Demo: `process.argv`             | 0:05     |
| 1:30PM| 20  | Student Do: `process.argv`                  | 0:15     |
| 1:45PM| 21  | Instructor Review: `process.argv`           | 0:10     |
| 1:55PM| 22  | Instructor Demo: Read/Write File            | 0:05     |
| 2:00PM| 23  | Student Do: Append File                     | 0:15     |
| 2:15PM| 24  | Instructor Review: Append File              | 0:15     |
| 2:30PM| 25  | END                                         | 0:00     |

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

### 2. Instructor Demo: { ACTIVITY NAME } (5 min) 

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

### 3. Student Do: { ACTIVITY NAME } (15 min) 

* Direct students to the activity instructions found in `@TODO/folder/file`.

* Break your students into pairs that will work together on this activity.

```md
@TODO ADD INSTRUCTIONS
```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help while circulating through room.

### 4. Instructor Review: { ACTIVITY NAME } (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

    * ☝️ How comfortable do you feel with `@TODO TOPIC`? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

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

  * 🙋 @TODO We can refer to supplemental material, read the [{ DOCS }]({ URL }), and stick around for Office Hours to ask for help.

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
@TODO ADD INSTRUCTIONS
```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help while circulating through room.

### 7. Instructor Review: { ACTIVITY NAME } (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

    * ☝️ How comfortable do you feel with `@TODO TOPIC`? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

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

  * 🙋 @TODO We can refer to supplemental material, read the [{ DOCS }]({ URL }), and stick around for Office Hours to ask for help.

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
@TODO ADD INSTRUCTIONS
```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help while circulating through room.

### 10. Instructor Review: { ACTIVITY NAME } (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

    * ☝️ How comfortable do you feel with `@TODO TOPIC`? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

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

  * 🙋 @TODO We can refer to supplemental material, read the [{ DOCS }]({ URL }), and stick around for Office Hours to ask for help.

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

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help while circulating through room.

### 13. BREAK (30 min)

### 14. Instructor Review: { ACTIVITY NAME } (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

    * ☝️ How comfortable do you feel with `@TODO TOPIC`? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

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

  * 🙋 @TODO We can refer to supplemental material, read the [{ DOCS }]({ URL }), and stick around for Office Hours to ask for help.

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
@TODO ADD INSTRUCTIONS
```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help while circulating through room.

### 17. Instructor Review: { ACTIVITY NAME } (15 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

    * ☝️ How comfortable do you feel with `@TODO TOPIC`? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

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

  * 🙋 @TODO We can refer to supplemental material, read the [{ DOCS }]({ URL }), and stick around for Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

                                **ODD.2 LESSON PLAN BEGINS**

### 18. Instructor Do: Stoke Curiosity (10 min)

* @TODO The first building block of every class is used to stoke curiosity on the topic. This may be using a slide deck or demonstration of the last activity of the day combined with pseudocoding. How are you going to stoke curiosity? Write two or three sentences describing your approach. 

### 19. Instructor Demo: { ACTIVITY NAME } (5 min) 

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

### 20. Student Do: { ACTIVITY NAME } (15 min) 

* Direct students to the activity instructions found in `@TODO/folder/file`.

* Break your students into pairs that will work together on this activity.

```md
@TODO ADD INSTRUCTIONS
```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help while circulating through room.

### 21. Instructor Review: { ACTIVITY NAME } (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

    * ☝️ How comfortable do you feel with `@TODO TOPIC`? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

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

  * 🙋 @TODO We can refer to supplemental material, read the [{ DOCS }]({ URL }), and stick around for Office Hours to ask for help.

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
@TODO ADD INSTRUCTIONS
```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help while circulating through room.

### 24. Instructor Review: { ACTIVITY NAME } (15 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

    * ☝️ How comfortable do you feel with `@TODO TOPIC`? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

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

  * 🙋 @TODO We can refer to supplemental material, read the [{ DOCS }]({ URL }), and stick around for Office Hours to ask for help.

* Answer any questions before ending the class.

### 25. END (0 min)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete [this anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

- - -
@TODO © <year> Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

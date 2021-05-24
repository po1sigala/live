# 11.2 Full-Time Lesson Plan: 

## Overview

This class focuses on using Apollo's client-side library to consume a GraphQL API. React Router and JSON Web Tokens to add authentication to a MERN-stack application is also covered.

## Instructor Notes

* In this lesson, students will complete activities `15-Ins_useMutation` through `27-Evr_GitHub-Actions`.

* The `17-Ins_Apollo-Cache` uses Apollo Client Developer Tools to visualize the in-memory cache. If you have not yet done it, install the [Apollo Client Developer Tools extension for Google Chrome](https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm?hl=en-US). Once installed, open Chrome DevTools and navigate to the `>>` arrow on the toolbar to see additional tools available. Click on `Apollo` to open the interface.

* If you get an `eslint` preflight check error when running the Homework demo, add an `.env` folder to the root of the project and add `SKIP_PREFLIGHT_CHECK=true`. The error can also be avoided by running the homework demo from the class repo to avoid conflicting `eslint` installations.

* It is highly recommended that prior to class, you go through each demo and activity so that you are familiar with the code and can anticipate issues that students new to the MERN framework and React.js may face.

* Remind students to do a `git pull` of the class repo and to have today's activities ready and open in VS Code.

* If you are comfortable doing so, live-code the solutions to the activities. If not, just use the solutions provided and follow the prompts and talking points for review.

* Let students know that the Bonus at the end of each activity is not meant to be extra coding practice, but instead is a self-study on topics beyond the scope of this unit for those who want to further their knowledge.

## Learning Objectives

* Use `useMutation` Apollo Hook to fetch and update data.

* Explain what the Apollo Cache is and identify when it needs updating.

* Use React Router to tie a component to a URL route.

 * Create and verify a JSON Web Token to log in the user.

* Store, check expiration of, and pass JSON Web Tokens to an Apollo Client.

* Implement server-side authentication in GraphQL API.

* Explain a practical use case for implementing GitHub Actions.

## Time Tracker

| Start  | #   | Activity Name                          | Duration |
|---     |---  |---                                     |---       |
| 10:00AM| 1   | Instructor Demo: useMutation           | 0:05     |
| 10:05AM| 2   | Student Do: useMutation                | 0:15     |
| 10:20AM| 3   | Instructor Review:  useMutation        | 0:10     |
| 10:30AM| 4   | Instructor Demo:  Apollo Cache         | 0:05     |
| 10:35AM| 5   | Student Do: Apollo Cache               | 0:15     |
| 10:50AM| 6   | Instructor Review:  Apollo Cache       | 0:10     |
| 11:00AM| 7   | Instructor Demo: React Router          | 0:05     |
| 11:05AM| 8   | Student Do:  React Router              | 0:15     |
| 11:20AM| 9   | Instructor Review: React Router        | 0:10     |
| 11:30AM| 10  | FLEX                                   | 0:30     |
| 12:00PM| 11  | BREAK                                  | 0:30     |
| 12:30PM| 12  | Instructor Do: Stoke Curiosity         | 0:10     |
| 12:40PM| 13  | Instructor Demo: Sign JWT              | 0:05     |
| 12:45PM| 14  | Student Do: Sign JWT                   | 0:15     |
| 1:00PM | 15  | Instructor Review: Sign JWT            | 0:10     |
| 1:10PM | 16  | Instructor Demo: Decode JWT            | 0:05     |
| 1:15PM | 17  | Student Do: Decode JWT                 | 0:15     |
| 1:30PM | 18  | Instructor Review: Decode JWT          | 0:10     |
| 1:40PM | 19  | Instructor Demo: Context Resolver      | 0:05     |
| 1:45PM | 20  | Student Do: Context Resolver           | 0:15     |
| 2:00PM | 21  | Instructor Review:  Context Resolver   | 0:10     |
| 2:10PM | 22  | Everyone Do: Git                       | 0:20     |
| 2:30PM | 23  | END                                    | 0:00     |

---

## Class Instruction

### 1. Instructor Demo: { ACTIVITY NAME } (5 min) 

* Welcome students to class.

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

### 2. Student Do: { ACTIVITY NAME } (15 min) 

* Direct students to the activity instructions found in `@TODO/folder/file`.

* Break your students into pairs that will work together on this activity.

  ```md
  @TODO ADD ACTIVITY INSTRUCTIONS, TABBED ONCE OR TWICE (DEPENDING ON CODE SNIPPETS IN ACTIVITY INSTRUCTIONS)
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 3. Instructor Review: { ACTIVITY NAME } (10 min) 

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

### 4. Instructor Demo: { ACTIVITY NAME } (5 min) 

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

### 5. Student Do: { ACTIVITY NAME } (15 min) 

* Direct students to the activity instructions found in `@TODO/folder/file`.

* Break your students into pairs that will work together on this activity.

  ```md
  @TODO ADD ACTIVITY INSTRUCTIONS, TABBED ONCE OR TWICE (DEPENDING ON CODE SNIPPETS IN ACTIVITY INSTRUCTIONS)
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 6. Instructor Review: { ACTIVITY NAME } (10 min) 

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

### 7. Instructor Demo: { ACTIVITY NAME } (5 min) 

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

### 8. Student Do: { ACTIVITY NAME } (15 min) 

* Direct students to the activity instructions found in `@TODO/folder/file`.

* Break your students into pairs that will work together on this activity.

  ```md
  @TODO ADD ACTIVITY INSTRUCTIONS, TABBED ONCE OR TWICE (DEPENDING ON CODE SNIPPETS IN ACTIVITY INSTRUCTIONS)
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 9. Instructor Review: { ACTIVITY NAME } (10 min) 

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

* Answer any questions before proceeding.

### 10. FLEX (30 min)

* This time can be utilized for reviewing key topics learned so far in this unit.

* @TODO Provide GUIDED instruction for review.

### 11. BREAK (30 min)

                                ***ODD.3 BEGINS***

### 12. Instructor Do: Stoke Curiosity (10 min)

* @TODO The first building block of every class is used to stoke curiosity on the topic. This may be using a slide deck or demonstration of the last activity of the day combined with pseudocoding. How are you going to stoke curiosity? Write two or three sentences describing your approach. 

## 13. Instructor Demo: { ACTIVITY NAME } (5 min) 

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

### 14. Student Do: { ACTIVITY NAME } (15 min)

* Direct students to the activity instructions found in `@TODO/folder/file`.

* Break your students into pairs that will work together on this activity.

  ```md
  @TODO ADD ACTIVITY INSTRUCTIONS, TABBED ONCE OR TWICE (DEPENDING ON CODE SNIPPETS IN ACTIVITY INSTRUCTIONS)
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 15. Instructor Review: { ACTIVITY NAME } (10 min) 

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

## 16. Instructor Demo: { ACTIVITY NAME } (5 min) 

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

### 17. Student Do: { ACTIVITY NAME } (15 min) 

* Direct students to the activity instructions found in `@TODO/folder/file`.

* Break your students into pairs that will work together on this activity.

  ```md
  @TODO ADD ACTIVITY INSTRUCTIONS, TABBED ONCE OR TWICE (DEPENDING ON CODE SNIPPETS IN ACTIVITY INSTRUCTIONS)
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 18. Instructor Review: { ACTIVITY NAME } (10 min) 

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

## 19. Instructor Demo: { ACTIVITY NAME } (5 min) 

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

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `@TODO/folder/file`.

## 22. Everyone Do: Git (20 min)

* @TODO Open [Git docs](https://git-scm.com/docs/{TITLE}) in your browser and explain the following:

  * @TODO GIVE A SHORT EXPLANATION OF THIS GIT CONCEPT/COMMAND.

* Direct students to the activity instructions found in `@TODO/folder/file`.

* While everyone is working on the activity, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

* Open your command line and demonstrate the following:

  * @TODO { WE DO THIS AND THE RESULT IS THAT }

    ```
    @TODO ADD CODE SNIPPET, TABBED TWICE (4 SPACES)
    ```

  * 🔑 @TODO DON'T FORGET TO USE THE KEY EMOJI ON KEY POINTS, BUT ONLY KEY POINTS, NOT _EVERY_ POINT

* Answer any questions before ending the class.

### 23. END (0 min)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this [anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

---
@TODO © YEAR Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
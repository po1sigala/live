# 🏗️ Implement Promise.all()

Work with a partner to implement the following user story:

* As a developer, I want to be able to use `Promise.all()` wait for the results of multiple API calls before I display the end result.

## Acceptance Criteria

* It's done when the promise is rejected if the request is too long

* It's done when the promise is resolved if the API request is responded to within 10 seconds

* It's complete when we map through each movie duration and push a `callAPI()` promise to the promises array
  
* It's done when we call `Promise.all()` by passing our array `promises`
  
* It's done when we have a `.then()` that logs out the results of the `Promise.all()`

* It's done when we have a `.catch()` statement to handle any errors

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* What is the state of each promise after the `setTimeout` has began but before it has ended?

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2020 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
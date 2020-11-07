# 📖 Implement Promise.all() to Wait for Multiple API Calls

Work with a partner to implement the following user story:

* As a developer, I want to be able to wait for the results of multiple API calls before I display the end result.

## Acceptance Criteria

* It's done when the `callAPI` promise is rejected if the request is too long

* It's done when the `callAPI` promise is resolved if the API request is responded to within 10 seconds

* It's done when a single console log captures when all promises in an array have been resolved

* It's done when proper error handling has been put in place in case a promise in the array is rejected

## 📝 Notes

Refer to the documentation: 

[MDN Web Docs on Promise.all()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)

---

## 💡 Hints

* How are `.then()` and `.catch()` used in conjunction with promises?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* What is the state of each promise after the `setTimeout` has began but before it has ended?

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2020 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
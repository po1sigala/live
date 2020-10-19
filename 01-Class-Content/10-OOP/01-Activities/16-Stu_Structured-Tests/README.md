# 🏗️ Implement and Write Structured Tests

Work with a partner to implement the following user story:
  
* As a developer, I want to adopt and use the Arrange Act Assert pattern when writing tests.

## Acceptance Criteria

* It's done when I have opened the `Unsolved/child.js` file and examine its contents.

  * This file exports a `Child` constructor function. The constructor function expects to be provided a name and an age.

  * If `name` is not a string or `name` is an empty string, an error is thrown.

  * If `age` is not a number, is `NaN` or is less than `0`, an error is thrown.

  * Otherwise these values are added to the created instance when the constructor is called.

* It's done when I understand the logic in `Unsolved/dayCare.js`.
  
  * This file requires the `Child` constructor function.

  * This file exports a `DayCare` constructor function.

  * The `DayCare` constructor has an empty `children` array, a capacity of 3, and an `ageLimit` of 6.

  * The `DayCare` constructor has an `addChild` method used for adding `Child` objects to the `children` array, and a `pickupChild` method used for removing a `Child` object from the `children` array.

* It's done when I write code to test the `Child` constructor inside of the `Unsolved/test/child.test.js` file.
  
* It's done when I write code to test the `DayCare` constructor and methods inside of the `Unsolved/test/dayCare.test.js` file.

## 💡 Hints

When considering what to write tests for, ask yourself the following questions:

  * Positive tests: What happens when things go well?

  * Negative tests: What happens in edge cases or when things shouldn't work?

  * Exception tests: What happens in cases when an error should be thrown?


## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* How can you write these tests to ensure that another developer testing your code can understand what the tests are checking?

Use [Google](https://www.google.com) or another search engine to research this.

---
2020 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
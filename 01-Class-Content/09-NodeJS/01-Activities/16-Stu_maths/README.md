# Maths Module

The JavaScript `Math` library contains many useful properties and methods. But it's missing a few of the basics. In this activity, you will create your own `maths` module, then import it into a Node.js application to access its properties and methods.

For example, running `node index.js sum 3 4` will return `7`.

## Instructions

* Create two files, `index.js` and `maths.js`, then import `maths.js` into `index.js`.

* Write four methods for the results of the four basic mathematical operations in `maths.js` (`sum()`, `difference()`, `product()`, and `quotient()`), then export them.

* In `index.js`, create variables to capture the values passed from the command line in `process.argv`: `operation`, `numOne` and `numTwo`.

* Next, write a `switch` statement that accepts an `operation` parameter.

* Within each `case` of the `switch`, use the corresponding `maths` methods to perform the operation on the numbers taken from the command line using `process.argv`.

## Hints

* You will need to use `parseInt()`.

## Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* How can you export your functions directly?

Use [Google](https://www.google.com/) or another search engine to research this.

---

© 2020 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

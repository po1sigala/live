# Maximum Continuous Sub-Array

In this activity, you will create a function that takes in two sorted arrays of integers. Your function should return a new two-element array that contains one number from each sorted array with the smallest difference.

## Instructions

* Open [Unsolved/smallest-difference.js](Unsolved/smallest-difference.js) in your code editor. This is the only file you will modify in this activity.

  * In this file, you will be writing code in the body of the `smallestDifference` function to achieve the following:

    * Return a two-element array that contains the integers from both arrays with the smallest distance.

    * See the following arrays for an example:

       ```js
       var arr1 = [1, 6, 7, 9];
       var arr1 = [8, 9, 10, 11, 12, 13];
       ```

    * The preceding arrays should return the following:

       ```js
       [9, 9];
       ```

    * Both arrays contain the number `9`, and the difference between same numbers is `0`.

    * See the following arrays for an example:

       ```js
       var arr1 = [2, 4, 6, 8, 15, 20];
       var arr2 = [17, 25, 30, 47];
       ```

    * The preceding arrays should return the following:

       ```js
       [15, 17];
       ```

    * The difference between `15` and `17` is `2`, which is the smallest difference between any two numbers across the arrays.

    * Assume that each array will contain at least one integer.

* You can check whether your function works properly by opening [Unsolved/test.html](Unsolved/test.html) in your web browser.

  * Functions that PASS the tests will be denoted with a green check mark.

  * Functions that FAIL the tests will be denoted with a red X and an error message.

### Hints

* How can you use the fact that the arrays are sorted to your advantage?

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

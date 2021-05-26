# Maximum Continuous Sub-Array

In this activity, you will create a function that takes in an array and returns the sum of the maximum continuous subarray. 

## Instructions

* Open [Unsolved/maximum-continuous-subarray.js](Unsolved/maximum-continuous-subarray.js) in your code editor. This is the only file you will modify in this activity.

  * In this file, you will be writing code in the body of the `maxSumArray` function to achieve the following:

    * Given an array of integers, find the continuous subarray that has the largest sum.

    * See the following array for an example:

       ```js
       var arr1 = [[-1,2]
       ```

    *  In this case, the array only contains two integers, so the maximum sum will be the sum of both integers or 1. 

    * See the following array for an example:

       ```js
       var arr1 = [1, 2, 3, 4]
       ```

    * In this case, since all the integers are positive, the maximum sum will equal the sum of all the integers in the array or 10.


     * See the following array for an example:

       ```js
       var numbers =  [-2,1,-3,4,-1,2,1,-5,4]
       ```

    * In this case, the maximum sum you can get from adding sequential numbers is adding the numbers in the subarray [4, -1, 2, 1]. So in this case, 6 should be returned.

    * Assume that the array will contains only integers and the the integers can be positive or negative. 

    * Assume that if there is only one integer in a given array, the value of the integer will be returned. 

* You can check whether your function works properly by opening [Unsolved/test.html](Unsolved/test.html) in your web browser.

  * Functions that PASS the tests will be denoted with a green check mark.

  * Functions that FAIL the tests will be denoted with a red X and an error message.

### Hints

* What properties and methods on the Math object may help simplify your solution code?

* Why is it important if the array has only positive, only negative, or both positive and negative numbers?

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

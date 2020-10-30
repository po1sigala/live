# Bubble Sort - The Interviewee

As the interviewer, it is your job to properly restate the problem to the interviewer and expected output to ensure you understand what you have been asked. If the interviewer prompts you with a question, it is not in bad faith, but rather a nudge in the right direction. 

## Problem

Write a function that accepts an unsorted array of integers, sorts it, and returns the sorted array using the "Bubble Sort" algorithm. For example, for the following array:

```js
const unsortedArr = [2, 42, 100, 23, 500, 34];
```

We would receive an array like this in return:

```js
const sortedArr = [2, 23, 34, 42, 100, 500];
```

- - - 

## Notes to the Interviewee

The bubble sort algorithm is a more common sorting algorithm one may receive in a technical interview. It is easier to grasp than some other algorithms and allows the interviewee to not only implement a solution, but a

## Solutions

Use the comments in the solution code to help guide with the following prompts:

* [bubble-sort.js](./bubble-sort.js)

* [bubble-sort-brute-force.js](./bubble-sort-brute-force.js)

## Prompts from the Interviewer

Use these prompts to help guide a candidate to a solution without giving away the answer:

* **Prompt**: Can you think of a way to solve this problem with brute force?

  * **Ask If**: Ask this question to candidates who have trouble getting started on the question on their own.

  * **Look For**

    * **Candidate Explains Solution**. The brute force solution is to take a look through the array one index at a time and loop through the rest of the array to compare and swap values when needed.

      * This is very slow for large input arrays, so it's not the _best_ answer, but it's a good start.

      * Don't let candidates begin implementing this solution unless it's clear they won't be able to uncover the greedy solution.

- - -

* **Prompt**: How would we know if a value in the array needs to be swapped and sorted?

  * **Ask If**: Ask this question to candidates that are having a hard time visualizing what needs to be done.

  * **Candidate Explains Solution**. We want the candidate to be able to identify an unsorted element by checking if it's less than or greater than an element later in the array.

  * **Follow-Up**: What happens when we identify a value that should be swapped with another?

    * Use this to nudge candidate into using some sort of swap functionality with a `tmp` variable to store data and switch values.

- - -

* **Prompt**: If we don't want to use the brute force solution and implement one that's a bit more efficient, how can we know if the array is sorted early?

    * **Ask If**: Ask this if students opted to not go with the brute force route and wanted to optimize.

  * **Candidate Explains Solution**. Strong candidates will be able to explain that there is a need for a flag variable that let's a loop know if it's done or not. 

    * Particularly strong candidates will also realize they should keep track of the _lowest_ number they've seen so far, but it's okay if they don't.

- - -

* **Prompt**: Does your solution work for negative numbers? For example, imagine the input `[-10, -10, 30, 1]`.

  * **Ask During**: Implementation Discussion

  * **Candidate Explains Shortcomings**. Strong candidates will realize they need to account for cases where the product of two negative numbers produces the highest product of two.

    * This is the case that necessitates our keeping track of the lowest number we've seen so far.

- - -
© 2020 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

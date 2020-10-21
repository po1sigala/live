# 🏗️ Write and Implement Multiple Classes

* As a developer, I want to practice the OOP paradigm by using multiple classes and differing purposes.

* As a developer I want to create a store class that handles different interactions within the store. 

## Acceptance Criteria

* It's done when I have ran `npm install` inside the project directory.

* It's done when I have confirmed everything installed properly by running `npm test`.

* It's done when I have opened [test/store.test.js](Unsolved/test/store.test.js) and taken a moment to familiarize myself with the `Store` class tests.

* It's done when I have created a `Store` class with the following properties inside `store.js`:
  * Name
  * Stock
  * Revenue
  
* It's done when I have added the following properties inside `toy.js`:
  * Name
  * Stock
  * Revenue

* It's done when I have created a method called `processProductSale` that takes in the product's name as a parameter.
  
* It's done when the `processProductSale` method should increases the store's revenue by the price of the toy and decreases the toy's count by one.

* It's done when I `console.log` a message if there's **no more stock** of a given toy while refraining from decreasing the toy's `count` property. 

* It's done when I have added a method called `replenishStock(name, count)` that increases the stock on a toy by the provided `count` parameter inside `Store`.

* It's done when I have uncommented lines in index.js to add functionality. 

## 💡 Hints

How can you use these tests as guidance for this activity? Try working on each bit of functionality in conjuncture with its unit test, only moving on when the test passes.

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* In `toy.js` add a method called `calculateTax` that returns the price times a sales tax of 8.875. Don't forget to round to two decimal places.

* Add this number to the total that's printed out in `processProductSale` but do **not** add it to the revenue.

Use [Google](https://www.google.com) or another search engine to research this.

---
2020 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
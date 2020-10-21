# 🏗️ Write and Implement Classes

Work with a partner to implement the following user story:

* As a developer, I want to make two RPG characters match against each other using ES6 classes.

## Acceptance Criteria

* It's done when I have opened [character.js](Unsolved/character.js) and updated the `Character` class so that it instantiates objects with the following properties:

  * Name
  * Strength
  * HitPoints

* It's done when I create a `printStats()` class method that prints the name, strength, and hitPoints for a character.

* It's done when I create a `attack(opponent)` method that a character can use to deal damage (equal to their strength) to their opponents hitPoints.  

* It's done when I create two instances of a character, giving them different names, strength, and hitPoints. 

* It's done when I make each character take turns attacking each other using `setInterval`. 

* It's done when I have invoke `printStats()` after each attack to visualize the battle.

* It's done when I create a `isAlive` method to check if each character has more than 0 hitPoints every turn.
  
* It'd done when I check if either character has been defeated and stop the interval and end the game.

## 💡 Hints

* How can we start small? Can we benefit from first trying to make one character attack another until the game is over?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* * How can we add validation to ensure that each character is provided the proper 3 arguments when created. If any of the arguments are not present, `throw` an error.


Use [Google](https://www.google.com) or another search engine to research this.

---
2020 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
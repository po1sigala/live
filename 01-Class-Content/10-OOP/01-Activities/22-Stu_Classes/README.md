# 🏗️ Write and Implement Classes

Work with a partner to implement the following user story:

* As a user, I want a command line RPG that allows two characters to battle each other.

## Acceptance Criteria

* It's done when a new `Character` can be created with the following properties:

  * `name`

  * `strength`

  * `hitPoints`

* It's done when each `Character` has the following methods:

  * `printStats()` that logs the character's information

  * `isAlive()` that returns `true` or `false` depending on the character's `hitPoints`

  * `attack()` that accepts an opposing `Character` object and subtracts the current character's `strength` from the opponent's `hitPoints`

* It's done when I can run `node character.js` and see two instances of `Character` battle until one of them is defeated.

## 💡 Hints

* How can we start small? Can we benefit from first trying to make one character attack another until the game is over?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * How can we add validation to ensure that each character is provided the proper 3 arguments when created?

Use [Google](https://www.google.com) or another search engine to research this.

---
2020 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
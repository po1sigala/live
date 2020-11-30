  # 🏗️ Write and Implement Classes

  Work with a partner to implement the following user story:

  * As a user, I want a command line RPG that allows two characters to battle each other.

  ## Acceptance Criteria

  * It's done when a new `Character` can be created with the following properties:

    * `name` - a string containing the character's name

    * `strength` - a number indicating how much damage the character's attacks will inflict

    * `hitPoints` - a number that indicates how many hit points the character has

  * It's done when each `Character` has the following methods:

    * `printStats()` that logs the character's name, strength and hitpoints.

    ```js
    console.log(`Stats for ${this.name} are:\n`)
    console.log(`Each attack will do ${this.strength} damage`)
    console.log(`${this.name} has ${this.hitPoints} hit points remaining`)
    ```

    * `isAlive()` that returns a boolean based on whether or not a character's `hitpoints` are less than or equal to zero.

    * `attack()` that accepts an opposing `Character` object and subtracts the current character's `strength` from the opponent's `hitPoints`.

  * It's done when I can run `node character.js` and see two instances of `Character` battle until one of them is defeated.

  ## 💡 Hints

  * How can we start small? Can we benefit from first trying to make one character attack another until the game is over?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

    * How can we add validation to ensure that each character is provided the proper 3 arguments when created?

  Use [Google](https://www.google.com) or another search engine to research this.

---
2020 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
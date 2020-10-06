# 🏗️ Create Characters with Prototypes

Work with a partner to implement the following user story:

* As a game developer, I want to generate RPG characters using Objects and prototypes.

* As a game developer, I need to create simplistic characters for an RPG using constructor functions.

## Acceptance Criteria

* It's done when each character created using your constructor has the following properties:
  * Name: The character's name --> `String`
  * Profession: What the character does for a living --> `String`
  * Age: The character's age --> `Number`
  * Strength: Abstraction for how strong the character is --> `Number`
  * HitPoints (HP): Abstraction for how much health the character has --> `Number`
  * `PrintStats`: Function which prints all of a character's properties to the screen.

* It's done when I have created the character constructor and two new characters.
  
* It's done when I have and printed each character's properties to the screen.
  
* It's done when I have added three methods via prototype:
  * `IsAlive`: Function which prints whether or not this character is alive by looking into their HP and determining whether they are above or below zero.
  * `Attack`: Function which takes in a second character and subtracts this character's strength from their HP.
  * `LevelUp`: Function which increases this character's Age by 1, their Strength by 5, and their HitPoints by 25.

## 💡 Hints

How can we find out how to create additional methods using the prototype chain?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* How are methods created in the constructor different than methods created via prototype?

Use [Google](https://www.google.com) or another search engine to research this.

---
2020 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
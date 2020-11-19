# 🏗️ Build Word Guessing Game

Work with a partner to implement the following user story:

* As a developer, I want to create a word guessing CLI game using OOP
* As a developer, I want to practice ES6 `class` syntax in building this application

## Acceptance Criteria

* It's done when I have am able to receive user input using the `inquirer` or `prompt` npm packages.

* It's done when my solution contains a `Letter.js` file, a `Word.js` file and finally an `index.js` file.

* It's done when all three files satisfy the following criteria:

## Letter.js
Contains a class, `Letter`. This class should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:

  * A string value to store the underlying character for the letter

  * A boolean value that stores whether that letter has been guessed yet

  * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

  * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
  
  * 🔑 This file should **not** require any other files 

## Word.js
Contains a class, `Word`, that depends on the `Letter` class. This is used to create an object representing the current word the user is attempting to guess. That means the class should define:

  * An array of `new` `Letter` objects representing the letters of the underlying word

  * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

  * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)
  
  * This file should **only** require `Letters.js`

## Index.js
The file containing the logic for the course of the game, which depends on `Word.js` and:

  * Randomly selects a word and uses the `Word` class to store it

  * Prompts the user for each guess and keeps track of the user's remaining guesses

## 💡 Hints

* How can we benefit from writing `Letter.js` first and then testing it on its own before moving on? Could we do the same thing with `Word.js`?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* How can we make our UI look better by adding some color to our terminal output? What npm packages are available to preform this kind of function?

Use [Google](https://www.google.com) or another search engine to research this.

---
2020 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

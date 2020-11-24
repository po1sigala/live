# 🏗️ Mock and Spy on `fs` Module

Work with a partner to implement the following user story:

* As a developer, I want to be able to write code to mock and spy on the `fs` module to ensure it's called when expected with the correct arguments.

## Acceptance Criteria

* It's done when I have opened the `Unsolved/fileIO.js` file and understand it's contents.

  * It's done when I understand that this exports a `FileIO` constructor function with methods for reading and writing to the filesystem.

  * It's done when I understand that the `read` and `write` methods use the synchronous versions of `fs.readFile` and `fs.writeFile` and that no callback is required.

* It's done when I have opened `Unsolved/tests/fileIO/test.js` and added code to mock the `fs` module and it's `readFileSync` and `writeFileSync` methods so that they don't read from and write to the filesystem.

## 💡 Hints

How can we use the previous demonstration to aid in mocking node modules?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* How can we further our understanding by writing tests for a `FileIO.prototype.append` method that should append to a given file. How could we update the `Unsolved/fileIO.js` file to include this method using the `fs.appendFileSync` method?

Use [Google](https://www.google.com) or another search engine to research this.

---
2020 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
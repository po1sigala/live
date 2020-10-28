# 🐛 Fix Project's Eslint Rules

Work with a partner to resolve the following issue(s):

* As a developer, I don't want to see warnings when I use the `**` exponentiation operator.

* As a developer, I want to discourage other team members from explicitly assigning variables to `undefined`.

## Expected Behavior

The project's Eslint rules allow the use of `**` operators. 

Eslint displays an error when variables are assigned to `undefined`. For example: `let x = undefined;` is unnecessary, because `let x;` on its own is sufficient.

## Actual Behavior

Eslint displays an error when developers use `**` operators. For example: `let x = 5 ** 2;`.

Developers are able to assign variables to `undefined` without any warning from Eslint.

## Steps to Reproduce the Problem

1. Run `npm install` to install the Eslint dependencies.

2. Open `index.js` in VS Code.

3. Note the underlined error on line 8.

---

## 💡 Hints

* How do you adjust the rules for an Eslint configuration?

* In which version of JavaScript were `**` exponentiation operators introduced?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* What are some other options you can add to your Eslint config file?

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2020 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

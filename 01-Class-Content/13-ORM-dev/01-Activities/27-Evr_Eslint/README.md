# 🐛 Code Not Following ESLint Rules

Work with a partner to resolve the following issue(s):

* As a developer on a team, I want my team's codebase to follow the same formatting and styling using rules ESLint provides.

## Expected Behavior

The code in [Unsolved/example.js](Unsolved/example.js) should pass all tests and rules listed in [Unsolved/.eslintrc.json](Unsolved/.eslintrc.json) and not have red underlines.

## Actual Behavior

The code in [Unsolved/example.js](Unsolved/example.js) does not pass most rules listed in [Unsolved/.eslintrc.json](Unsolved/.eslintrc.json) and have red underlines.

## Steps to Reproduce the Problem

* Install the [VS Code Eslint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

* Run `npm install` from the command line in the [Unsolved](./Unsolved) folder.

* Open [Unsolved/example.js](Unsolved/example.js) in your code editor. If you were able to complete the previous steps correctly, you should see red annotations under different parts of the code. Hovering over each displays a popover with an ESLint rule being broken.

  * Alternatively, you can run `npm run test` to get a list of where code styling errors occur and what errors they are.

---

## 💡 Hint

* How can we better understand the rules in [Unsolved/.eslintrc.json](Unsolved/.eslintrc.json) using the [ESLint documentation](https://eslint.org/docs/rules/)?

## 🏆 Bonus

* If you have fully completed the above tasks, here is something you and your partner can work through as an added challenge to further your knowledge:

  * How can we ensure our code passes all ESLint checks before merging a GitHub pull request? 

* Use [Google](https://www.google.com) or another search engine to research the above.

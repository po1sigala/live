# 🐛 "Get the Latest Interest" Button Does Not Work

Work with a partner to resolve the following issues:

* As a developer, I want to be able to use Async/Await with webpack.

* As a user, I want to be able to get the latest interest rate when I click the appropriate button.

## Expected Behavior

When I click the `Get the latest interest rate` button, an up-to-date interest rate should appear.

## Actual Behavior

When a user clicks the `Get the latest interest rate` button, the interest rate does not appear.

## Steps to Reproduce the Problem

To reproduce the problem, follow these steps:

1. Execute the command `npm install` to download the web app's dependencies.

2. Execute the command `npm run watch` to create a bundle.

3. Open the `index.html` file with a live server.

4. Click the `Get the latest interest rate` button and check the console in Chrome DevTools.

## Assets

The following images confirm that a bundle was created by displaying a success message in the terminal:

![Get the latest interest rate button in the web application.](./Assets/interest-button.png)

![The latest interest rate being displayed on the web application.](./Assets/interest.png)

---

## 💡 Hints

* Which plugins do we need for Async/Await to work in our browser?

* To see the error in the console, open the console window in DevTools and select the Settings button (⚙️). Then select the Preserve log checkbox so the error persists in the console.

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* What Babel plugin allows object rest and spread operators to be used?

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

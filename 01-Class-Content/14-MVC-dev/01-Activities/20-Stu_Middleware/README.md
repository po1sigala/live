# 📖 Implement middleware function for user authentication

Work with a partner to implement the following user story:

* As a developer, I want to write my own middleware to check for user authentication.

## Acceptance Criteria

* It's done when the middleware checks if the user is logged in.

* It's done when the middleware allows access to the gallery and painting pages if the user is logged in.

* It's done when the middleware directs an unauthorized user to the login page if they are not logged in yet.

## 📝 Notes

Refer to the documentation: 

[Express.js Docs on Using Middleware](https://expressjs.com/en/guide/using-middleware.html)

---

## 💡 Hints

* How can you keep the current logic being used in the routes to check if a user is logged in or not and rewrite it as a middleware function?

* Where can we write the code for the custom middleware so it is separate but accessible from the routes? (Where did we put the custom helper functions?)

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* What other middleware do developers use with Express.js?

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2020 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

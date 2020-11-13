# 🏗️ Add sessions to the login route

Work with a partner to implement the following user story:

* As a museum director, I want to allow visitors to view the gallery's paintings only after logging in.

* As a museum visitor, I want to be able to view multiple pages while maintaining my logged in status.

## Acceptance Criteria

* It's done when only after I am logged in, I am able to view the gallery's paintings. Otherwise I am directed to login.

* It's done when only after I am logged in, I am able to view the individual painting page. Otherwise I am directed to login.

* It's done when I can navigate from the gallery page to a painting's detail page without losing my logged in status.

## Assets

The following image demonstrates what the museum visitor sees if they try to access the gallery page without logging in:

![On a museum page, under the gallery name and operating hours, there is a message to login.](./Images/01-Unauthorized-Gallery.jpg)

---

## 💡 Hints

* You will need to create a user to test out the routes. Feel free to create your own user, or use these credentials to sign up: 

  * `username`: "Sam", `email`: "sam@email.com", `password`: "password1234"

* If the session variables are set up when the user is created or logged in, which file would hold that info?

* How can the templates know if the user is logged in or not?

* What built-in helper method will help us render specific content depending on whether the user is logged in or not?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* What is the lifecycle of a session?

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2020 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
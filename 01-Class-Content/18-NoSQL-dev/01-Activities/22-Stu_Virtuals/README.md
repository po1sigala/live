# 🏗️ Create a Virtual

Work with a partner to implement the following user story:

* As a developer, I want to implement a Mongoose virtual in my schema to get and set data, but not persist that data to the database so that I can get and set computed properties on documents.

## Acceptance Criteria

* It's done when I have created a new `Schema` called `userSchema` with a `name` and `age` attribute.

* It's done when I have set the vale of the `name` attribute to an object containing two more attributes: `first` and `last`.

* It's done when I have defined a new `Model` for a `User` that makes use of the `userSchema` made in step 1.

* It's done when I have defined a virtual property on the `userSchema` called `fullName` that will get the `first` and `last` attributes and return a string containing the full name of the user.

* It's done when I have defined a `set()` method on the `fullName` virtual that takes a string containing the full name of the user and sets the virtual attribute values for `first` and `last`.

* It's done when I have ran the code by running `npm start` to see the desired output below:

    ```sh
    > node index

    userSchema full name getter: Ada Lovelace
    userSchema full name setter: Grace Hopper
    ```

## 💡 Hints

What method do we use on a Mongoose schema to create a virtual property?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* What are some of the limitations of Mongoose virtuals as they relate to queries?

Use [Google](https://www.google.com) or another search engine to research this.

---
@TODO © YEAR Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
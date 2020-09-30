# 🏗️ Implement Object Instances with Polymorphism

Work with a partner to implement the following user story:

* As a developer, I want to use *polymorphism* to create objects that have mostly similar functionality

## Acceptance Criteria

* It's done when the app create a parent class called `Developer`
* The `Developer` class should have a method called `sayHi` which returns a string saying the developers name, and hello

    ```
    `Hey! my name is ${this.developerName} 👋`
    ```

* It's complete when the file contains two classes, `Frontend` and `Backend` that extend from `Developer`
* It's done when the `Frontend` class has a method called `saySkill` that is unique to that class. It should return something like:
    ```
    Hey! my name is Dave 👋. I code with Typescript.
    ```
* It's done when the `Backend` class has a method called `code` that is unique to that class. It should return something like:
    ```
    Hey! my name is John 👋. I would write something like `SELECT * FROM users;`
    ```
* It's complete when you create three variables that are instances of each class you have made
* It's done when you have the three objects you've created execute the `sayHi` method
* It's done when you execute `code` and `saySkill` methods from the instances you have created for `Backend` and `Frontend`

## 💡 Hints

* How could we use the `extends` keyword to inherit methods from a parent class?

* How could the `super` give us access variables and methods from the constructor class?


## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* How could you add a method to a class after it has been defined? Is there a way you could use access the prototype to add an additional method?

Use [Google](https://www.google.com) or another search engine to research this.

---
@TODO © 2020 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
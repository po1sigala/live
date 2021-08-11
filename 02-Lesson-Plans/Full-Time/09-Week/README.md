# Unit 17 & 18 Instructor Overview: Computer Science for JavaScript and NoSQL

## Overview

In Unit 17, we will shift gears a bit to introduce students to general computer-science concepts as they relate to JavaScript. The end goal is to prepare students for the technical interview portion of the job interview process. While still project-based, this will be a more concept-dense unit than students are accustomed to.

We will dissect JavaScript and review how code executes at a granular level. We will also learn about closures and how we can leverage them in our code. We will compare inheritance and composition in application design. And we will review search algorithms and recursion in JavaScript. 

For the Unit 17 mini-project, students will practice the technical interview portion of a mock interview for a web-developer job with their peers. They'll address topics that are foundational to improving code performance and commonly found in technical interviews.

In Unit 18, we will be introducing students to the NoSQL database with MongoDB and Mongoose. We'll also be showing students how to store data in IndexedDB.

Refer to the Class Content Unit Overview for [Unit 17](../../../01-Class-Content/17-CS/README.md) and [Unit 18](../../../01-Class-Content/18-NoSQL/README.md) for detailed information on key topics, learning objectives, and homework.

## Instructor/TA Notes

* In Unit 17, we will explore JavaScript execution and data structures. To prepare, review concepts related to [execution context vs. scope](https://blog.kevinchisholm.com/javascript/difference-between-scope-and-context/) and the [JavaScript execution process](https://www.youtube.com/watch?v=8aGhZQkoFbQ). To explain JavaScript execution, you should be familiar with the following terminology: thread of execution, execution context, scope chain, event loop, callback queue, and call stack.

* Some activities use a testing library to debug or build code. Lesson content moves fluidly between the browser and Node.js, so familiarize yourself with when you'll use `npm install` to run the test suites. 

* We teach advanced JavaScript concepts including closures, classes, and factory functions. Take some time before class to review these subjects so you are prepared for questions about lexical environment, composition, and inheritance. Some students might have a hard time understanding these concepts. Encourage them to be patient with themselves, and remind them that the best way to understand these topics is through coding practice. 

* We will focus primarily on algorithms. To prepare, review the algorithms in the [Resources](#resources) section. Students might struggle to understand some of the algorithms, so encourage patience, practice, asking questions, and seeking resources.

* The Unit 17 mini-project is a departure from past projects in that it is an interactive mock interview with a small group of peers. Encourage students to take the mini-project seriously. The main objective is to practice technical communication in preparation for the real-life interview process. Be sure to check on students frequently to motivate them. Add a personal story about any technical interviews you've done if possible.

* If students struggle with the `bash shell` activity, `27-Evr_Shell`, walk through it with them using the talking points provided. Otherwise, support the students as they work on the activity and briefly review it at the end. 

* In Unit 18, you'll start working with NoSQL databases using MongoDB. Be sure to have MongoDB installed on your computer. Follow the [MongoDB installation guide on The Full-Stack Blog](https://coding-boot-camp.github.io/full-stack/mongodb/how-to-install-mongodb) to install MongoDB on your computer.

* Note that students with MacOS running Catalina may need to use brew tap to install MongoDB. Refer to this [blog post about MongoDB's Brew Tap](https://www.mongodb.com/blog/post/mongodbs-official-brew-tap-now-open-and-flowing)

* When working with IndexedDB, make sure you refresh and or delete your database in IndexedDB in between activities.

## Career Connection

* Remind students that related career services material can be found in their Career Connection folder for [Unit 17](../../../01-Class-Content/17-CS/04-Career-Connection/README.md) and [Unit 18](../../../01-Class-Content/18-NoSQL/04-Important/CAREER-CONNECTION.md).

* If you'd like more information on career services, visit the [career services resources page](https://careernetwork.2u.com/).

## Heads-Up

* In Unit 19, students will learn about measuring and optimizing the performance of web applications, as well as learning how to create Progressive Web Applications (PWAs). 

* In Unit 20, you will build on React foundations, and guide students through application development using three-layer MERN architecture.  You will also introduce students to the GraphQL Playground and Apollo Server. If you are new to the GraphQL and the GraphQL Playground or Apollo Server, please refer to the Apollo Docs on GraphQL Playground and the [Apollo Docs on introduction to Apollo Server](https://www.apollographql.com/docs/apollo-server/).

>> Important: The GraphQL activities and instructor demonstrations require a minimum npm version of 7.0.0 or greater. Prior to class, please be sure to check your npm version and update if needed. Refer to the [NPM docs on updating to latest stable version.](https://docs.npmjs.com/try-the-latest-stable-version-of-npm).

## Helpful Links

This section contains links to this unit's lesson plans, homework, slide decks, algorithms, and resources.

### Lesson Plans

  * [09.1 Lesson Plan](./01-Day/01-Day-LessonPlan.md)

  * [09.2 Lesson Plan](./02-Day/02-Day-LessonPlan.md)
  
  * [09.3 Lesson Plan](./03-Day/03-Day-LessonPlan.md)

  * [09.4 Lesson Plan](./04-Day/04-Day-LessonPlan.md)
  
  * [09.5 Lesson Plan](./05-Day/05-Day-LessonPlan.md)

### Homework

  * [Unit 17 Homework](../../../01-Class-Content/17-CS/02-Homework)

  * [Unit 18 Homework](../../../01-Class-Content/18-NoSQL/02-Homework)

### Slide Decks

  * [Unit 17: Computer Science for JavaScript](https://docs.google.com/presentation/d/1oK8WB9pt8GfraNTsWbPNWMFpBYzXe_URem6Ch3oq9eo/edit?usp=sharing)

  * [Unit 18: Intro To MongoDB](https://docs.google.com/presentation/d/18si_kQgZc7lVVNk1zRoEF4RpJN5cB6hsLa9PqX0fPc8/edit?usp=sharing)

### Algorithms

Unit 17:

  * [01: Reverse Words](../../../01-Class-Content/17-CS/03-Algorithms/01-reverse-no-built-in)

  * [02: Left Rotation](../../../01-Class-Content/17-CS/03-Algorithms/02-left-rotation)

    * 📹 [Let's Code Left Rotation!](https://2u-20.wistia.com/medias/kfyhj4z6fn)

  * [03: Reverse in Place](../../../01-Class-Content/17-CS/03-Algorithms/03-reverse-in-place)

Unit 18:

  * [01-valid-brackets](../../../01-Class-Content/18-NoSQL/03-Algorithms/01-valid-brackets)

  * [02-min-increment-for-unique](../../../01-Class-Content/18-NoSQL/03-Algorithms/02-min-increment-for-unique)

  * [03-peak-finder](../../../01-Class-Content/18-NoSQL/03-Algorithms/03-peak-finder)

### Resources

  * [Global Execution Context](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#global_context)

  * [Functional Execution Context](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#Function_context)

  * [What Is the Event Loop?](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

  * [Scope vs. Context](https://blog.kevinchisholm.com/javascript/difference-between-scope-and-context/)

  * [Data Structures](https://en.wikipedia.org/wiki/Data_structure)

  * [Event Loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#Event_loop)

  * [Higher Order Functions](https://eloquentjavascript.net/05_higher_order.html#h_xxCc98lOBK)

  * [Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

  * [Composition Over Inheritance](https://en.wikipedia.org/wiki/Composition_over_inheritance)

  * [Practical Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures/#Practical_closures)

  * [Linear Search](https://en.wikipedia.org/wiki/Linear_search)

  * [Recursion](https://en.wikipedia.org/wiki/Recursion)

  * [Binary Search](https://en.wikipedia.org/wiki/Binary_search_algorithm)

  * [Big O Notation](https://en.wikipedia.org/wiki/Big_O_notation)

  * [Merge Sort](https://en.wikipedia.org/wiki/Sorting_algorithm#Merge_sort)

  * [Bubble Sort](https://en.wikipedia.org/wiki/Sorting_algorithm#Bubble_sort)

  * [Quick Sort](https://en.wikipedia.org/wiki/Sorting_algorithm#Quicksort)

  * [MongoDB Installation Guide](https://coding-boot-camp.github.io/full-stack/mongodb/how-to-install-mongodb)

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

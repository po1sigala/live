# Unit 12 Instructor Overview: SQL

## Overview

This week, you’ll introduce students to a final layer of the tech stack: the database. You will teach students how to design a MySQL database that can store large amounts of data, as well as introduce them to the tools to create, read, update, and delete data. You will also cover connecting a MySQL database to a Node.js application using an Express.js server.

Refer to the [Class Content Unit Overview](../../../01-Class-Content/12-SQL/README.md) for detailed information on key topics, learning objectives, and homework.

## Instructor/TA Notes

* Make sure that you have installed MySQL on your machine before class, and be prepared to troubleshoot any issues that students might have encountered during setup. For more information, refer to the [MySQL installation page](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/).

* Have your MySQL password ready so that you can use MySQL Shell to demonstrate the activities.

* Make sure that students can initialize the MySQL command-line prompt using the command `mysql -u root -p`. They will need their MySQL password.

  * If macOS users get a `command not found` error message, they might need to add the following into their `.bash_profile` or `.zshrc` file: `export PATH="${PATH}:/usr/local/mysql/bin/"`.

  * If Windows users get a `command not found` error, refer them to the [MySQL documentation on customizing the PATH](https://dev.mysql.com/doc/mysql-windows-excerpt/5.7/en/mysql-installation-windows-path.html).

* For the homework this week, students will use MySQL, Node.js, and Inquirer to build a command-line application. For a refresher, refer students to the [npm documentation on Inquirer](https://www.npmjs.com/package/inquirer).

## Career Connection

* Remind students that related Career Services material can be found in their [Career Connection folder](../../../01-Class-Content/12-SQL/04-Career-Connection/README.md).

* If you'd like more information on Career Services, visit the [Career Services resources page](https://mycareerspot.org/).

## Heads-Up

During the next unit, students will learn to use [Sequelize](https://sequelize.org/), an object-relational mapping (ORM) library, to simplify their MySQL queries and easily handle data in a full-stack app.

## Helpful Links

This section contains links to this unit's lesson plans, homework, slide decks, algorithms, and resources.

### Lesson Plans

* [12.1 Lesson Plan](./01-Day_Intro-MySQL/12.1-LESSON-PLAN.md)

* [12.2 Lesson Plan](./02-Day_MySQL-Node/12.2-LESSON-PLAN.md)
  
* [12.3 Lesson Plan](./03-Day_Big-Data-MySQL/12.3-LESSON-PLAN.md)

### Homework

* [Unit 12 Homework](../../../01-Class-Content/12-SQL/02-Homework)

### Slide Decks

* [Unit 12: SQL](https://docs.google.com/presentation/d/1In4Iv-dAv3A3BiU88duttuXpEPcvbr4Qf4RniD8EZsE/edit?usp=sharing)

### Algorithms

* [01: Multiply into 20](../../../01-Class-Content/12-SQL/03-Algorithms/01-multiply-into-20)

  * 📹 [Let's Code Multiply into 20!](https://2u-20.wistia.com/medias/joflnt5aqv)

* [02: Zeroes and Ones](../../../01-Class-Content/12-SQL/03-Algorithms/02-zeroes-and-ones)

* [03: Merge Sorted](../../../01-Class-Content/12-SQL/03-Algorithms/03-merge-sorted)

### Resources

* 📖 [MySQL documentation on getting started](https://dev.mysql.com/doc/mysql-getting-started/en/)
  
* 📖 [npm documentation on MySQL2](https://www.npmjs.com/package/mysql2)

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

# Unit 22 Instructor Overview: State

## Overview

In this unit, you will introduce complex state management techniques and review the key tools needed to build a MERN-stack app with routing and authentication. Students will also be introduced to the Stripe payment platform.

Refer to the [Class Content Unit Overview](../../../01-Class-Content/22-State/README.md) for detailed information on key topics, learning objectives, and homework.

## Instructor/TA Notes

* Be sure to prepare and review the activities before class. Try to anticipate any questions that students might have.

* In the state management activities, emphasis is placed on having the students refer to the documentation. Explain that on the job, it is important to be able to use documentation to find information on specific issues and then apply that information to their own code.

* Many of the activities this week allow students to review the skills needed for final projects. Because the code and activities will be familiar, encourage students to use activity time to explore the code, ask questions, and build on their existing skills. Encourage students who need an additional challenge to explore the Bonus.

* **Important**: React Router recently [upgraded to version 6](https://reactrouter.com/docs/en/v6/upgrading/v5#upgrade-to-react-router-v6) which includes breaking changes with `<Switch>`, `<Redirect> ` and other elements. The content of this week's activities uses React Router version 5. To make sure that students can follow along with activities -- as currently written -- please instruct students to use this npm command to install React Router version 5: `npm install react-router-dom@5`.

* The GraphQL activities and instructor demonstrations require a minimum npm version of 7.0.0 or greater. Prior to class, please be sure to check your npm version and update if needed. Refer to the [NPM docs on updating to latest stable version.](https://docs.npmjs.com/try-the-latest-stable-version-of-npm).

* In `24-Stu_Stripe` students are introduced to implementing an e-commerce solution in an existing MERN app using Stripe. This activity serves two learning purposes. First, it is important that students practice reverse engineering an unfamiliar codebase since they are likely to encounter similar e-commerce integrations in the workplace. Second, as the goal of the homework is to refactor an authentic existing MERN app with a Stripe integration, this activity provides the students the needed exposure to Stripe prior to doing the homework. For more information about integrating Stripe, refer to [Stripe docs on getting up and running](https://stripe.com/docs/development/quickstart).

* In this week's homework, the students will refactor the e-commerce platform from [Activity 26](../../../01-Class-Content/22-State/01-Activities/26-Stu_Actions-Reducers/Unsolved) so that it uses Redux. Students can access the code in the class repo or [download the activity code here](https://static.fullstack-bootcamp.com/fullstack-ground/unit-22/26-Stu_Actions-Reducers.zip).

* Be sure to create a practice React app before class by navigating to `01-Class-Content/22-State-dev/01-Activities` and running `npx create-react-app 00-practice-app`.

* If you encounter an error regarding conflicting versions of `eslint` when setting up the practice React app, run `echo "SKIP_PREFLIGHT_CHECK=true" > .env`

* Before class, install the [React developer tools extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi). It will be used in the `O1-Ins_Providers` demo.

## Career Connection

* Remind students that related career services material can be found in their [Career Connection folder](../../../01-Class-Content/22-State/04-Career-Connection/README.md).

* If you'd like more information on career services, visit the [career services resources page](https://careernetwork.2u.com/?utm_medium=Academics&utm_source=boot_camp/).

## Heads-Up

In Week 23, students will begin work on their final projects. These projects are student-driven; they will be responsible for forming their own teams, brainstorming app ideas, and developing a full-stack app. Encourage students to start forming groups and brainstorming ideas for their apps, and be prepared to help anyone who is struggling to find a group or project idea.

There are occasional circumstances, such as an illness or a personal emergency, which might force a student to complete a group project on their own. In these circumstances, as the instructor, you will meet with the student and SSM to determine if completing the project independently is the best path forward. If it is, you will share adjusted project requirements and a grading rubric with the student.

## Helpful Links

This section contains links to this unit's lesson plans, homework, slide decks, algorithms, and resources.

### Lesson Plans

  * [22.1 Lesson Plan](./01-Intro-State/22.1-LESSON-PLAN.md)

  * [22.2 Lesson Plan](./02-MERN-Review/22.2-LESSON-PLAN.md)

  * [23.3 Lesson Plan](./03-MERN-Redux/22.3-LESSON-PLAN.md)

### Homework

  * [Unit 22 Homework](../../../01-Class-Content/22-State/02-Homework)

### Slide Decks

  * [Unit 22: State](https://docs.google.com/presentation/d/1j5Y-MLor_nfMfQA3Znt_MOTRPAVRbsRFGFFt38iN6p4/edit?usp=sharing)

### Algorithms

  * [01: Roman Numeral to Int](../../../01-Class-Content/22-State/03-Algorithms/01-roman-to-int)

  * [02: Rotation Point](../../../01-Class-Content/22-State/03-Algorithms/02-rotation-point)

    * 📹 [Let's Code Rotation Point!](https://2u-20.wistia.com/medias/92nkaslwg8)

  * [03: Simplify Path](../../../01-Class-Content/22-State/03-Algorithms/03-simplify-path)

### Resources

  * [Context API documentation](https://reactjs.org/docs/context.html)

  * [Redux documentation](https://redux.js.org/)

  * [Stripe documentation](https://stripe.com/docs)

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

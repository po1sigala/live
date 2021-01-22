# 01.3 Full-Time Lesson Plan: Responsive Design

## Overview

In today's class, students will implement media queries and flexbox to create a responsive web design.

## Instructor Notes

* In this lesson, students will complete activity `11-CSS_Positioned_Activity` in unit 1 and `01-Ins_Media-Query-Screen` through `10-Stu_Box-Styling` in unit 2.

* Be sure to prepare and read over the activities before your class begins. Try to anticipate any questions students may have.

* Remind students to do a `git pull` of the class repo to have today's activities ready and open in VS Code.

* When reviewing activities, ask for volunteers to share their solutions or to walk through the solution line by line.

* If you are comfortable doing so, live-code the solutions to the activities. If not, just use the solutions provided and follow the prompts and talking points for review.

* Let students know that the Bonus at the end of each activity is not meant to be extra coding practice but instead is a self-study on topics beyond the scope of this unit, for those who want to further their knowledge.

## Sample Class Video (Highly Recommended)

* To view an example class lecture visit (Note video may not reflect latest lesson plan): [Class Video](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=a2e0037f-9a39-4942-83bb-3b555d224a64)

## Learning Objectives

By the end of class, students will be able to do the following:

* Use HTML/CSS for layout design and element positioning

* Implement basic media queries for screens.

* Implement a CSS grid to accomplish a complex layout.

* Implement a flexbox layout for a responsive web design.

* Use flexbox justification and alignment properties for spacing.

## Time Tracker

| Start  | #  | Activity Name                             | Duration |
|---     |--- |---                                        |---       |
| 10:00AM| 1  | Instructor Do: CSS Recap                  | 0:10     |
| 10:10AM| 2  | Instructor Demo: CSS Positioning Slides   | 0:15     |
| 10:25AM| 3  | Partners Do: CSS Positioning              | 0:30     |
| 10:55AM| 4  | Instructor Review: CSS Positioning        | 0:10     |
| 11:05AM| 5  | FLEX                                      | 0:45     |
| 11:50PM| 6  | Instructor Do: Stoke Curiosity            | 0:10     |
| 12:00PM| 7  | BREAK                                     | 0:30     |
| 12:30PM| 8  | Instructor Demo: Media Query Screen       | 0:05     |
| 12:35PM| 9  | Student Do: Media Query Screen            | 0:15     |
| 12:50PM| 10 | Instructor Review: Media Query Screen     | 0:10     |
| 1:00PM | 11 | Instructor Demo: Flexbox Layout           | 0:05     |
| 1:05PM | 12 | Student Do: Flexbox Layout                | 0:15     |
| 1:20PM | 13 | Instructor Review: Flexbox Layout         | 0:10     |
| 1:30PM | 14 | Instructor Demo: Responsive Design        | 0:05     |
| 1:35PM | 15 | Student Do: Responsive Design             | 0:15     |
| 1:50PM | 16 | Instructor Review: Responsive Design      | 0:10     |
| 2:00PM | 17 | Instructor Demo: Flexbox Placement        | 0:05     |
| 2:05PM | 18 | Student Do: Flexbox Placement             | 0:15     |
| 2:20PM | 19 | Instructor Review: Flexbox Placement      | 0:10     |
| 2:30PM | 20 | END                                       | 0:00     |

---

## Class Instruction

### 1. Instructor Do: CSS Recap (10 min)

* Quickly recap the concepts behind CSS.

* Have students answer any questions on screen to those closest to them. (Get them comfortable with helping one another.)

* The point here is to just give students a refresher. Let them know we will be building our CSS skills for the next few weeks so there is plenty of time to get good at it.

### 2. Instructor Demo: CSS Positioning Slides and Demo (15 min)

* Go through the slides on CSS Positioning one by one.

* Point out the differences between the various position types:

  * `relative`: Positions elements relative to their static location in the document. These elements behave with and interact with other elements the same way they would as if they were positioned statically, except that you can use the `top`/`right`/`bottom`/`left` properties to move the elements _after_ they have been placed into the document flow.

  * `absolute`: Positions elements relative to the nearest positioned ancestor (non-`static`). They are taken out of the flow of the document, taking up no space when placing other elements. These elements will move in the viewport as you scroll (unlike fixed).

  * `fixed`: Positions elements relative to the top left of the browser window. Similar to `absolute`, except the containing block is the whole viewport. These elements will remain in the same place in the viewport as you scroll.

  * `z-index`: Allows us to position elements on top of one another.

  * `display: none`: Allows us to hide specific elements from the view. Useful because it can activate and deactivate elements. (Compare with `visibility: hidden;`, which also hides elements but not the space they take up.)

* When prompted for the `Demo Time`, open [10-CSS_PositionedLayout/main.html](../../../../01-Class-Content/01-HTML-Git-CSS/01-Activities/10-CSS_PositionedLayout/main.html) in both the browser and in your editor.

* Point out that this currently uses static (default) positioning.

    ![3-Positioning_1](Images/3-Positioning_1.png)

* Then go through the process of changing the active stylesheet so that each of the other forms of positioning are used.

* If asked about the `reset.css`, feel free to say something along the lines of

  > We'll talk about the reset more in the next class, but for now just know it makes it so that the default browser `padding`s and `margin`s don't exist (that way we can more easily see the effects of positioning).

* Show students both the CSS used and the impact on the HTML.

  ![3-Positioning_2](Images/3-Positioning_2.png)

  * Demo that `top`, `left`, `bottom`, and `right` only work on positioned elements, not static ones. You can demonstrate this by using chrome dev tools to set `position: static;` on one of the boxes.
  * Point out also that the elements following the relatively positioned elements (boxes 2-4) behave as if box 1 were in its static position. Explain that this is because `top`/`right`/`bottom`/`left` properties are applied only _after_ the element has been placed in the document flow.

  ![3-Positioning_3](Images/3-Positioning_3.png)

  * When discussing absolute positioning, demo removing the `position: relative;` in-browser with the developer tools. Show them that it will absolutely position based on the nearest positioned ancestor, using the viewport as the basis if none of the ancestors are positioned (demo this by removing the positioning on `.box-set`).
  * Depending on time, You may also want to show how the elements pile on top of each other if you remove the `top`/`left`/`bottom`/`right` properties - this demonstrates that the elements are removed from the flow of the document.
  * `absolute` is worth spending a little bit more time on, as it arguably the most complex (and sets the tone for `fixed` positioning)

  ![3-Positioning_4](Images/3-Positioning_4.png)

* Slack students the entire folder (zipped) when done with this activity.

### 3. Partners Do: CSS Positioning Activity (30 min)  

* Introduce the next activity. Either by using the slide or by opening the file 
[11-CSS_Positioned_Activity/positioning.html](../../../../01-Class-Content/01-HTML-Git-CSS/01-Activities/11-CSS_Positioned_Activity/Solved/positioning.html) 
in the browser, show students what they will be building in the next activity.

![4-PositioningActivity](Images/4-PositioningActivity.png)

* Then Slack out the following instructions.

  * **Instructions:**

    * Work with the same or different partners on this activity, but make sure each member of the group is typing out their own code!

    * Create a file called `positioning.html` and a file called `positioning.css`.

    * Using HTML/CSS, create the layout shown on the screen.

    * For reference, the colors used on the screen are `#eee` and `#999`.

    * For further reference, you can generate paragraphs of lorem ipsum text using <http://www.lipsum.com/feed/html>. You need to make this page scroll to see how the fixed position element behaves.

    * HINT: Use the code from the last few activities to help get you started.

### 4. Instructor Review: CSS Positioning (10 min)

* Discuss the solution from the previous activity. When appropriate, have students help explain code back to you. (Example: You may ask students to help you comment various pieces of the code.)

* Key points in describing the HTML:

  * How we created a `div` to hold our content.

  * How we created `divs` to hold the `fixed`, `relative`, and `absolute` content.

  * How we used specific `id` tags to attach the CSS to.

     ![4-PositioningActivity_2](Images/4-PositioningActivity_2.png)

* Key points to explain in describing the CSS Solution:

  * How we once again used **border-box** (this just means that the width and height won't include the margin. Not a big deal).

  * `#fixed` element has a position of `fixed`.

  * Wrapper has a set `width`.

  * `#relative` and `#absolute` have the relative position values.

     ![4-PositioningActivity_3](Images/4-PositioningActivity_3.png)

* See if there are any lingering questions. Then Slack out this solution. Let students know to try and re-practice this activity at home. It's a good one.

### 5. FLEX (45 min)

* This time can be utilized for reviewing key topics learned so far in this unit or working on homework.

### 6. Instructor Do: Stoke Curiosity (10 min)

* Open the [slide deck](https://docs.google.com/presentation/d/1ZQE4ze6uHbYu-M-oQ3UBfqTkCGfhHU6ZhLDL8rN-3fg/edit?usp=sharing) and follow these prompts on their corresponding slides:

  * **Advanced CSS**: This unit is all about deepening our knowledge of CSS in order to build attractive, responsive UIs for our applications.

  * **Why do we use CSS?** CSS allows us to make plain HTML content in our applications look clean and presentable to users.

  * **What are some features of a well-designed app?**
  
    * Well-designed apps should have a mobile-responsive layout, good use of color contrast and space, readable font sizes, accessible design, and features that enhance the user's experience.

  * **What is our role in implementing these features?**
  
    * We are not graphic designers, but as web developers, it is our job to build a user interface that is usable and visually appealing to the app's target audience. 
  
    * We need to make sure that our app follows accessibility standards, performs well on both mobile and desktop devices, and is easy to maintain.

  * **Can we build well-designed apps with CSS?** 
  
    * Yes, we can! Browsers are constantly adding support for more CSS-based tools that we can use. 

    * Those tools include flexbox and grid for responsive layouts, transitions for animating the user interface, new units of size for developers to use, image color filtering, and more!

  * **How can we learn to build these features?** 
  
  * CSS is a unique language, as it gives the developer many options for how to accomplish a goal. The best way to build CSS knowledge is to build apps and experiment with what does or doesn't work! 
  
  * Try some of the following techniques to learn CSS:
  
    * Read the official documentation and practice with the provided examples.

    * Reverse-engineer finished code to see how it was created.

    * Build something from scratch.

    * Debug a broken app using Chrome DevTools.
  
    * And most importantly, ask questions!

  * In this unit, we will learn how to build responsive web designs, perform a CSS reset, and implement CSS custom properties and selectors.

  * Let's take a quick look at the mini-project that we will complete at the end of this unit.

* Open `28-Stu_Mini-Project/Solved/index.html` in your browser and open Chrome DevTools to demonstrate simulating a mobile viewport.

  * To access the Chrome DevTools, we can press Cmd+Opt+I on macOS or Ctrl+Shift+I on Windows.

  * We can enable the device emulator by clicking the "Toggle device toolbar" icon in the top-left.

  * We can select Responsive and drag the edges of the screen to any size we want. Or we can choose from the drop-down list of popular devices.

  * 🔑 We are viewing the mini-project that we will be able to build by the end of this unit.

  * 🔑 The mini-project is a webpage that holds a collection of CSS snippets that we learned throughout this unit. It's like a CSS cheat sheet!

  * 🔑 Notice what happens to the layout when we change the screen size. The columns shift and stack as the screen gets smaller. This is called **responsive web design**. This is accomplished by using media queries and flexbox, which we will cover today.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are we learning?

  * 🙋 We are deepening our knowledge of CSS and learning about responsive web design.

  * ☝️ How does this project build on or extend previously learned material?

  * 🙋 We are continuing to build on our knowledge of HTML and CSS.

  * ☝️ How does this project relate to your career goals?

  * 🙋 Learning more advanced CSS with attractive layouts creates webpages that stand out. Responsive web design is crucial because users increasingly access webpages from devices with varying screen sizes, resolutions, and orientations. To maintain a good user experience, developers must be able to design webpages that are attractive and accessible from any platform.

* Answer any questions before proceeding to the next activity.

### 7. BREAK (30 min)

### 8. Instructor Demo: Media Query for Screen (5 min) 

* Open `01-Ins_Media-Query-Screen/index.html` in your browser and demonstrate the following:

  * 🔑 We see a dark-blue header, a dark-tan navbar, a green sidebar, and a white body section. We also see white image placeholders. 

  * 🔑 When we open Chrome DevTools and start shrinking the screen size, these components change colors! 

  * 🔑 First, the header will change to a deep-red color when the screen size gets to 992px. Then, the navbar will change to a dark-pink color when the screen size gets to 768px. Finally, the image placeholders will change to a blue color when the screen size gets to 576px or smaller.

  * This is all made possible by using media queries.

* Open `01-Ins_Media-Query-Screen/assets/css/style.css` in your IDE and explain the following:

  * When we use `max-width` as the breakpoint, we need to go from widest to narrowest to avoid any conflicts.

  * We use `@media screen` and then set the breakpoint using `max-width`:

    ```css
    @media screen and (max-width: 992px) 
    ```

  * Then we set the styles that will change at that breakpoint. For us, it was changing the header color:

    ```css
    @media screen and (max-width: 992px) {
      header {
        background: #772014;
      }
    }
    ```

  * For the breakpoint of 768px, we changed the navbar color:

    ```css
    @media screen and (max-width: 768px) {
      nav {
        background-color: #bb8588;
      }
    }
    ```

  * For the breakpoint of 576px, we changed the image placeholders' colors:

    ```cs
    @media screen and (max-width: 576px) {
      .sample-img {
        background-color: #8ac4ff;
      }
    }
    ```

  * Of course, we can change more than just the background colors when the screen size gets smaller. Do you remember what the layout of the page looked like when we shrank that screen size earlier?

* Go back to the `index.html` in the browser and demonstrate how squished the layout looks.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build the next activity?

  * 🙋 We would need to use media queries to change the width of the components so that they stack on top of each other when the screen size gets smaller.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `02-Stu_Media-Query-Screen/README.md`.

### 9. Student Do: Media Query for Screen (15 min) 

* Direct students to the activity instructions found in `02-Stu_Media-Query-Screen/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗️ Implement Media Queries for Screens

  Work with a partner to implement the following user story:

  * As an online shopper, I want to view products clearly on my mobile phone as well as my computer.

  ## Acceptance Criteria

  * It's done when the screen size is larger than 992px and the product cards on the screen are side by side.

  * It's done when I change the screen size to 992px or smaller, and the product cards on the screen split into two columns.

  * It's done when I change the screen size to 768px or smaller, and the product cards on the screen become stacked on top of each other.

  * Optional: Just for fun, change the background color of the header each time the product cards change layout. 

  ## Assets

  The following image demonstrates the web application's appearance at 992px or smaller:

  ![On an online store's webpage, four cards are split into two rows and two columns.](./Images/01-product-columns.png)

  The following image demonstrates the web application's appearance at 768px or smaller:

  ![On an online store's webpage, two cards are stacked on top of each other.](./Images/02-products-stacked.png)

  ---

  ## 💡 Hints

  * What is the media feature we use to check for the maximum width of the display area?

  ## 🏆 Bonus

  If you have completed the activity and want to further your knowledge, work through the following challenge with your partner:

  * What is mobile-first design?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* When breaking everyone into groups, remind students and TAs that questions on Slack or otherwise are welcome and will be addressed. It's a good way for your team to encourage and prioritize students who need extra help.

### 10. Instructor Review: Media Query for Screen (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with media queries for screen? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points (✔️):

  * ✔️ `@media screen`

  * ✔️ `width` of cards

* Open `02-Stu_Media-Query-Screen/Solved/assets/css/style.css` in your IDE and explain the following: 

  * We are given an online store webpage with product cards. When the screen size gets smaller, the product cards shift so that they are clearly viewable on a smaller screen.

  * The cards lie side by side in a row. If we look at the following code, for when the screen size is larger than 992px wide, we see that the cards have a width of 25%, because there are four cards:

    ```css
    .card {
      width: 25%;
    }
    ```

  * 🔑 But as the screen gets smaller, we need to have the cards stacked. So first, we use a media query with a breakpoint of 992px:

    ```css
    @media screen and (max-width: 992px)
    ```

  * 🔑 Then we give the cards a `width` of 50%, shown in the following example, which will cause half of the cards to stack beneath the other half:

    ```css
    @media screen and (max-width: 992px) {
      .card {
        width: 50%;
      }
    }
    ```

  * For the breakpoint of 768px, we go back to allowing the card width to be 100%:

    ```css
    @media screen and (max-width: 768px) {
      .card {
        width: 100%;
      }
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is a more efficient way to control the layout of a webpage?

  * 🙋 We can use flexbox, which we'll cover in the next activity!

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 11. Instructor Demo: Flexbox Layout (5 min) 

* Open `03-Ins_Flexbox-Layout/index.html` in your browser and demonstrate the following:

  * 🔑 We see a simple header on top with four cards in the body section. The cards consist of just a header. But we see that the Camera card is larger than the rest.

* Open `03-Ins_Flexbox-Layout/assets/css/style.css` in your IDE and explain the following:

  * 🔑 To create a flex container, we set the value of the `display` property to `flex`:

    ```css
    main {
      display: flex;
    }
    ```

  * 🔑 To align the items and distribute the empty space between the child elements of the flex container, we use `justify-content`. There are different values we can assign, like `flex-start`, `flex-end`, `center`, `space-around`, `space-evenly`, and `space-between` which is what we've used in the following example:

    ```css
    .main-header {
      display: flex;
      justify-content: space-between;
    }
    ```

  * 🔑 When we want to control how the items will grow or shrink according to the available space, we can use the `flex` properties: `flex-grow`, `flex-shrink`, and `flex-basis`. Usually we just use the `flex` shorthand to set the three values of those properties in that order:

    ```css
    .card {
      /* A flex-basis of 200px sets the starting width */
      /* A flex-grow value of 1 allows the elements to evenly grow to fill the remaining space */
      flex: 1 0 200px;
    }

    .card.camera {
      /* With a flex-grow value of 2, this element grows twice as wide as others */
      /* The second value, flex-shrink, defines how the element will shrink if it can't fit */
      flex: 2 1 200px;
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build the next activity?

  * 🙋 We will need to use flexbox to implement a grid layout and ensure that all of the items are clearly shown on the page.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `04-Stu_Flexbox-Layout/README.md`.

### 12. Student Do: Flexbox Layout (15 min) 

* Direct students to the activity instructions found in `04-Stu_Flexbox-Layout/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🐛 Product Cards Run Off the Page

  Work with a partner to resolve the following issues:

  * As a user, I want to view all products in two or more rows.

  * As a user, I don't want to scroll horizontally to see additional products.

  ## Expected Behavior

  Product cards that don't fit within the first row should display on the next row.

  ## Actual Behavior

  Product cards run off the page in a single row.

  ## Assets

  The following image demonstrates the web application's appearance:

  ![On an online store's webpage, products are spread over two stacked rows of three cards each.](./Images/01-product-grid.png)

  ---

  ## 💡 Hints

  * What additional flexbox properties could help direct the behavior of child elements?

  ## 🏆 Bonus

  If you have completed the activity and want to further your knowledge, work through the following challenge with your partner:

  * By default, flexbox runs in rows, left to right. In what other directions could it run?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 13. Instructor Review: Flexbox Layout (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with flexbox layouts? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points (✔️):

  * ✔️ `display: flex`

  * ✔️ `flex-wrap: wrap`

* Open `04-Stu_Flexbox-Layout/Unsolved/index.html` in your browser and explain the following: 

  * Let's open Chrome DevTools and toggle the device toolbar. When we make the screen smaller, notice what happens to the header and the product cards. The text in the header is squished, and the product cards run off the page! 
  
  * So we know that the broken code that we need to debug and fix is the `.main-header` and the product cards in the `main` container.

* Open `04-Stu_Flexbox-Layout/Solved/assets/css/style.css` in your IDE and explain the following: 

  * 🔑 The `main` container and the `.main-header` already have the `display` property set to `flex`:

    ```css
    main {
      display: flex;
    }

    .main-header {
      display: flex;
    }
    ```

  * 🔑 We just need to set the `flex-wrap` property to `wrap` so that the elements are forced to wrap over to the next line if they don't fit:

    ```css
    main {
      display: flex;
      /* Forces elements to the next line if they don't fit */
      flex-wrap: wrap;
    }

    .main-header {
      display: flex;
      /* Forces elements to the next line if they don't fit */
      flex-wrap: wrap;
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ By default, flexbox runs in rows, left to right. Which other directions could it run in?

  * 🙋 Flexbox can also run from top to bottom in columns!

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 14. Instructor Demo: Responsive Design (5 min)

* Open `05-Ins_Responsive-Design/index.html` in your browser and demonstrate the following:

  * 🔑 The core concept of responsive design is that a webpage should adjust to all devices. In other words, a web app that is created with responsive design in mind will look good and function well no matter what device a user is on.

  * 🔑  Not only is responsive design better for the user, but the tools made available to us by CSS can also make development faster. This is because we don't have to write lines and lines of HTML in order to accommodate multiple devices. 

  * Let's open Chrome DevTools and shrink the screen size to see what happens to the page elements.

  * 🔑 When we get to 780px or smaller, we see that the navbar links stack on top of each other.

  * 🔑 We have also forced the sidebar to stack below the body instead of on top of it.

* Open `05-Ins_Responsive-Design/assets/css/style.css` in your IDE and explain the following:

  * We accomplished this by using media queries and flexbox properties! 
  
  * 🔑 We gave the `flex-direction` property of both `main` and `nav` a value of `column` so that the elements stack on top of each other:

    ```css
    @media screen and (max-width: 768px) {
      main,
      nav {
        flex-direction: column;
      }
    ```

  * 🔑 We forced the sidebar `aside` to stack below the body by assigning the `order` property a value of `2`:

    ```css
    aside {
      order: 2;
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build the next activity?

  * 🙋 We need to figure out which flexbox properties are being used at each breakpoint so that the layout changes at different screen sizes.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `06-Stu_Responsive-Design/README.md`.

### 15. Student Do: Responsive Design (15 min)

* Direct students to the activity instructions found in `06-Stu_Responsive-Design/README.md`.

* This activity won't require any coding, but instead students will need to reverse-engineer code and figure out what is allowing the layout to change at certain breakpoints. Guiding questions have been provided; students will need to write their answers as comments.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📐 Add Comments to Implementation of a Responsive Design

  Work with a partner to add comments describing the functionality of the code found in [Unsolved/assets/css/style.css](./Unsolved/assets/css/style.css).

  ---

  ## 🏆 Bonus

  If you have completed the activity and want to further your knowledge, work through the following challenge with your partner:

    * What other CSS property can we use to create responsive layouts?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 16. Instructor Review: Responsive Design (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with responsive web design using media queries and flexbox? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points (✔️):

  * ✔️ `display: flex`

  * ✔️ `flex-wrap`

  * ✔️ `flex-shrink`

  * ✔️ `justify-content`

  * ✔️ `flex` shorthand

  * ✔️ `flex-direction`

* Open `06-Stu_Responsive-Design/Solved/assets/css/style.css` in your IDE and explain the following: 

  * This activity didn't require any coding on our part. Instead we were given a fully functioning webpage, and we had to explain how it works! Through this kind of activity, we can improve our computational thinking skills. 

* Go through each question (🔑) in the `style.css` and call on students for the answers (🙋):

  * 🔑 What happens when we set the `display` property to `flex`, as shown in the following example?

      ```css
    nav {
      display: flex;
    }
    ```

  * 🙋 The `flex` container becomes flexible! The child items of the container all move into a row and take only as much space as they need to display their contents.

  * 🔑 What is the `flex-wrap` property?

  * 🙋 It specifies whether the flex items should wrap or not. The value can be set to `nowrap`, `wrap-reverse`, or `wrap`, like in the following example:

    ```css
    main {
      display: flex;
      flex-wrap: wrap;
    }
    ```

  * 🔑 What does the `flex-shrink` property specify?

  * 🙋 It specifies how much a flex item will shrink relative to the rest of the flex items. In this activity, we are telling the `footer` not to shrink as much as the other items by setting `flex-shrink` to `0`:

    ```css
    footer {
      flex-shrink: 0;
    }
    ```

  * 🔑 What does the `justify-content` property do?

  * 🙋 It aligns the flex items and distributes the empty space between them. In this activity, we are telling the product cards to be centered:

    ```css
    .products {
      flex: 4;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    ```

  * 🔑 What is the `flex` property a shorthand property for?

  * 🙋 It is a shorthand property for the `flex-grow`, `flex-shrink`, and `flex-basis` properties&mdash;in that order. In this activity, we are making the product cards not growable and not shrinkable, with an initial length of 400px:

    ```css
    .card {
      flex: 0 0 400px;
    }
    ```

  * 🔑 What does the `flex-direction` property define?

  * 🙋 It defines in which direction the container wants to stack its flex items. In this activity, we are telling the main body element and the navbar to stack vertically in a column:

    ```css
    @media screen and (max-width: 768px) {
      main,
      nav {
        flex-direction: column;
      }
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What other CSS property can we use to create responsive layouts?

  * 🙋 We can use the CSS grid layout.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on the CSS Flexible Box Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 17. Instructor Demo: Flexbox Placement (5 min) 

* Open `07-Ins_Flexbox-Placement/index.html` in your browser and demonstrate the following: 

  * 🔑 When we change the screen size, the two product cards remain centered at all times.

* Open `07-Ins_Flexbox-Placement/assets/css/style.css` in your IDE and explain the following:

  * 🔑 We have already set the `display` to `flex` and the `flex-direction` to `row`:

    ```css
    .products {
      display: flex;
      flex-direction: row;
    }
    ```

  * 🔑 Since we set the `flex-direction` to `row`, that becomes our main axis. We use `justify-content: center` to center the items along the main axis, like in the following example:

    ```css
    .products {
      display: flex;
      flex-direction: row;
      /* Centers along the main axis determined by flex-direction */
      justify-content: center;
    }
    ```

  * 🔑 Then we can use `align-items` to center them along the opposite axis (vertically):

    ```css
    .products {
      display: flex;
      flex-direction: row;
      /* Centers along the main axis determined by flex-direction */
      justify-content: center;
      /* Centers along the opposite axis */
      align-items: center;
    }
    ```
  
  * 🔑 Finally, we set the height according to the height of the viewport:

    ```css
    .products {
      display: flex;
      flex-direction: row;
      /* Centers along the main axis determined by flex-direction */
      justify-content: center;
      /* Centers along the opposite axis */
      align-items: center;
      /* Uses the height of the viewport */
      height: 100vh;
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build the next activity?

  * 🙋 We will need to use `justify-content` and `align-items` accordingly, to align the child elements correctly.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `08-Stu_Flexbox-Placement/README.md`.

### 18. Student Do: Flexbox Placement (15 min) 

* Direct students to the activity instructions found in `08-Stu_Flexbox-Placement/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🐛 Link and Button Placement is Incorrect

  Work with a partner to resolve the following issues:

  * As a user, I want the navigation links to be on the right side.

  * As a user, I want the slideshow buttons to be sized as smaller icons and centered alongside the image.

  ## Expected Behavior

  The navigation links are aligned to the right. The slideshow buttons are smaller than the image and are centered alongside the image.

  ## Actual Behavior

  The navigation links are aligned to the left. The slideshow buttons extend to the same height as the image.

  ## Assets

  The following image demonstrates the web application's appearance:

  ![The navigation links are aligned to the right, and the slideshow buttons are center aligned.](./Images/01-product-page.png)

  ---

  ## 💡 Hints

  * What are some of the other possible values for flexbox's alignment and justification properties?

  ## 🏆 Bonus

  If you have completed the activity and want to further your knowledge, work through the following challenge with your partner:

  * What e-commerce websites can you find that are using flexbox properties to help organize their components and layouts?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 19. Instructor Review: Flexbox Placement (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with flexbox justification and alignment? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points (✔️):

  * ✔️ `justify-content: flex-end`

  * ✔️ `align-items: center`

  * ✔️ `align-items: flex-start`

* Open `08-Stu-Flexbox-Placement/Unsolved/index.html` in your browser and demonstrate the following: 

  * We see that the navbar links are on the left, but we need them on the right side.

  * We also see the long slideshow buttons on both sides of the image. We need to make them smaller and centered.

* Open `08-Stu_Flexbox-Placement/Solved/assets/css/style.css` in your IDE and explain the following: 

  * 🔑 First we need to align the navbar links to the far right, or on the end of the navbar. We do that by giving the `justify-content` property a value of `flex-end`:

    ```css
    nav {
      display: flex;
      justify-content: flex-end;
    }
    ```

  * 🔑 Next we need to fix the slideshow buttons. The buttons are child items of `.product-slideshow` so we set that to `align-items: center` to have the buttons centered alongside the image:

    ```css
    .product-slideshow {
      display: flex;
      /* Align the child elements to the center of the parent */
      align-items: center;
    }
    ```

  * 🔑 Once we do that and compare to the screenshot, we notice that the image is also centered. But we want it to be aligned to the top, so we set the `align-items` property of `.product` to `flex-start` to match the image:

    ```css
    .product {
      display: flex;
      align-items: flex-start;
      width: 90%;
      margin: 1% auto;
    }
    ```

  * Lastly, this isn't something we had to do, but in the media query, notice how the buttons are removed when the screen size gets too small:

    ```css
    @media screen and (max-width: 768px) {
      .product-slideshow button {
        /* Removes the slideshow buttons from the document flow */
        display: none;
      }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What was the main axis of this page?

  * 🙋 The main axis ran top to bottom, which was defined by `flex-direction: column`. 

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on flexbox alignment and justification](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox#Alignment_justification_and_distribution_of_free_space_between_items), and stay for office hours to ask for help.

* Answer any questions before ending the class.

### 20. END (0 min)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this [anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

---
©2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

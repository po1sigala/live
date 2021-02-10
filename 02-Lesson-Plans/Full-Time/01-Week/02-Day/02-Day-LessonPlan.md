# 01.2 Full-Time Lesson Plan: Introduction to HTML and CSS

## Overview

In today's class, students will be continue working with HTML and be introduced to CSS, the fundamental technologies used to structure and style a webpage. Students will also learn about web accessibility and semantic HTML tags.

## Instructor Notes

* In this lesson, students will complete activities `09-Ins_CSS-color` through `21-Evr_Git-Guide`.

* During activities, encourage students to refer to the provided user stories and acceptance criteria&mdash;as introduced in the previous class&mdash;to identify the user's goal and the conditions that must be met for the solution to be accepted. Doing so will help reinforce their computational thinking skills and set them up for success in future coding challenges. 

* If students do not have the required tools set up on their local machines, refer them to office hours for assistance. A list of required tools and resources can be found in the [01.1 Lesson Plan](../01-Day/01-Day-LessonPlan.md). 

* Remind students to do a `git pull` of the class repo to have today's activities ready and open in VS Code. 

* If you are comfortable doing so, live-code the solutions to the activities. If not, just use the solutions provided and follow the prompts and talking points for review.

* Let students know that the Bonus at the end of each activity is not meant to be extra coding practice, but instead is a self-study on topics beyond the scope of this unit for those who want to further their knowledge.

## Learning Objectives

* Add custom color and fonts to a webpage using CSS properties.

* Select an HTML element to style using CSS selectors. 

* Link a CSS style sheet to an HTML file.

## Time Tracker

| Start  | #   | Activity Name                       | Duration |
|---     |---  |---                                  |---       |
| 10:00AM| 1   | Instructor Demo: Color              | 0:05     |
| 10:05AM| 2   | Student Do: Color                   | 0:15     |
| 10:20AM| 3   | Instructor Review: Color            | 0:10     |
| 10:30AM| 4   | Instructor Demo: Units and Font     | 0:05     |
| 10:35AM| 5   | Student Do:  Units and Font         | 0:15     |
| 10:50AM| 6   | Instructor Review: Units and Font   | 0:10     |
| 11:00AM| 7   | Instructor Demo: Selectors          | 0:05     |
| 11:05AM| 8   | Student Do:  Selectors              | 0:15     |
| 11:20AM| 9   | Instructor Review: Selectors        | 0:10     |
| 11:30AM| 10  | FLEX                                | 0:30     |
| 12:00PM| 11  | BREAK                               | 0:30     |
| 12:30PM| 12  | Instructor Do: Stoke Curiosity      | 0:10     |
| 12:40PM| 13  | Instructor Demo: HTML Display       | 0:05     |
| 12:45PM| 14  | Student Do: HTML Display            | 0:15     |
| 1:00PM | 15  | Instructor Review: HTML Display     | 0:10     |
| 1:10PM | 16  | Instructor Demo: CSS Box Model      | 0:05     |
| 1:15PM | 17  | Student Do: CSS Box Model           | 0:15     |
| 1:30PM | 18  | Instructor Review: CSS Box Model    | 0:10     |
| 1:40PM | 19  | Instructor Demo: CSS Positioning    | 0:05     |
| 1:45PM | 20  | Student Do: CSS Positioning         | 0:15     |
| 2:00PM | 21  | Instructor Review: CSS Positioning  | 0:10     |
| 2:10PM | 22  | Everyone Do: Git                    | 0:20     |
| 2:30PM | 23  | END                                 | 0:00     |

---

## Class Instruction

### 1. Instructor Demo: Color (5 min) 

* Welcome students to class.

* Open `09-Ins-CSS-Color/index.html` in your browser and demonstrate the following:

  * Color is one key way that web developers can add style and personality to a webpage. We can add color to HTML elements using CSS.

* Open `09-Ins-CSS-Color/index.html` in your IDE and demonstrate the following:
  
  * We have to set up the HTML before we can write the CSS to add color to the page.

  * 🔑 Like before, we use a `<link>` element inside the `<head>` to link the CSS style sheet to the HTML. Remember, `href` specifies the relative path to the CSS file, and the `rel` attribute defines the relationship:

    ```html
    <link rel="stylesheet" href="./assets/css/style.css">
    ```

  * As previously explained, we use `class` attributes to identify multiple elements for CSS styling:
  
      ```html     
      <section class="section box-orange">
      ``` 

  * And we use `id` to select a unique element for styling&mdash;which can be useful if we want to apply certain styling to only one specific element on the page: 

    ```html
    <section class="section" id="box-yellow">
    ```

* Open `09-Ins-CSS-Color/assets/style.css` in your browser and demonstrate the following:

  * 🔑 Again, a style sheet is a list of CSS properties that defines how HTML elements will be displayed.

  * 🔑 Each rule block comprises a selector that indicates the element or elements you want to style and the CSS properties to be applied. The name of the selector will match the name of the `class` or `id` attribute in your HTML. A `.` precedes the name of a class. A `#` precedes the id: 

    ```css
    .section {
      width: 200px;
      height: 200px;
    }
    ```

  * 🔑 We use the `color` CSS property to change the color of the text on a page. We use the `background-color` CSS property to add color to the entire width and height of the element:

    ```css
    .box-blue {
      color: white; 
      background-color: #0000ff;
    }
    ```

  * There are numerous ways to specify the colors that we want.

  * 🔑 We can specify a predefined color:

    ```css
    #box-yellow {
      color: purple;
      background-color: yellow;
    };
    ```
  
  * 🔑 Or we can use a hexadecimal code for a more specific color choice:

    ```css
    .box-orange {
      color: #0000ff;
      background-color: #ffa500;
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we use CSS to add color to webpages?

  * 🙋 We use the CSS properties `color` and `background-color` to apply colors to the HTML elements. We can specify predefined colors or use hex codes. 

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `10-Stu_CSS-Color/README.md`.

### 2. Student Do: Color (15 min) 

* Direct students to the activity instructions found in `10-Stu_CSS-Color/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📖 Add Color to HTML Page Using CSS

  Work with a partner to implement the following user story:

  * As a developer, I want to use CSS to style my HTML page. 

  ## Acceptance Criteria

  * It's done when the HTML page has been linked with the external CSS style sheet. 

  * It's done when `Section 1` has a background color of purple and the text is yellow.

  * It's done when `Section 2` and `Section 3` have a background color of blue and the text is orange.

  * It's done when the `container` has a background color of black.

  * It's done when `Section 4` and `Section 5` have a text color of white.

  * It's done when `Section 6` has a text color of yellow.

  * It's done when the finished page matches the mockup. 

  ## 📝 Notes

  Refer to the documentation: 

  [MDN Web Docs on color](https://developer.mozilla.org/en-US/docs/Web/CSS/color)

  [MDN Web Docs on getting started With CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/Getting_started)

  ## Assets

  The following image demonstrates the web application's appearance and functionality:

  ![A webpage features colored blocks that represent six sections, each displaying different background and text colors.](./assets/image-1.png)

  ---

  ## 💡 Hints

  How can we use the `<link>` element inside the `<head>` to connect the HTML to the CSS?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * How can we use color to help make your website accessible to users? What color combinations should be avoided? 

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 3. Instructor Review: Color (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with using CSS to add color to your webpage? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `<link>`

  * ✔️ `color`

  * ✔️ `background-color`

* Open `10-Stu_CSS-Color/Solved/index.html` in your IDE and explain the following: 

  * 🔑 We use a `<link>` element with an `href` attribute that indicates the relative path to connect the CSS to the HTML: 

    ```html
    <link rel="stylesheet" type="text/css" href="./assets/css/style.css">
    ```

  * We use `class` attributes to identify groups of elements that we want to style. To apply the style to just one unique element, we can use an `id` attribute: 

    ```html
    <section class="section" id="section-1">
    ```

* Open `10-Stu_CSS-Color/Solved/assets/css/style.css` in your IDE and explain the following: 

  * 🔑 We add the CSS property `color` to change the font color of `section-1` to yellow, and we add the `background-color` proprty to change the background to purple. We can either specify predefined colors or use hex codes: 

    ```css
    #section-1 {
      color: #ffff00;
      background-color: #800080;
    }
    ```

  * 🔑 We want to apply the same styling to `Section 2` and `Section 3`. Using a `class` allows us to write a single rule block and apply it to multiple elements: 

    ```css
    .section-blue {
      color: #ffa500;
      background-color: #0000FF;
    }
    ```

  * We use the `color` property to set the text color of the `container` to white. This will set the font color for `Section 4`, `Section 5`, and `Section 6` to white as well because they are nested inside the container. We also set the background color to black:

    ```css
    .container {
      color: white;
      background-color: black;
    }
    ```

* 🔑 By using a unique `id`, we can set the font of `Section 6` to yellow without changing any other elements: 

  ```css
  #section-6 {
    color: #ffff00;
  }
  ```

* We also use an `id` attribute to apply styling only to `Section 1`. This will make the background color purple and the text yellow. No other elements will be changed: 

  ```css
  #section-1 {
    color: #ffff00;
    background-color: #800080;
  }
  ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is the difference between `background-color` and `color`?

  * 🙋 We use `background-color` to set the background color of the element. We use `color` to set the font color. 

  * ☝️ Why would we want to use a hex code instead of a predefined color?

  * 🙋 Both hex codes and predefined colors will add styling to your elements, but hex codes offer a wider selection of colors&mdash;which can come in handy when you want to customize your design. 

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on color](https://developer.mozilla.org/en-US/docs/Web/CSS/color), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 4. Instructor Demo: Units and Fonts (5 min)

* Open `11-Ins_CSS-units-font/index.html` in your browser and explain the following:

  * We can use CSS to do much more than add color to elements. We can also use it to change the font to help create a custom style. 

* Open `11-Ins_CSS-units-font/assets/css/style.css` in your IDE and demonstrate the following:

  * Adding a font style to your webpage can be as simple as adding another CSS property to an existing rule block:

    ```css
    .container {
      font-family: "Lucida Console", Monaco, monospace;
      color: white;
      background-color: black;
    }
    ```

  * You can use the `font-family` CSS property to specify the font style for an element. The first font listed should always be your first choice. If that font is not available, the browser will display the next font listed. Finally, you should always end the `font-family` declaration with a more generic family, like `monospace`, so that the browser can pick a similar font if your choices cannot be rendered:

      ```css
      font-family: "Lucida Console", Monaco, monospace;
      ```

  * The `line-height` property takes a length value, to set the distance between lines of text. We use `px` to represent roughly the width and height of a single dot, or pixel, that can easily be seen by the human eye. One inch equates to roughly 96px:  

    ```css
    .section-blue {
      line-height: 100px;
      color: #ffa500;
      background-color: #0000FF;
    }
    ```

  * We can also use `px` to set a font size for the text: 

    ```css
    #section-1 {
      font-size: 26px;
      color: #ffff00;
      background-color: #800080;
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can we add custom font styles to the webpage?

  * 🙋 We can use `font-family` to set a custom font type and `line-height` to change the amount of space between the text. We can also use `font-size` to make the fonts bigger or smaller. 

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `12-Stu_CSS-units-font/README.md`.

### 5. Student Do: Units and Fonts (15 min) 

* Direct students to the activity instructions found in `12-Stu_CSS-units-font/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🐛 CSS Styling Not Applied to HTML Elements

  Work with a partner to resolve the following issues:

  * Users should be able to see styling applied to HTML elements when the page is opened.

  ## Expected Behavior

  * Each section should have a background color of `#fffacd`, and the font family `"Lucida Sans Unicode", "Lucida Grande", sans-serif` should be specified.

  * The `fact-1` paragraph should be bold.

  * The `fact-2` paragraph should have a font size of 24px.

  * The `fact-3` paragraph should have a line height of 50px.

  * The finished page should match the mockup.

  ## Actual Behavior

  When a user opens the page, no styling is visible. 

  ## Assets

  The following image demonstrates the web application's appearance and functionality:

  ![Beneath a heading labeled "Fun Facts," subheadings list  topics above paragraphs of different font sizes, all on yellow backgrounds.](./assets/image-1.png)

  ---

  ## 💡 Hints

  How can you use the global attributes `id` and `class` with CSS to style elements?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What are some other ways that you can use CSS properties to style text? 

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 6. Instructor Review: Units and Fonts (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with units and fonts? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `<link>`

  * ✔️ `font-family`

  * ✔️ `line-height`

  * ✔️ `font-size`

* Open `12-Stu_CSS-units-font/Solved/index.html` in your IDE and explain the following: 

  * 🔑 For this activity, you were asked to debug a broken webpage where no styles were being displayed&mdash;a common development problem. When this happens, first check that your HTML and CSS are actually linked.

  * Adding a `<link>` element will connect the HTML and CSS and allow the styles to display:

    ```html
    <link rel="stylesheet" href="./assets/css/style.css">
    ```

  * 🔑 It is also important to check that the styles that you want to use have matching `class` and `id` attributes applied to the HTML elements.

  * We add the missing `id` and `class` attributes on the HTML elements so that the styles can display:

    ```html
    <section class="section">
      <h2>Baby Spiders</h2>
      <p id="fact-1">A baby spider is called a spiderling 🕷️.</p>
    </section>

    <section class="section">
      <h2>Beds</h2>
      <p id="fact-2">The word "bed" looks like a bed 🛏️.</p>
    </section>

    <section class="section">
      <h2>Powerful Squirrels</h2>
      <p id="fact-3">Approximately 10-20% of US power outages 🔌 are caused by squirrels 🐿️.</p>
    </section>
    ```

* Open `12-Stu_CSS-units-font/Solved/assets/css/style.css` in your IDE and explain the following: 

  * Now that the HTML is properly set up, we can add the styles needed so the font styles are displayed.

  * 🔑 We add a `font-family` property to the `section` rule block, applying this font family to all sections that have the `section` class: 
  
    ```css
    .section {
      font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
      background-color: #fffacd;
    }
    ```

  * 🔑 We add a `font-size` property to `fact-2` and set the size to `24px`:

    ```css
    #fact-2 {
      font-size: 24px;
    }
    ```

  * 🔑 Finally, we add a `line-height` property to `fact-3` and set the line height to `50px`. That is roughly half an inch: 
  
    ```css
    #fact-3 {
      line-height: 50px;
    }
    ```

* Open `12-Stu_CSS-units-font/Solved/index.html` in the browser and demonstrate the following: 
  
  * To test that the page is now displaying properly and all the styles are allowed, we can open the webpage in the browser.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What should we do first if no styles are displaying on the page?

  * 🙋 We should check that the HTML file and CSS style sheet are properly linked.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on styling text](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 7. Instructor Demo: Selectors (5 min) 

* Open `13-Ins_CSS-selectors/index.html` in your browser and demonstrate the following:

  * So far, we have focused on using `class` and `id` to select and style HTML elements. Alternatively, we can use a range of selectors to style the webpage&mdash;for an identical result in the browser. 

* Open `13-Ins_CSS-selectors/assets/css/style.css` in your IDE and demonstrate the following:

  * We use a **universal selector** to apply a style to all the elements on a page: 

    ```css
    * {
      font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
    }
    ```

  * We can also select by the element's tag name, which will apply the styles to all the elements with that name and any elements nested in that element. This approach allows us to apply the same font size to all the paragraphs or determine a uniform height and width for all sections: 

    ```css
    section {
      height: 200px;
      width: 300px;
    }

    p {
      font-size: 60px;
      line-height: 200px;
    }
    ```

  * We have already been using **class selectors**! Class selectors select all the elements that have that class attribute attached:

    ```css
    .box-blue {
      color: white;
      background-color: blue;
    }
    ```

  * We have also been using **id selectors**. Id selectors apply a style to a single element:

    ```css
    #box-orange {
      color: blue;
      background-color: orange;
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are some ways that we can select and style elements with CSS?

  * 🙋 We can use universal, element, class, and id selectors to select and style elements. 

  * ☝️ Why would you pick one selector over another? 

  * 🙋 Although selectors do not change how the styles display on the page, we can choose selectors with a purpose in mind. If we want to style all the elements, we can use a universal selector. If we want to style only one specific element, we might choose an id selector. 

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `14-Stu_CSS-Selectors/README.md`

### 8. Student Do: Selectors (15 min) 

* Direct students to the activity instructions found in `14-Stu_CSS-Selectors/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📐 Add Comments to Implementation of CSS Selectors

  Work with a partner to add comments describing the functionality of the code found in [Unsolved](./Unsolved/assets/css/style.css).

  ## 📝 Notes

  Refer to the documentation: 

  [MDN Web Docs on HTML elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

  [MDN Web Docs on attributes](https://developer.mozilla.org/en-US/docs/Glossary/Attribute)

  [MDN Web Docs on CSS selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)

  ---

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What are pseudo-class selectors? 

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 9. Instructor Review: Selectors (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with selectors? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ Universal selectors

  * ✔️ Element selectors

  * ✔️ Class selectors

  * ✔️ Id selectors

* Open `14-Ins_CSS-selectors/Solved/assets/css/style.css` in your IDE and explain the following: 

  * For this activity, you were asked to provide comments on existing code, allowing you to solidify your understanding and practice explaining code in plain language. 

  * 🔑 For this code snippet, you might write a comment that explains that because this is a universal selector, the font family will be applied to all the elements on the page:

    ```css
    * {
      font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
    }
    ```

  * 🔑 This element selector applies a background color to the body element:

    ```css
    body {
      background-color: lemonchiffon;
    }
    ```

  * This rule block looks different because there are two selectors. When rule blocks have more than one selector, the styling will apply to all the elements of both selectors. (If code looks unfamiliar, it is a good opportunity to check the documentation.) 

    ```css
    header,
    footer {
      width: 100%;
      height: 100px;
      line-height: 100px;
      color: #f0ead6;
      background-color: #191970;
    }
    ```

  * 🔑 We use a class selector to select all the HTML elements with that class attribute. To specify that the selector is a class selector, we place a `.` in front of the name in the CSS:

    ```css
    .highlighted-text {
      font-weight: bolder;
    }
    ```

  * 🔑 We use an id selector to select a single element. The style will be applied to that element alone:

    ```css
    #contact-section {
      background-color: #f0ead6;
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do selectors help us style code?

  * 🙋 Selectors define the elements to which a set of CSS rules apply. Universal selectors will apply styles to all the elements on the page, while id selectors will style on a single element. We pick the selectors based on the specificity required. 

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on CSS selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors), and stay for office hours to ask for help.

* Answer any questions before proceeding to flex time.

### 10. FLEX (30 min)

* This time can be utilized for reviewing key topics learned so far in this unit.

### 11. BREAK (30 min)

### 12. Instructor Do: Stoke Curiosity (10 min)

* @TODO The first building block of every class is used to stoke curiosity on the topic. This may be using a slide deck or demonstration of the last activity of the day combined with pseudocoding. How are you going to stoke curiosity? Write two or three sentences describing your approach. 

## 13. Instructor Demo: { ACTIVITY NAME } (5 min) 

@TODO USE THE FOLLOWING FOR BROWSER AND/OR COMMAND LINE DEMOS, RESPECTIVELY. REMOVE IF UNUSED

* Open `@TODO/folder/file` in your browser and demonstrate the following:

* Run `@TODO/folder/file { AND ARGS, IF ANY }` from the command line and demonstrate the following: 

  * 🔑 @TODO { WHEN WE DO THIS, IT DOES THAT. }

  * 🔑 @TODO { WE ALSO SEE THESE THINGS. }

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 @TODO { YES, HOW? } 

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `@TODO/folder/file`.

### 14. Student Do: { ACTIVITY NAME } (15 min)

* Direct students to the activity instructions found in `@TODO/folder/file`.

* Break your students into pairs that will work together on this activity.

  ```md
  @TODO ADD ACTIVITY INSTRUCTIONS, TABBED ONCE OR TWICE (DEPENDING ON CODE SNIPPETS IN ACTIVITY INSTRUCTIONS)
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 15. Instructor Review: { ACTIVITY NAME } (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with @TODO { TOPIC }? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ @TODO { THIS }

  * ✔️ @TODO { THAT }

  * ✔️ @TODO { THE OTHER }

* Open `@TODO/folder/file` in your IDE and explain the following: 

  * @TODO { WE DO THIS AND THE RESULT IS THAT }

    ```
    @TODO ADD CODE SNIPPET, TABBED TWICE (4 SPACES)
    ```

  * 🔑 @TODO DON'T FORGET TO USE THE KEY EMOJI ON KEY POINTS, BUT ONLY KEY POINTS, NOT _EVERY_ POINT

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ @TODO { DO WE END OUR REVIEWS WITH A QUESTION? }

  * 🙋 @TODO { YES, WE DO! }

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 @TODO We can refer to supplemental material, read the [{ DOCS }]({ URL }), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

## 16. Instructor Demo: { ACTIVITY NAME } (5 min) 

@TODO USE THE FOLLOWING FOR BROWSER AND/OR COMMAND LINE DEMOS, RESPECTIVELY. REMOVE IF UNUSED

* Open `@TODO/folder/file` in your browser and demonstrate the following:

* Run `@TODO/folder/file { AND ARGS, IF ANY }` from the command line and demonstrate the following: 

  * 🔑 @TODO { WHEN WE DO THIS, IT DOES THAT. }

  * 🔑 @TODO { WE ALSO SEE THESE THINGS. }

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 @TODO { YES, HOW? } 

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `@TODO/folder/file`.

### 17. Student Do: { ACTIVITY NAME } (15 min) 

* Direct students to the activity instructions found in `@TODO/folder/file`.

* Break your students into pairs that will work together on this activity.

  ```md
  @TODO ADD ACTIVITY INSTRUCTIONS, TABBED ONCE OR TWICE (DEPENDING ON CODE SNIPPETS IN ACTIVITY INSTRUCTIONS)
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 18. Instructor Review: { ACTIVITY NAME } (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with @TODO { TOPIC }? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ @TODO { THIS }

  * ✔️ @TODO { THAT }

  * ✔️ @TODO { THE OTHER }

* Open `@TODO/folder/file` in your IDE and explain the following: 

  * @TODO { WE DO THIS AND THE RESULT IS THAT }

    ```
    @TODO ADD CODE SNIPPET, TABBED TWICE (4 SPACES)
    ```

  * 🔑 @TODO DON'T FORGET TO USE THE KEY EMOJI ON KEY POINTS, BUT ONLY KEY POINTS, NOT _EVERY_ POINT

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ @TODO { DO WE END OUR REVIEWS WITH A QUESTION? }

  * 🙋 @TODO { YES, WE DO! }

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 @TODO We can refer to supplemental material, read the [{ DOCS }]({ URL }), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

## 19. Instructor Demo: { ACTIVITY NAME } (5 min) 

@TODO USE THE FOLLOWING FOR BROWSER AND/OR COMMAND LINE DEMOS, RESPECTIVELY. REMOVE IF UNUSED

* Open `@TODO/folder/file` in your browser and demonstrate the following:

* Run `@TODO/folder/file { AND ARGS, IF ANY }` from the command line and demonstrate the following: 

  * 🔑 @TODO { WHEN WE DO THIS, IT DOES THAT. }

  * 🔑 @TODO { WE ALSO SEE THESE THINGS. }

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 @TODO { YES, HOW? } 

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `@TODO/folder/file`.

### 20. Student Do: { ACTIVITY NAME } (15 min) 

* Direct students to the activity instructions found in `@TODO/folder/file`.

* Break your students into pairs that will work together on this activity.

  ```md
  @TODO ADD ACTIVITY INSTRUCTIONS, TABBED ONCE OR TWICE (DEPENDING ON CODE SNIPPETS IN ACTIVITY INSTRUCTIONS)
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 21. Instructor Review: { ACTIVITY NAME } (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with @TODO { TOPIC }? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ @TODO { THIS }

  * ✔️ @TODO { THAT }

  * ✔️ @TODO { THE OTHER }

* Open `@TODO/folder/file` in your IDE and explain the following: 

  * @TODO { WE DO THIS AND THE RESULT IS THAT }

    ```
    @TODO ADD CODE SNIPPET, TABBED TWICE (4 SPACES)
    ```

  * 🔑 @TODO DON'T FORGET TO USE THE KEY EMOJI ON KEY POINTS, BUT ONLY KEY POINTS, NOT _EVERY_ POINT

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ @TODO { DO WE END OUR REVIEWS WITH A QUESTION? }

  * 🙋 @TODO { YES, WE DO! }

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 @TODO We can refer to supplemental material, read the [{ DOCS }]({ URL }), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `@TODO/folder/file`.

## 22. Everyone Do: Git (20 min)

* @TODO Open [Git docs](https://git-scm.com/docs/{TITLE}) in your browser and explain the following:

  * @TODO GIVE A SHORT EXPLANATION OF THIS GIT CONCEPT/COMMAND.

* Direct students to the activity instructions found in `@TODO/folder/file`.

* While everyone is working on the activity, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

* Open your command line and demonstrate the following:

  * @TODO { WE DO THIS AND THE RESULT IS THAT }

    ```
    @TODO ADD CODE SNIPPET, TABBED TWICE (4 SPACES)
    ```

  * 🔑 @TODO DON'T FORGET TO USE THE KEY EMOJI ON KEY POINTS, BUT ONLY KEY POINTS, NOT _EVERY_ POINT

* Answer any questions before ending the class.

### 23. END (0 min)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this [anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

---
@TODO © YEAR Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

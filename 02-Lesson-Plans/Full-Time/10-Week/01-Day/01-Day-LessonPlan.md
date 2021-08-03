# 10.1 Full-Time Lesson Plan: Progressive Web Applications (PWA)

## Overview 

Today's class will be focused on Web Performance. We will use Lighthouse to audit the performance of webpages, and go through the different options we have to increase performance in our applications. Performance is an incredibly important aspect of being a developer. While building large applications, keeping them performing is a top priority.

## Instructor Notes

* In this lesson, students will complete activities `01-Stu_Lighthouse` through `07-Stu_PWAs`.

* We will be making use of the students' Project 2 during the first half of today's class. Ensure all students have a deployed project to work with.

* Today's class you will be using an auditing system by Google called Lighthouse. Familiarize yourself with the tool prior to class. You can find the documentation [here](https://developers.google.com/web/tools/lighthouse/). 

  * Lighthouse can hang in some browsers, if possible please use Chrome.

* Improving scores in Lighthouse will be a big win for students today, so be sure to slowly go through the first audit report of the day to give students an understanding of how they can improve.

* Remind students to do a `git pull` of the class repo to have today's activities ready and open in VS Code. 

* If you are comfortable doing so, live-code the solutions to the activities. If not, just use the solutions provided and follow the prompts and talking points for review.

* Let students know that the Bonus at the end of each activity is not meant to be extra coding practice, but instead is a self-study on topics beyond the scope of this unit for those who want to further their knowledge.

## Learning Objectives

By the end of class, students will be able to:

* Articulate the meaning of web performance and how it effects their users.

* Explain how assets like JavaScript files and images impact the performance of a web page.

* Use Lighthouse to audit a sites various performance metrics.

* Use minification to lower JS file sizes.

* Use the compression npm package to enable gzip compression in their applications

* Use online image compression to compress image files while retaining image quality.

* Explain and implement lazy loading into their applications so images are only loaded as needed.

## Slide Deck

* N/A

## Time Tracker

| Start  | #   | Activity Name                           | Duration |
|---     |---  |---                                      |---       |
| 10:00AM| 1   | Instructor Do: Stoke Curiosity          | 0:10     |
| 10:10AM| 2   | Instructor Demo: Lighthouse Audit       | 0:05     |
| 10:15AM| 3   | Student Do: Lighthouse Audit            | 0:15     |
| 10:30AM| 4   | Instructor Review: Lighthouse Audit     | 0:10     |
| 10:40AM| 5   | Instructor Demo: JS Minification        | 0:05     |
| 10:45AM| 6   | Student Do: JS Minification             | 0:15     |
| 11:00AM| 7   | Instructor Review: JS Minification      | 0:10     |
| 11:10AM| 8   | Instructor Demo: Enable Compression     | 0:05     |
| 11:15AM| 9   | Student Do: Enable Compression          | 0:15     |
| 11:30AM| 10  | Instructor Review: Enable Compression   | 0:10     |
| 11:40AM| 11  | Instructor Demo: Image Compression      | 0:05     |
| 11:45AM| 12  | Student Do: Image Compression           | 0:15     |
| 12:00PM| 13  | BREAK                                   | 0:30     |
| 12:30PM| 14  | Instructor Review: Image Compression    | 0:10     |
| 12:40PM| 15  | Instructor Demo: Lazy Loading           | 0:05     |
| 12:45AM| 16  | Student Do: Lazy Loading                | 0:15     |
| 1:00PM | 17  | Instructor Review: Lazy Loading         | 0:15     |
| 1:15PM | 18  | Instructor Demo: Optimize Gallery App   | 0:05     |
| 1:20PM | 19  | Student Do: Optimize Gallery App        | 0:20     |
| 1:40PM | 20  | Instructor Review: Optimize Gallery App | 0:15     |
| 1:55PM | 21  | Instructor Demo: Progressive Web Apps   | 0:05     |
| 2:00PM | 22  | Student Do: Progressive Web Apps        | 0:15     |
| 2:15PM | 23  | Instructor Review: Progressive Web Apps | 0:15     |
| 2:30PM | 24  | END                                     | 0:00     |

---

## Class Instruction

### 1. Instructor Do: Stoke Curiosity (10 min)

* Welcome students to class and then open Google Chrome. 

* Open your Dev Tools Network Tab and Throttle your connection to `Slow 3G`

  * ![Throttle Connection](./Images/throttleConnection.png)

* Navigate to [Amazon.com](https://amazon.com/).
  
  * The page is going to load extremely slowly.

* Ask the class, "What can the Network Tab show us?"

  * The network tab gives developers a view into what assets are being loaded and when, as well as total load times. Direct the students attention to the loading time chart.

  ![Network Chart](./Images/networkChart.png)

  * Amazon will load assets for well over a minute, and this traffic can all be watched inside of our dev tools.

* Ask the class, "What is throttling?"

  * Throttling a connection is the act of using software to deliberately slow down or "throttle" a connections speed to be slower than it would normally.

* Ask the class, "Why would we want to throttle our connection?"

  * While we might have a nice and fast connection, a large portion of the planet does not have access to speeds even comparable to a slow 3g cellular network. 

  * By throttling our connection, we can see how our users with worse connections might experience our content, and will help us understand what is slowing loading times most.
  
* Loading times like we are seeing with a throttled connection on Amazon can be a huge deterrent to users.

* Ask the class, "Have you ever left a webpage due to it taking too long to load"

  * It's safe to say anyone who has used the internet has experienced this.. This is a common occurrence all over the world, as not all people have access to fast network connections.
  
  * One of the biggest factors that leads to a poor user experience is slow page load times.

* Ask the class, "What do you think the most important part of the user experience is?". Call on one or two students for answers.

  * Performance. Speed and response times are paramount, as making users wait for response to input or loading information is a guaranteed way to lose those users.

  * When it comes to the web every second counts. Todays class will be about how webpages can be optimized to save the end user time and provide a more fluid experience.

* Ask the class, "How do we know what is causing our page to perform poorly or well?"

  * Getting concrete analysis on the performance metrics of a web page is important in improving it in the future.

* Answer any questions before proceeding to the next activity.

### 2. Instructor Demo: Lighthouse Audit (5 min) 

* Open the [Gallery App](https://ancient-brushlands-76706.herokuapp.com/) and run the application. Let students know this is an application they will be working with later today.

  * Google has created a tool called Lighthouse which will allow us to run an audit on our page and find out different metrics about how it performs and what is hindering its performance. Lighthouse is a quality auditing tool developed by Google for analyzing web pages.

  * It provides audits for performance, accessibility, SEO, and progressive web applications.

  * Lighthouse can be run directly from our Chrome Dev Tools. This makes it a fast, simple, and effective way to get insights into our pages overall performance metrics.

  * Open chrome dev tools, and click the `Audits` tab.

  ![Audits Tab](Images/auditsTab.png)

  * Scroll down and click `Run Audits`

  ![Run Audits](Images/runAudits.png)

* Open the generated `Audit Report` and walk students through the following:

  * The *performance* section will be the first you encounter, and one of the most useful for todays class. This section will tell us why our site might be performing poorly and delivering a poor user experience. It will also give us actionable items to fix.

  * Hovering over the different status signs next to the times shown will give you information on what that test means.

  ![Hover](Images/performanceSection.png)

  * Each audit has a reference doc explaining why the audit is important, as well as how to fix it. These reference docs will lay out why this metric is important to the user experience and give reasons why we might be lacking in the specified audit.

  * One of the main metrics Lighthouse looks for is the *first meaningful paint*.

  * A paint occurs when content is loaded on the screen. Lighthouse measures the first *Contentful* paint, which means when any content is loaded. It also measures the first *meaningful* paint which occurs when the primary content becomes visible.

  * One of the most important metrics it takes is *Time to Interactive*. This is the time it takes for the webpage being audited to become usable. A long delay in interactivity can lead to page abandonment.

* Ask the class, "What is web page abandonment?"

  * Abandonment occurs when a user leaves a web page without completing the task they set out to.

* When working on improving a webpage's performance, we should use Lighthouse to complete frequent audits. These can be incredibly helpful in pinpointing where our efforts should be focused.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `01-Stu_Lighthouse/README.md`.

### 3. Student Do: Lighthouse Audit (15 min) 

* Direct students to the activity instructions found in `01-Stu_Lighthouse/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # Lighthouse Audits

  In this activity you will use Google Lighthouse to audit your second group project to find out performance metrics.

  ## Instructions

  * We are going to utilize your second group project for these coming activities to check its performance metrics.

  * Navigate to the deployed URL of your project.

  * Open the Chrome Dev Tools and click the `Audits` tab.

  * Scroll down and click `Run Audits` and allow Lighthouse to run.

  * Read through the provided report and be prepared to talk about the `Opportunities` portion of your audit!
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 4. Instructor Review: Lighthouse Audit (10 min) 

* Ask the class the following question(s):

  * What are some of the 'Opportunities' for improvement you found in your applications?

  * How long did the first content paint take?

  * How long did the first meaningful paint take?

  * How long did it take to become interactive?

  * Are there any commonalities you hear?

* Answer any questions before proceeding to the next activity.

### 5. Instructor Demo: JS Minification (5 min) 

* Ask the class the following question(s):

  * "What do you think minification means"?

    * Minification is the process of taking our code and removing all unnecessary characters and whitespace without loss of functionality in an attempt to save file space.

  * "Where have we seen minification before?"

    * Bootstrap and jQuery are two examples of minified source code

* Open [JSCompress](https://jscompress.com/) and paste the following code into the textarea:

    ```js
    var myArray = [1, 2, 3, 4, 5];

    for(var i=0; i < myArray.length; i++){
      console.log(myArray[i]);
    }
    ```

* Click the `Compress JavaScript` button to minify the code snippet and explain the following point(s):

* ![Minify JS](Images/minifyJS.jpg)

  * The minifier moved our `myArray` declaration into our `for loop`.

  * The minifier removed all whitespace between characters, and put all of our code on one line.

  * The minification process resulted in a 30% decrease in the size of the JavaScript.

  ![Minified](Images/minification.jpg)

  * While the code may look different after minification, it will function exactly the same

* Ask the class, "What are the benefits of minification?"

  * Minification saves us space, and smaller file sizes create faster downloads for the user. The faster our assets can download, the faster the page will load them for our user.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `02-Stu_Minify-JS/README.md`.

### 6. Student Do: JS Minification (15 min) 

* Direct students to the activity instructions found in `02-Stu_Minify-JS/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # Minify Your JS

  In this activity you will minify your JavaScript using an online tool.

  ## Instructions

  * Using the project you audited previously, navigate to [JSCompress](https://jscompress.com/)

  * Copy the contents of one of your JS files into the compressor and click on the `Compress JavaScript` button.

    * If you see an error, try checking the box labeled `ECMAScript 2019 (via babel-minify)` before trying again.

  * Note the resulting Input/Output sizes of the JS as shown to the bottom of the textarea.

  * Create a `dist` folder in the root of your project.

    * Create an `index.js` file inside of your `dist` folder.

    * Copy/paste the minified JS of your dist folder into your `dist/index.js`

  * Be sure to link your `dist/index.js` code to your application.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 7. Instructor Review: JS Minification (10 min) 

* Ask the class the following question(s):

  * How much of a reduction they saw in JS sizes from Input to Output?

  * How this could benefit developers, especially those with massive code bases?

* While the minified code certainly appears different than the code we input to start, all of the functionality is retained.

* Ask the class, "Why might we not want to edit our minified code?".

  * It is important to have minified code in it's own file. It is not recommended to attempt editing minified code as it can be difficult to read, and even more difficult to debug due to the lack of readability.

* Ask the class the following question(s):

  * How might we minify image files?

* Answer any questions before proceeding to the next activity.

### 8. Instructor Demo: Enable Compression (5 min) 

* Ask the class, "What do we do with files that are so large they are slowing load times?"

  * We compress those files.

* Ask the class, "What is a zip file?"
  
  * A `.zip` file is a compressed version of a normal folder. When you `unzip` it, the folder contains all of the information it had before it was zipped.

* On the web we can use something called GZip compression via an NPM Package called `compression`.

  * GZip is a form of data compression -- it takes a piece of data and makes it smaller. The original data can be restored by un-zipping the compressed file.

  * It is relevant to web apps and web sites because the HTTP protocol includes the ability to gzip data that is being sent.

  * This middleware will enable compression for our project, allowing for compressed versions of our files to be sent over the network for faster download times.

* Navigate to [compression npm](https://www.npmjs.com/package/compression)

* Tell the class that using this middleware enables compression with just 3 lines of code.

* Now we are going to show students around the `Network` tab in Chrome Dev Tools.

* Open up your `network` tab in the chrome dev tools. Navigate to the [New York Times](https://www.nytimes.com/). 

  ![Network Tab](Images/networkTab.png)

* Point students to all the incoming network traffic shown, and more specifically the file sizes column.

  ![Network Traffic](Images/networkTraffic.png)

* There is a file size showing the compressed size (Smaller number) and its uncompressed size (larger number).

  * Files that don't have two numbers are uncompressed files being sent unchanged.

  **Note**: In order to see both rows, you may need to click the "Network Settings" cogwheel and click on the "Use large request rows" checkbox.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `03-Stu_Enable-Compression/README.md`.

### 9. Student Do: Enable Compression (15 min) 

* Direct students to the activity instructions found in `03-Stu_Enable-Compression/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # GZip Compression

  In this activity you are going to use an NPM package called compression to enable GZip compression in your project.

  ## Instructions

  * Navigate to [compression npm](https://www.npmjs.com/package/compression)

    * Read about the installation procedure and some of the API's functionality. Use the docs to enable compression in your application.

  * Once completed, navigate to your page and look at the traffic via the Network tab.

    * You should be able to see the sizes of the files your page is requesting.

    * Take note of the differing file sizes.

    * This shows your Uncompressed/Compressed file sizes.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 10. Instructor Review: Enable Compression (10 min) 

* Open [03-Stu_Enable-Compression](../../../../01-Class-Content/19-PWA/01-Activities/03-Stu_Enable-Compression/Solved) in your IDE and explain the following points

  * We first `npm install compression`

  * We then add the following code to our `server.js`:

  ```js
  const express = require("express");
  const mongoose = require("mongoose");
  const compression = require("compression");

  const app = express();

  app.use(compression());
  ```

* Answer any questions before proceeding to the next activity.

### 11. Instructor Demo: Image Compression (5 min) 

* Ask the class the following question(s):

* Have you ever gone to a site and experienced slow image loading times?

  * Images are one of the most used assets on the web. They are everywhere, and there are more than you can imagine.

  * This is normally due to oversized images or high resolution images being downloaded and taking time. Images are one of the main culprits in slowing down web loading times.

* How might we be able to fix the problem of images that are too large?

  * We can use a concept called *Image Compression*. For the purposes of our course we are going to talk about *Lossy Image Compression*.

* What do we mean by "lossy" image compression?

  * What lossy image compression basically means is that some of the image data is lost during compression. Once an image has used lossy compression, you cannot reverse the process due to this loss of data. The data lost will normally result in almost unnoticeable changes in image quality most of the time. 

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `04-Stu_Image-Compression/README.md`.

### 12. Student Do: Image Compression (15 min) 

* Direct students to the activity instructions found in `04-Stu_Image-Compression/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # Image Compression

  In this activity you are going to use an online compression tool to decrease image file sizes for the Gallery App.

  ## Instructions

  * In this activity you will be using [Tiny PNG](https://tinypng.com/) to compress images.

  * First, unzip the `uncompressedImages.zip` file.

  * Next, navigate to [Tiny PNG](https://tinypng.com/).

    * Tiny PNG is an example of a free image compression tool. There are a number of good free and paid applications that run on the web and some that you can download to run natively on the computer. Paid tools will generally offer many more configuration options and handle larger files.

  * Follow the instructions to upload 3 to 5 images to Tiny PNG. The app will begin compressing the images.

  * Click `Download all` once the hap has finished compressing all of the images you uploaded. This will download a `zip` file containing the optimized images. The `zip` fill will most likely be downloaded to your `Downloads` folder.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 13. BREAK (30 min)

### 14. Instructor Review: Image Compression (10 min) 

* Ask the class the following question(s):

* Did you see a loss in image quality?

  * Image compression allows us to lower load times for our users without a loss of visual fidelity.

* Do you see the benefits of compressing images?

  * When we can save space while maintaining visual quality, that is a win win. It allows for us to have high resolution images for our page while we are still decreasing download/load times for our user.

* What are some other things we can do to decrease our load times?

  * We can load only images that are present on the screen. If the image is not visible to the user, we shouldn't bother downloading it yet.

* Ask the class, "What if a user doesn't scroll through all of the images?"

  * Now that we have compressed all of our images, we are certainly saving space. Point out, we are loading all 38 images when there is only 6-9 images showing at any time. If a students user is on mobile, it would only be 1-2 images at any time.

  * This poses multiple problems. It not only makes loading slower, but is costly when it comes to data and those people using mobile who may not have an unlimited data plan. We certainly don't want to cost our user time and money, so what can be done?

* Ask the class, "Why do we load all of the images at page load, if the user might not see them all?"

  * Loading everything at once is the default. There is a concept in programming referred to as `lazy loading` that allows us to only download assets as they are needed.

* Answer any questions before proceeding to the next activity.

### 15. Instructor Demo: Lazy Loading (5 min) 

* Open our completed [Lazy Loading Gallery App](https://ancient-brushlands-76706.herokuapp.com/) and demo the lazy loading functionality by scrolling to the bottom of the page.

  * If it loads too quickly, open your `Network` tab in your Dev Tools and throttle to `slow 3g`, disable cache, and refresh the page.

  * ![Throttle Connection](Images/throttleConnection.png)

* Ask the class, "What would enable us to know when an image is coming into the users viewport?"

  * A Web API based on `scroll` events and the viewport intersection would allow us to keep an eye on when an element is or is not in view of our user.

  * In the case of this application, we are loading 38 images when we may not need them all. Using lazy loading, If images were scrolled onto the screen that event would then load the images if they had entered the viewport.

* Ask the class, "What web API would allow us this functionality?

  * The `Intersection Observer API`. It provides a way to asynchronously observe when an element is or is not within our users viewport. 

  * We can use this API to watch and then target elements as they enter the viewport

* Ask the class, "How can the Intersection Observer API help us with loading images?"

  * We are able to target images we would like, and observe them. As they enter the viewport of our user we can trigger a function that will then and only then load the image that has entered the viewport.

  * Let's look at a code snippet that enables image lazy loading via JavaScript.
  
* Walk through the comments below:

```js
function initLazyImages() {
  // Gather all of our images into a variable
  const lazyImages = document.querySelectorAll(".lazy-image"); 
  
  function onIntersection(imageEntities) {
    imageEntities.forEach(image => {
      // When the image begins to intersect viewport, execute the if code block
      if (image.isIntersecting) {
        // Now that it is in viewport, we do not need to observe it anymore.
        observer.unobserve(image.target);
        // Set the image src to the image that has entered viewport.
        image.target.src = image.target.dataset.src;
      }
    });
  }
  // Create a new instance of Intersection Observer
  const observer = new IntersectionObserver(onIntersection);
  // Observe all images on load.
  lazyImages.forEach(image => observer.observe(image));
}
```

* Ask the class, "How does this benefit our user?"

  * By loading only necessary images, we can cut download/load times consistently and ensure as fast an experience as possible.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `05-Stu_Gallery-Lazy-Load/README.md`.

### 16. Student Do: Lazy Loading (15 min) 

* Direct students to the activity instructions found in `05-Stu_Gallery-Lazy-Load/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # Lazy Loading Images

  In this activity you are going to work with the Intersection Observer API to implement lazy loading functionality for our Gallery App.

  ## Instructions

  * In this activity you are going to take the Gallery App and implement Lazy Loading functionality.

    * This will allow for us to load images only as they are needed, saving loading times.

  * You will primarily be working within `loadImages.js`

  * Inside of `public/assets/images` is a `.zip` file containing all the images needed for the app. Unzip this file and make sure the contents end up in your images folder.

  * After you have completed implementing lazy loading, open your Dev Tools and run another Lighthouse Audit.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 17. Instructor Review: Lazy Loading (15 min) 

* Open [loadImages.js](../../../../01-Class-Content/19-PWA/01-Activities/05-Stu_Gallery-Lazy-Load/Solved/public/assets/js/loadImages.js) and walk students through the code that enables lazy loading in our application.

  ```js
  function initLazyImages() {
    const lazyImages = document.querySelectorAll(".lazy-image");
  ```

  * First we create a `const` called `lazyImages`. We save all elements with the class `lazy-image` to this constant variable

  ```js
    function onIntersection(imageEntities) {
      imageEntities.forEach(image => {
        if (image.isIntersecting) {
          observer.unobserve(image.target);
          image.target.src = image.target.dataset.src;
        }
      });
    }
  ```
  * Next, we create an `onIntersection` function. In this function we state that for each mage, if the image is intersecting the viewport we load our image and stop observing it as it is now on screen.

  ```js
    const observer = new IntersectionObserver(onIntersection);
  ```

  * We used a constructor function to create a new instance of IntersectionObserver, saving it to a constant variable `observer`. This allowed us to use it in our `onIntersection` function.

  ```js
    lazyImages.forEach(image => observer.observe(image));
  }
  ```

  * The final line subscribes all images to be observed by IntersectionObserver to it can download the proper image when the placeholder is scrolled into view.

* Answer any questions before proceeding to the next activity.

### 18. Instructor Demo: Optimize Gallery App (5 min) 

* Web performance is important, and they now have a foundation to learn more and become great at optimizing applications.

* For this next activity, students will take the completed gallery application and minify all of the JS.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `06-Stu_Gallery-Optimize/README.md`.

### 19. Student Do: Optimize Gallery App (20 min) 

* Direct students to the activity instructions found in `06-Stu_Gallery-Optimize/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # Optimize Gallery App

  In this activity you will use the Lazy Loading, GZip Compression, Image Compression, and Lighthouse to improve the performance of the Gallery App.

  ## Instructions

  * First, unzip the uncompressed images zip file found in `public/assets/images`.

  * Run the following commands:

    * Start MongoDB (run `mongod` in your terminal)
    * In a new terminal window run `npm install`
    * `npm run seed`
    * `node server.js`

  * Now that the application is running, navigate to the [localhost](https://localhost:3000)

  * Open your Chrome Dev tools and run a Lighthouse audit on the application. Take note of the `performance` score listed at the top of the audit report and the `opportunities` section under `performance`.

  * Now, using the compression npm package, enable gzip compression in the application.

  * Restart your server and run a new audit.

  * Next, using [Tiny PNG](https://tinypng.com/), compress all of the images found within the `public/assets/images`

  * Once you have compressed all of the images, replace the newly compressed images with the original uncompressed found in the applications images directory.

  * Restart your server and run a new audit.

  * Now that we have compressed our images and enabled gzip compression, our last step is to minify our JavaScript.

  * Create a `dist` folder in `/public`.

    * Inside of `public/dist` create a file called `index.js`

    * Link this `index.js` to your application in `public/index.html`.

  * Head to [JSCompress](https://jscompress.com/).

  * Take the contents of `/public/assets/js/loadImages.js` and paste it into the text area. Check the box labeled `ECMAScript 2019 (via babel-minify)`. Click `Compress JavaScript`.

    * Take the resulting minified code and copy/paste it into your `/public/dist/index.js`

  * Finally, restart your server and run a new audit.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 20. Instructor Review: Optimize Gallery App (15 min) 

* Navigate to [06-Stu_Gallery-Optimize/Solved](../../../../01-Class-Content/19-PWA/01-Activities/06-Stu_Gallery-Optimize/Solved) and run the following commands:

  * npm install

  * npm install compression

* Navigate to the [06-Stu_Gallery-Optimize/Solved/server.js](../../../../01-Class-Content/19-PWA/01-Activities/06-Stu_Gallery-Optimize/Solved/server.js)
  
  ```js
  const compression = require("compression");

  app.use(compression());  
  ```

  * With these two lines of code we can easily enable GZip compression in our application for our served files.

* Ask the class, "Is Tiny PNG our only option for Image Compression?"

  * We can use many different tools when looking to compress images. For our purposes we chose to use Tiny PNG for its ease of use. Feel free to research other image compression tools if you'd like to dive deeper.

  * We will not go through the process of compressing all of the images as we did that earlier in the class, but image compression is an important and easy way to decrease load times.

* Ask the class, "Can you see the ways you can use these performance enhancements in your existing applications?"

  * Optimizing our applications to be performant on all devices and connection speeds will make us better developers. We need to consider those with smaller devices or slower speeds at all times as to not alienate any user base.

* Answer any questions before proceeding to the next activity.

### 21. Instructor Demo: Progressive Web Apps (5 min) 

* Navigate to [https://image-gallery-cache.herokuapp.com/](https://image-gallery-cache.herokuapp.com/) in your browser and point out the following: 

  * It's the Image Gallery application from earlier. But there's something different about it...
 
  * If we open the Settings in Chrome, we will see an option to `Install Images App...`
 
  * When we select `Install Images App...` we are presented with an option to "Install app?"
 
  * When we click `Install`, a new Chrome window opens with our application running in it. 
 
  * It is now installed as a desktop app! If we search our applications, we will find "Images App" listed among them.

* Ask the class the following question(s) and call on students for the corresponding answer(s):

  * ☝️ What is different about our Image Gallery application? 
  
  * 🙋 There is added functionality to install it as a desktop application.

  * ☝️ If we can install the Images App application on our laptops, where else might we install it? 

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `07-Stu_PWAs/README.md`.

### 22. Student Do: Progressive Web Apps (15 min) 

* Direct students to the activity instructions found in `07-Stu_PWAs/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # Progressive Web Applications

  In this activity, you will install a progressive web application (PWA) using your smart phone. You will also research the definition and production of a PWA. If you are unable to find the icons mentioned in this activity, try them in Chrome on your computer.

  ## Instructions

  * Follow these instructions to install a PWA for your specific smartphone OS:

  * iOs:

    * 1. Navigate to [https://image-gallery-cache.herokuapp.com/](https://image-gallery-cache.herokuapp.com/) with Safari.

    * 2. Tap the Share button in Safari.

    * 3. Tap the icon labeled Add to Home Screen.

    * 4. Tap Add in the upper-right corner.

    * 5. Name your PWA, then tap Add in the upper-right corner.

  * Android:

    * 1. Navigate to [https://image-gallery-cache.herokuapp.com/](https://image-gallery-cache.herokuapp.com/) with Chrome.

    * 2. Tap the menu button in the upper right corner of Chrome.

    * 3. Tap the icon labeled Add to Home Screen.

    * 4. Name your PWA, then tap Add below the promp.

  * Be prepared to answer the following question(s): 

      * What is a progressive web application? 

      * How do we create progressive web applications?

  ## 🏆 Bonus

  * What are examples of popular PWAs?
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 23. Instructor Review: Progressive Web Apps (15 min)

* Use the prompts and talking points below to review the following key point(s):
  
  * ✔️ Progressive web applications (PWAs) are mobile or desktop apps delivered through the web, built using HTML, CSS & JavaScript, that allow users to work offline
  
  * ✔️ PWAs require a manifest, a service worker and the Cache API
  
* Ask the class the following question(s) and call on students for the corresponding answer(s):

  * ☝️ What is a progressive web application?
  
  * 🙋 Progressive web applications (PWAs) are mobile or desktop apps delivered through the web, built using HTML, CSS & JavaScript
  
  * ☝️ What is meant by the term 'native' app?
  
  * 🙋 The term "native app" refers to applications written for specific platforms. For example, native iPhone apps are written in iOs and Android apps are primarily written in Java. Apple apps will not run on Android devices and vice versa. 

  * ☝️ How are PWAs different from native apps?

  * 🙋 Traditional Mobile Apps require multiple builds across platforms, are less discoverable by search engines and have high abandonment rates.They also offer less usability and don’t leverage mobile device capabilities and are often slow and bloated. PWAs provide advantages of both web and mobile apps such as push notifications, offline experiences,speed and stability. Plus, you can convert a web app into a PWA quickly without the build time of a mobile app.
  
  * ☝️ What do we need to learn to convert an application into a progressive web application?

  * 🙋 There are three primary things we need to learn: Manifests, Service Workers and the Cache API.
  
* Navigate to [https://image-gallery-cache.herokuapp.com/](https://image-gallery-cache.herokuapp.com/), open DevTools and explain the following: 
  
  * 🔑 If we look under the Application tab in DevTools for our Image Gallery App, we see **Manifest**, **Service Workers** and **Cache Storage** panels.

    ![Application Sidebar](Images/application-sidebar.png)

  * 🔑 If we check the `offline` button in the Service Workers panel, we see that the application still delivers a full experience with an Internet connection!

  ![Offline](Images/offline-mode.png)

* Answer any questions before ending the class.

### 24. END (0 min)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this [anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

# 10.2 Full-Time Lesson Plan: Workbox, Caching, and Service Workers

## Overview

In this class, students will learn how to use the workbox library to cache and serve static assets. Students will also become familiar with the different methods workbox provides to create a service worker and learn some of the caching strategies that workbox provides out of the box. In addition, students will be introduced to IndexedDB, which allows developers to store large amounts of data on the client side.  We have used `localStorage` in the past for client-side storage, but we were very limited in the amount and type of data we could store. IndexedDB can help us store more data in more complex data structures.

## Instructor Notes

* In this lesson, students will complete activities `15-Ins_Caching` through `27-Evr_Git-Hooks`.

* This unit features activities that will require students to save and refresh the browser in order to see changes. The very nature of PWAs means that, by design, students will likely run into issues with cached assets interfering while debugging and testing.

  > **Important**: If you are having issues with cached assets, please use a private or incognito window to view the application.

* For Chrome users, you can open an incognito window by clicking the three dots in the top-right corner of the browser. From there, click the "New Incognito Window" button. You can also use hot keys to open an incognito window: on macOS, press Command + Shift + N; on Windows, press Control + Shift + N.

* In addition to using a private window, students can troubleshoot caching issues further by completely unregistering the service worker. This will allow the browser to cache the assets again. Details on how to do this will vary among browsers, but generally you can find the option to do this in the browser's developer tools.

* Some of these activities rely on a browser response. If you are not seeing the intended results, please close your browser entirely and restart to begin a new browser session. This will often clear any issues.

* When demoing the activities, please use `Live Server` to open the `index.html` file from the `dist` directory, unless specified otherwise. If you have not yet downloaded Live Server for VS Code, refer to these [instructions for downloading Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

* PWAs and IndexedDB can be frustrating at times, so take some time to familiarize yourself with the behavior of each activity. This is also a good opportunity for students to practice troubleshooting unexpected behaviors in their application.

* Some of these activities rely on a browser response. If you are not seeing the intended results, please close your browser entirely and restart to begin a new browser session. This will often clear any issues.

* When demoing the activities, please use `Live Server` to open the `index.html` file from the `dist` directory, unless specified otherwise. If you have not yet downloaded Live Server for VS Code, refer to these [instructions for downloading Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

* Remind students to do a `git pull` of the class repo and to have today's activities ready and open in VS Code.

* If you are comfortable doing so, live code the solutions to the activities. If not, just use the solutions provided and follow the prompts and talking points for review.

* Let students know that the Bonus at the end of each activity is not meant to be extra coding practice, but instead is a self-study on topics beyond the scope of this unit for those who want to further their knowledge.

## Learning Objectives

* Leverage caching strategies to optimize performance.

* Execute a full-stack application with a server and client-side development server.

* Implement IndexedDB inside a JavaScript application.

* Implement CREATE, READ, UPDATE, and DELETE commands for an IndexedDB instance.

* Convert an existing application into a Progressive Web Application (PWA).

## Time Tracker

| Start  | #   | Activity Name                                     | Duration |
|---     |---  |---                                                |---       |
| 10:00AM| 1   | Instructor Demo: Cache CSS and JavaScript Files   | 0:05     |
| 10:05AM| 2   | Student Do: Cache CSS and JavaScript Files        | 0:15     |
| 10:20AM| 3   | Instructor Review: Cache CSS and JavaScript Files | 0:10     |
| 10:30AM| 4   | Instructor Demo: Caching Images                   | 0:05     |
| 10:35AM| 5   | Student Do: Caching Images                        | 0:15     |
| 10:50AM| 6   | Instructor Review: Caching Images                 | 0:10     |
| 11:00AM| 7   | Instructor Demo: Client-Server Model              | 0:05     |
| 11:05AM| 8   | Student Do: Client-Server Model                   | 0:15     |
| 11:20AM| 9   | Instructor Review: Client-Server Model            | 0:10     |
| 11:30AM| 10  | FLEX                                              | 0:30     |
| 12:00PM| 11  | BREAK                                             | 0:30     |
| 12:30PM| 12  | Instructor Do: Stoke Curiosity                    | 0:10     |
| 12:40PM| 13  | Instructor Demo: IndexedDB                        | 0:05     |
| 12:45PM| 14  | Student Do: IndexedDB                             | 0:15     |
| 1:00PM | 15  | Instructor Review: IndexedDB                      | 0:10     |
| 1:10PM | 16  | Instructor Demo: IndexedDB CRUD                   | 0:05     |
| 1:15PM | 17  | Student Do: IndexedDB CRUD                        | 0:15     |
| 1:30PM | 18  | Instructor Review: IndexedDB CRUD                 | 0:10     |
| 1:40PM | 19  | Instructor Demo: Manifest                         | 0:05     |
| 1:45PM | 20  | Student Do: Manifest                              | 0:15     |
| 2:00PM | 21  | Instructor Review: Manifest                       | 0:10     |
| 2:10PM | 22  | Everyone Do: Git                                  | 0:20     |
| 2:30PM | 23  | END                                               | 0:00     |

---

## Class Instruction

### 1. Instructor Demo: Cache CSS and JavaScript Files (5 min)

* Welcome students to class.

* Navigate to `15-Ins_Caching` in your terminal and run `npm install && npm run dev`. This will install the dependencies and start the development server.

* **Important:** Unlike the previous instructor demos, this one will not open the browser automatically. This is by design so that you can see the caching strategy messages in the console as the page loads for the first time.

* Open a new incognito window in your browser and then open the developer console in the new window. Once you have the window open with the developer console in view, navigate to `http://localhost:8080`.

  * 🔑 When we run this application, we see a page with a few modules being loaded, as we saw with the Hot Module Replacement activity. This isn't the interesting part, however.

  * 🔑 As the page loads, we can see some messages in the console that tell us what is happening in response to our caching strategy.

  * 🔑 In order to take advantage of these caching strategies, we will use a new method to generate the service worker called `InjectManifest`. This method is used to inject a manifest file into the service worker on the fly.

  * 🔑 `InjectManifest`, much like the `GenerateSW` method, accepts a configuration object and is added to the `plugins` array in our webpack configuration, as shown in the webpack configuration snippet below:

    ```js
     plugins: [
    new HtmlWebpackPlugin({
        title: 'Caching',
        template: './index.html',
      }),
      new InjectManifest({
        swSrc: './src/sw.js',
      }),
    ],
    ```

  * 🔑 On the initial load, we see messages in the console that tell us that there was no cached response found in `static-resources`. This is in part because of the caching strategy we are using, as shown in the following snippet:

    ```console
    workbox | Router is responding to: https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css
    workbox | Router is responding to: https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js
    workbox | Using StaleWhileRevalidate to respond to 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css'
    workbox | Using StaleWhileRevalidate to respond to 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js'
    workbox | Router is responding to: /index.bundle.js
    ```

  * 🔑 This kind of response is expected for the first visit because our current caching strategy checks to see if we have a cached response to return first. Because we don't have a cached response to return, we will have to fetch the resource from the network.

  * 🔑 This kind of strategy is called the `StaleWhileRevalidate` caching strategy. This strategy will first check to see if there is a cached response, and if there is, it will return that response. Otherwise, it will fetch the response from the network and update the cache.

  * 🔑 On subsequent visits, we will see a message in the console that tells us that we have a cached response in `static-resources`. This is a result of the cached response being returned, as shown in the following screenshot:

    ```console
    workbox | Using StaleWhileRevalidate to respond to 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css'
    logger.js:50 | Found a cached response in the 'static-resources' cache. Will update with the network response in the background.
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why does the `StaleWhileRevalidate` strategy sound like a good choice for static assets on a webpage?

  * 🙋 `StaleWhileRevalidate` is a good choice for static assets because it allows us to respond quickly from the cache, but also update resources in the background.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `16-Stu_Caching`.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `@TODO/folder/file`.

### 2. Student Do: Cache CSS and JavaScript Files (15 min)

* Direct students to the activity instructions found in `16-Stu_Caching/README.md`, which are also shown below.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📖 Implement Caching for CSS and JS Files

  Work with a partner to implement the following user story:

  * As a developer, I want to cache the CSS and JS files so that I don't have to download them every time I load a page.

  * As a developer, I want to implement workbox caching strategies so that I can improve the performance of the app.

  ## Acceptance Criteria

  * It is done when I have imported `injectManifest` using destructuring assignment from the `workbox-webpack-plugin` inside the `webpack.config.js` file.

  * It is done when I have registered a new Workbox service worker inside the `src/index.js` file using the `Workbox` constructor.

  * It is done when I have added a new `InjectManifest` plugin to the `plugins` array in `webpack.config.js`.

  * It is done when I have specified the `swSrc` and `swDest` properties in the `InjectManifest` constructor in the `plugins` array in `webpack.config.js`.

  * It is done when I have registered a route for the caching of static assets (e.g., JavaScript, HTML, CSS) by using a `staleWhileRevalidate` strategy for files that aren't pre-cached, by matching against the destination of the incoming request. This is done in the `src/sw.js` file.

  ## 📝 Notes

  Refer to the documentation:

  * [Google docs on common recipes](https://developers.google.com/web/tools/workbox/guides/common-recipes)

  ## 💡 Hints

  * What does the `staleWhileRevalidate` strategy do? Is there another strategy that could be used?

  * What are some different methods of matching files that we want to cache? How can we use the `destination` property on the `request` object to our advantage?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What is the difference between `GenerateSW` and `InjectManifest`?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 3. Instructor Review: Cache CSS and JavaScript Files (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with caching JS and CSS files? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use Office Hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `injectManifest`

  * ✔️ Caching strategies

  * ✔️ `swSrc`

* Open `16-Stu_Caching/Solved/webpack.config.js` in your IDE and explain the following:

  * To have proper caching, we need to use a caching strategy. And to use a caching strategy, we need to generate a service worker using the `InjectManifest` plugin.

  * 🔑 The `InjectManifest` plugin is used to inject a manifest file into the service worker on the fly. We start off by importing it into our webpack config.

    ```js
    const path = require('path');
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    const { InjectManifest } = require('workbox-webpack-plugin');
    ```

* Open `16-Stu_Caching/Solved/src/index.js` in your IDE to demonstrate the following:

  * As with all service workers, we need to register a service worker in our `src/index.js` file. We start off by registering a new `Workbox` service worker.

    ```js
    if ('serviceWorker' in navigator) {
      const wb = new Workbox('/sw.js');

      wb.register();
    }
    ```

* Open `16-Stu_Caching/Solved/webpack.config.js` in your IDE and explain the following:

  * Now that we have the logic to register our service worker, and we imported the `InjectManifest` plugin, we need to add the `InjectManifest` plugin to our `plugins` array.

  * 🔑 One of the options that we can pass to the `InjectManifest` constructor is the `swSrc` property. This property specifies the location of the service worker file that contains our own custom code for caching.

  * Here is a sample of the the `InjectManifest` plugin in the `plugins` array:

    ```js
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Caching',
        template: './index.html',
      }),

      new InjectManifest({
        swSrc: './src/sw.js',
      }),
    ],
    ```

* Open `16-Stu_Caching/Solved/src/sw.js` in your IDE to demonstrate the following:

  * The service worker is where all of our logic for caching assets is located. We can see that the starer code already has the `StaleWhileRevalidate` caching strategy imported for us.

  * The `StaleWhileRevalidate` strategy will try to serve the cached version of the resource if it is available, but if the cached version is not available, it will make a network request, serve the asset, and store the cached version of the resource in the background.

  * With the `StaleWhileRevalidate` strategy, every request that is served from the cache is accompanied by a request to the server to check and see if a newer version is available. If a newer version is available, the cached version is updated and served to the user on the next request.

  * We match the assets by using the `destination` property on the `request` object. This property is a string that contains the path to the asset. In our case, we are looking for those destinations that include style or script files, as shown in the handler below:

    ```js
    const matchCallback = ({ request }) => {
      return (request.destination === 'style' || request.destination === 'script' );
    };
    ```

  * Next, we have to register the route in our service worker. We do this by using the `staleWhileRevalidate` constructor.

    ```js
    registerRoute(
      matchCallback,
      new StaleWhileRevalidate({
        cacheName,
        plugins: [
          // This plugin will cache responses with these headers to a maximum-age of 30 days
          new CacheableResponsePlugin({
            statuses: [0, 200],
          }),
        ],
      })
    );
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How does the `StaleWhileRevalidate` caching strategy work?

  * 🙋 The `StaleWhileRevalidate` will try to serve the cached version of the resource if it is available, but if the cached version is not available, it will make a network request, serve the asset and store the cached version of the resource in the background.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Google docs on common recipes](https://developers.google.com/web/tools/workbox/guides/common-recipes), and attend Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 4. Instructor Demo: Caching Images (5 min)

* Navigate to `17-Ins_Caching-Images` in your terminal and run `npm install && npm run dev`. This will install the dependencies and start the development server.

  * 🔑 When we run the `npm run dev` command, we can see in the browser that our demo is now serving images inside two of the modules.

  * 🔑 This demo also uses the `InjectManifest` plugin to inject a manifest file into the service worker on the fly.

  * 🔑 The key difference, however, is that we are now using the `CacheFirst` caching strategy.

  * 🔑 This strategy is very straightforward and does what the name suggests. The service worker will always look first to the cache and fall back to the network if a cached version is not available.

  * 🔑 The `CacheFirst` strategy is a perfect choice for optimizing repetitive requests, since it only reaches out to the network for "fresh" assets.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 Building a route for images is very similar to building a route for CSS and JavaScript files. The only difference is that we match the `images` destination and invoke the `CacheFirst` constructor when registering the route.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `18-Stu_Caching-Images/README.md`.

### 5. Student Do: Caching Images (15 min)

* Direct students to the activity instructions found in `18-Stu_Caching-Images/README.md`, which are also shown below.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🐛 Images Are Not Being Cached Properly

  Work with a partner to resolve the following issue:

  * As a developer, I want to be able to rely on the browser to cache images so that I can create a faster application for the end user.

  ## Expected Behavior

  The browser should load images almost instantly from the cache and not need to download fresh images from the server. You can verify that the cache is working properly by opening the developer console, clicking the Application tab in DevTools and looking for a cache name of `my-image-cache`. Additionally, on subsequent visits to the application, network requests for images will be responded to by the service worker with a 200 response.

  ## Actual Behavior

  When a user visits the page after the first time, the browser is still making network requests to the server to retrieve the images.

  ## Steps to Reproduce the Problem

  To reproduce the problem, follow these steps:

  1. Start the dev server by running `npm run dev`.

  2. Open a new browser tab and navigate to `http://localhost:3000/`.

  3. Open Chrome DevTools, click the Network tab, and notice that there are multiple requests to the server for the images that were not cached.

  ## Assets

  The following image demonstrates the properly functioning network requests to the cache:

  ![Network tab of chrome based browser showing 200 status codes](./Images/network.png)

  ---

  ## 💡 Hints

  What is a cache miss and how can we use the advanced recipe to resolve this issue?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What is the Cache Storage API? How do we use it?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 6. Instructor Review: Caching Images (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with caching images using Workbox? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use Office Hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `CacheFirst`

  * ✔️ `ExpirationPlugin`

* Open `18-Stu_Caching-Images/Solved/src/sw.js` in your IDE and explain the following:

  * 🔑 In order to cache images, we need to use the `CacheFirst` caching strategy. This strategy needs to be imported from the `workbox-strategies` package. We added this on to our existing import for the `staleWhileRevalidate` strategy.

    ```js
    import { StaleWhileRevalidate, CacheFirst } from 'workbox-strategies';
    ```

  * 🔑 The `CacheFirst` strategy is a good choice for images because the same images are often requested multiple times in a short period of time.

  * To use the `CacheFirst` strategy, we need to register the route with the `CacheFirst` constructor. We can do this by using the `registerRoute` method.

  * Any requests that have a destination of `images` will be handled by the `CacheFirst` strategy.

    ```js
    registerRoute(
      ({ request }) => request.destination === 'image',
        new CacheFirst({})
      );
    ```

  * 🔑 The `ExpirationPlugin` is a plugin that will automatically remove stale assets from the cache. This plugin needs to be imported from the `workbox-expiration` package.

    ```js
    import { ExpirationPlugin } from 'workbox-expiration';
    ```

  * The `ExpirationPlugin` will be included inside the `CacheFirst` constructor and will accept a cache name and a number of options.

  * We also provided some options to the `ExpirationPlugin` constructor. We can use the `maxAgeSeconds` option to set the maximum age of the asset in the cache. This will remove assets that are older than the specified number of seconds.

  * We can also use the `maxEntries` option to set the maximum number of assets that can be stored in the cache. This will prevent the cache from growing too large.

    ```js
      new CacheFirst({
      cacheName: 'my-image-cache',
      plugins: [
        new ExpirationPlugin({
          maxEntries: 60,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        }),
      ],
    })
    ```

  * Let's test our work by running the `npm install && npm run dev` command again from the root of the `/Solved` directory. This time, we can see that the images are now being cached. Specifically, after a few refreshes, the browser will show a new cache called `my-image-cache` that contains the images.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are some challenges that you encountered with caching images?

  * 🙋 Caching images can be difficult to troubleshoot due to cors issues. We can use the `cors-anywhere` package to proxy requests to the server, or we can make sure that the images are served from the same domain as the server.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Workbox docs on caching images](https://developers.google.com/web/tools/workbox/guides/common-recipes), and attend Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 7. Instructor Demo: Client-Server Model (5 min)

* Navigate to `19-Ins_Client-Server` in your terminal and run `npm install` to install all dependencies and demonstrate the following:

  * Instead of opening the browser right away, run `npm run` to list the available commands.

  * Notice that the list of available commands reflects the scripts that are defined in the `package.json` file.

  * 🔑 If we run `ls` in the terminal, we should also see that this demo is split up into two directories: `client` and `server`. Both of which have their own `package.json` files, in addition to the `package.json` file for the root directory.

  * 🔑 We have two directories because we want to separate our front-end code from our back-end code in order to prepare for the future. This separation will allow us to create a more modular and reusable codebase, especially when we start working with React or any other front-end framework that uses a bundler such as webpack.

  * 🔑 One thing we need to think about is deployment. Let's say that we have an application that has an Express server and a front-end client. We would need some way to spin up the server and the client on the same machine using a single command, while also having the server and client running on different ports.

  * 🔑 We can use the `concurrently` command to run multiple commands at the same time.

  * In the next activity, we will learn how to use the `concurrently` command to run multiple commands at the same time.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 We would start by moving our entire application into a single directory called `client`. We would then create a new directory called `server` and add a simple Express.js server to it. Finally, we could update our `package.json` file to include the `concurrently` package and update our `start` script to run the `concurrently` command.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `20-Stu_Client-Server/README.md`.

### 8. Student Do:  Client-Server Model (15 min)

* Direct students to the activity instructions found in `20-Stu_Client-Server/README.md`, which are also shown below.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗️ Start the Client and Back-End Servers Simultaneously

  Work with a partner to implement the following user story:

  * As a developer, I want to be able to start the client and back-end servers simultaneously so that I can test the full application, not just the client.

  ## Acceptance Criteria

  * It is done when I have moved the existing code into a new `client` folder.

  * It is done when I have created a simple Express server in the `server` folder.

  * It is done when I have added a single static HTML route that serves the contents of the `client/dist/index.html` file.

  * It is done when I have installed the `concurrently` npm package at the root of the project.

  * It is done when I have configured the npm scripts in the root `package.json` to run both servers using `concurrently`.

  * It is done when I am able to start the client and the backend server concurrently by running `npm start`.

  ---

  ## 💡 Hints

  * `concurrently` can also be configured to shorten npm commands. How can we include this in our solution?

  * Remember to close any other servers that you may have running to free up the needed ports.

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What is a proxy server?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 9. Instructor Review: Client-Server Model (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with the client server model? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use Office Hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `express`

  * ✔️ `ports`

  * ✔️ Separate `client` and `server` directories

* Navigate to `20-Stu_Client-Server` in your terminal and run `npm install && npm run dev`. This will install the dependencies and start the development server.

  * 🔑 When we run this command, we notice that our terminal beings to start both the client's start command and the backend Express.js server.

    ```console
    concurrently "cd server && npm run server" "cd client && npm run dev"
    ```

  * 🔑 We can see that because of our root level `dev` command, we invoke `concurrently` to run both the client and the backend server at the same time.

  * The server is navigated to first, and then the `npm run server` command is invoked. This will start the Express server and listen on port `3000`.

* Open `20-Stu_Client-Server/Solved/server/server.js` in your IDE to demonstrate the following:

  * Notice that the static HTML route is configured to serve the contents of the `client/dist` directory.

     ```js
     const express = require('express');

     const app = express();
     const PORT = process.env.PORT || 3000;

     app.use(express.static('../client/dist'));
     app.use(express.urlencoded({ extended: true }));
     app.use(express.json());

     require('./routes/htmlRoutes')(app);

     app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
     ```

  * 🔑 Remember that the `dist` directory is the output of our webpack build.

  * There is also a single HTML route that serves the contents of the `client/dist/index.html` file.

     ```js
     module.exports = (app) =>
       app.get('/', (req, res) =>
         res.sendFile(path.join(__dirname, '../client/dist/index.html'))
       );
     ```

* Open `20-Stu_Client-Server/Solved/package.json` in your IDE to demonstrate the following:

  * Now let's review the other half of our `concurrently` command , `cd client && npm run start`. In this case, the `npm run` command will invoke the `webpack && webpack-serve` command to build the client's application and run a server that watches for changes.

  * The resulting `dist` directory is the output of our webpack build.

  * 🔑 We already set up an Express.js server in the `server` directory, which will serve the static HTML file found in the `client/dist` directory, so we don't need to do anything else.

  * 🔑 **Important:** You may be asking yourself, "Why don't we just run the `npm run dev` command in the `client` directory?" The answer is that the `webpack-dev-server` is meant to be a tool for development, and not a replacement for a production server. Additionally, running two servers with one bash command makes it hard to keep track of different outputs. For example, if one process fails, others still keep running and you won't even notice the difference.

* Run `npm start` from the root of the `Solved` directory and visit `http://localhost:3000` in your browser to demonstrate the final result.

* Notice that our application is now running just as it did before, but now we have the infrastructure to run both the client and the backend server at the same time if we wanted to.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How does concurrent server/client development work?

  * 🙋 The idea is that we can run both the client and the backend server at the same time when developing, and when it comes time to deploy, we can run the build command for the client, and then the server command for the backend.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Open-CLI Docs on concurrently](https://github.com/open-cli-tools/concurrently), and attend Office Hours to ask for help.

* Answer any questions before proceeding.

### 10. FLEX (30 min)

* This time can be utilized for reviewing key topics learned so far in this unit.

### 11. BREAK (30 min)

### 12. Instructor Do: Stoke Curiosity (10 min)

* Congratulate the class on learning how to implement new web technologies such as webpack and workbox. These tools can give our applications a performance boost and improve the user experience.

* Remind students that the React unit is on the horizon and that much of what they've learned in this unit can be applied to learning React.

* Today's class will be focused on making our application installable on users' devices!

* The web applications we create can be configured to act like a native application.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are some examples of native applications?

  * 🙋 Microsoft Word, Zoom . . . basically, any application that you need to install.

  * ☝️ What are some benefits of a native application?

  * 🙋 Native applications don't require an internet connection and desktop icon to work.

* We also will be taking a look at a new API called IndexedDB which will unlock a more advanced front-end data storage option.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How have we stored data on the front end in the past?

  * 🙋 Local storage!

* We will be able to run CRUD operations and process data much more efficiently with IndexedDB versus local storage.

* Answer any questions before proceeding to the next activity.

## 13. Instructor Demo: IndexedDB (5 min)

* Open `21-Ins_IndexedDB/assets/js/database.js` in your IDE and explain the following:

  * 🔑 We have to install the `idb` package as a regular dependency and import it into the `database.js` file.

    ```js
    import { openDB } from 'idb';
    ```

  * The `idb` package is a lightweight wrapper that takes care of some of the more messy parts of IndexedDB. The main reason we are using the `idb` package is that it allows us to take advantage of async/await.

  * We have created an asynchronous function called `initDB()`, which will immediately invoke the `OpenDB` method we imported earlier.

    ```js
    const initdb = async () =>
      openDB('demo-db', 1, {
    });
    ```

  * 🔑 The first argument is the name of the database we want, which is `demo-db`, followed by the version number.

  * The version number allows us to check if our user is using an old version of our schema. This will be our only schema, so we will not have to worry about changing versions.

  * A schema in IndexedDB is basically just a data store.

  * 🔑 Next, we set the correct schema using the `upgrade` method.

     ```js
      const initdb = async () =>
        openDB('demo-db', 1, {
          upgrade(db) {
          if (db.objectStoreNames.contains('demo-db')) {
            console.log('demo-db database already exists');
            return;
          }

          db.createObjectStore('demo-db', { keyPath: 'id', autoIncrement: true });
          console.log('demo-db database created');
        },
    });
    ```

  * 🔑 Check to see if the user already has the `demo-db` object. If not, create a new one called `demo-db` with the `creaateObjectStore()` method.

  * 🔑 We use the `keyPath` property to specify the name of the key field in the `demo-db` object and set it to auto-increment.

  * Finally, we call the `initDb()` function at the bottom of the `database.js` file.

    ```js
    initDb()
    ```

* Run `npm install` and `npm run start` and open up the `index.html` in the `dist` directory using Live Server.

* Navigate to the Application tab in Chrome DevTools and demonstrate the following:

  * 🔑 In the `IndexedDb` section, if we expand it, we can see the `demo-db` storage object.

  * 🔑 By clicking on the storage object, we can already see the id field even though we have zero records.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 By using the `OpenDB()` from the `idb` package.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `22-Stu_IndexedDB/README.md`.

### 14. Student Do: IndexedDB (15 min)

* Direct students to the activity instructions found in `22-Stu_IndexedDB/README.md`, which are also shown below.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📐 Add Comments to Implementation of IndexedDB

  Work with a partner to add comments that describe the functionality of the code found in the [database.js](./Unsolved/src/js/database.js) file.

  ## 📝 Notes

  This activity takes place in Chrome DevTools; we will hook up the UI in later activities.

  To launch the application and view the IndexedDB store in Chrome DevTools, follow these steps:

  1. In the command line, navigate to `22-Stu_IndexedDB/Unsolved`.

  2. Run `npm install`.

  3. To launch the application, run `npm run start`.

  4. Open the `index.html` file in the browser from the  `dist` directory.

  5. To view the IndexedDB store, visit the `Application` tab in Chrome DevTools.

  Refer to the documentation:

  * [NPM docs on IndexedDB](https://www.npmjs.com/package/idb)

  * [MDN Web Docs on the IndexedDB API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)

  ---

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * How does an object store in IndexedDB compare to a table or collection in other databases?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 15. Instructor Review: IndexedDB (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with IndexedDB? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use Office Hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ Set up IndexedDB

  * ✔️ Create an object store

  * ✔️ Versions

* Open `22-Stu_IndexedDB/Solved/assets/js/database.js` in your IDE and explain the following:

  * We import in the `idb` package and create an asynchronous  `initDB()` function.

    ```js
    import { openDB } from 'idb';

    const initdb = async () =>
    ```

  * 🔑 The `idb` package allows us to make IndexedDB asynchronous and cleans up a lot of the messy syntax that IndexedDB has.

  * We call the `OpenDB()` method from the `idb` package.

    ```js
    const initdb = async () =>
    openDB('todos', 1, {
      upgrade(db) {
        if (db.objectStoreNames.contains('todos')) {
          console.log('todos database already exists');
          return;
        }

        db.createObjectStore('todos', { keyPath: 'id', autoIncrement: true });
        console.log('todos database created');
      },
    });
    ```

  * 🔑 For the `OpenDB()` method, we pass in the name of our database and the version we want to use.

  * 🔑 Next, we call the `upgrade()` function, which takes our database as an argument. Check to see if the object store already exists in the users' web browser.

  * 🔑 Finally, we create a new object store if one doesn't already exist. The object store will always have an `id keyPath` that auto-increments for us.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What does the `keyPath` do?

  * 🙋 It automatically creates a new key to identify data records that are stored in the database.

  * ☝️ On which tab in Chrome DevTools can we inspect our object store?

  * 🙋 The Application tab under `IndexedDB`.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API), and attend Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

## 16. Instructor Demo: IndexedDB CRUD (5 min)

* Open `23-Ins_IndexedDB-CRUD/assets/js/database.js` in your IDE and explain the following:

  * 🔑 To use the IndexedDB object store that we set up, we need to implement a CRUD operation.

  * We create and export an asynchronous function called `postDb()`.

    ```js
    export const postDb = async (content) => {
    };
    ```

  * The `postDb()` function will accept the `content` that we want to store in the database as an argument.

  * Next, we open a transaction with our database.

    ```js
    export const postDb = async (content) => {
      const todosDb = await openDB('todos', 1);

      const tx = todosDb.transaction('todos', 'readwrite');

      const store = tx.objectStore('todos');

      const request = store.add({ todo: content });

      const result = await request;
      console.log('🚀 - data saved to the database', result);
    };
    ```

  * 🔑 We store the connection to our database inside a variable called `todosDb`.

  * 🔑 Next, we create a new `transaction` that expects the database name and privileges. Because we are writing to the database, we need to set the privileges to `readwrite`.

  * 🔑 Create a variable that will hold a reference to the object store.

  * 🔑 Finally, we use the `add()` method that is attached to the object store and pass in the `contents`.

  * Once we have finished writing to the database, we expect a result to confirm the transaction.

  * Let's look at how we can retrieve all the data in the database.

    ```js
    // Export a function we will use to GET all from the database.
    export const getAllDb = async () => {
      // Create a connection to the database database and version we want to use.
      const todosDb = await openDB('todos', 1);

      // Create a new transaction and specify the database and data privileges.
      const tx = todosDb.transaction('todos', 'readonly');

      // Open up the desired object store.
      const store = tx.objectStore('todos');

      // Use the .getAll() method to get all data in the database.
      const request = store.getAll();

      // Get confirmation of the request.
      const result = await request;
      console.log('result.value', result);
      return result;
    };
    ```

  * 🔑 This is similar to earlier, but this time we are using `getAll()` on the object store.

  * Let's look at how we can retrieve a single record in the database.

    ```js
    export const getOneDb = async (id) => {
      console.log('GET from the database');

      // Create a connection to the database and version we want to use.
      const todosDb = await openDB('todos', 1);

      // Create a new transaction and specify the database and data privileges.
      const tx = todosDb.transaction('todos', 'readonly');

      // Open up the desired object store.
      const store = tx.objectStore('todos');

      // Use the .get() method to get a piece of data from the database based on the id.
      const request = store.get(id);

      // Get confirmation of the request.
      const result = await request;
      console.log('result.value', result);
      return result;
    };
    ```

  * 🔑 This is similar to what we did earlier, but this time we are using `get()` on the object store and pass in the `id`.

* Run `npm run dev` and open up the `localhost:8080` to demonstrate the following:

  * Add an item to the TODO list and open the Application tab in Chrome DevTools. Under the `IndexedDB` section, inspect the contents of the object store.

  * 🔑 We see that our data is now being stored and retrieved from the IndexedDB object store.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 We need to open a transaction with the desired object store, and use it to correct the method on our store.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `24-Stu_IndexedDB-CRUD/README.md`.

### 17. Student Do: IndexedDB CRUD (15 min)

* Direct students to the activity instructions found in `24-Stu_IndexedDB-CRUD/README.md`, which are also shown below.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🐛 The Delete Button Does Not Remove the List Item When Clicked

  Work with a partner to resolve the following issues:

  * As a user, I want to be able to delete a list item from a list when I click on the list item.

  * As a user, I want to be able to edit a list item when I click the Edit button.

  ## Expected Behavior

  When a user clicks on an item, it is removed from the list of tasks.

  When a user clicks on the Edit button, a text input is displayed with the list item to be edited. After pressing the Enter key, the list item is updated accordingly.

  ## Actual Behavior

  When a user clicks on the item, it is noy removed from the list of tasks.

  When a user clicks the Edit button, a text input does not appear with the list item to be edited. After pressing the Enter key, the list item is not updated properly.

  ## Steps to Reproduce the Problem

  To reproduce the problem, follow these steps:

  1. In the command line, navigate to `24-Stu_IndexedDB-CRUD/Unsolved`.

  2. Run `npm install`.

  3. To launch the application, run `npm run dev`.

  4. Navigate to `http://localhost:8080` in your browser.

  5. Create a new To Do item at the bottom of the page.

  6. Click on a list item to attempt to delete it.

  7. Click the Edit button to attempt to edit the list item.

  ## Assets

  The following image demonstrates the web application's appearance and functionality:

  ![Demo of the TODO list by adding, removing, and editing a list item.](./Assets/todo-list.gif)

  ---

  ## 💡 Hints

  What types of permissions do you need to alter data inside a database?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * How does the usage of CRUD operations with IndexedDB compare with their usage with SQL databases?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 18. Instructor Review: IndexedDB CRUD (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with CRUD in IndexedDB? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use Office Hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ IndexedDB CRUD

  * ✔️ `.delete()`

  * ✔️ `.put()`

* Open `24-Stu_IndexedDB-CRUD/Solved/assets/js/database.js` in your IDE and explain the following:

  * 🔑 Because we are altering a record in the database, we need to use `readwrite` privileges in our transaction.

    ```js
    export const deleteDb = async (id) => {
      console.log('DELETE from the database', id);
      const todosDb = await openDB('todos', 1);
      const tx = todosDb.transaction('todos', 'readwrite');
      const store = tx.objectStore('todos');
      const request = store.delete(id);
      const result = await request;
      console.log('result.value', result);
      return result;
    };
    ```

  * 🔑 We must use the `todos` database in the transaction for the proper data to be updated.

    ```js
    export const putDb = async (id, content) => {
      console.log('PUT to the database');
      const todosDb = await openDB('todos', 1);
      const tx = todosDb.transaction('todos', 'readwrite');
      const store = tx.objectStore('todos');
      const request = store.put({ id: id, todo: content });
      const result = await request;
      console.log('🚀 - data saved to the database', result);
    };
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is the name of the method to get all of the records in the database?

  * 🙋 `getAll()`

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API), and attend Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 19. Instructor Demo: Manifest (5 min)

* Open `25-Ins_Manifest/manifest.json` in your IDE and explain the following:

  * 🔑 The `manifest.json` file is a JSON file that contains certain metadata about our web application that informs the user's browser or mobile device how to run the application.

  * 🔑 For our web application, we have to provide a `name` property inside the `manifest.json` file.

  * We can optionally provide a `short_name` for our web application.

    ```json
    {
      "short_name": "Manifest",
      "name": "TODOs Manifest Example",
    }
    ```

  * 🔑 Next, we provide our `icons` for all different types of screens.

    ```json
    "icons": [
      {
      "src": "./assets/images/icon_96x96.png",
      "type": "image/png",
      "sizes": "96x96",
      "purpose": "any maskable"
      },
      {
        "src": "./assets/images/icon_128x128.png",
        "type": "image/png",
        "sizes": "128x128",
        "purpose": "any maskable"
      },
      {
        "src": "./assets/images/icon_192x192.png",
        "type": "image/png",
        "sizes": "192x192",
        "purpose": "any maskable"
      },
      {
        "src": "./assets/images/icon_512x512.png",
        "type": "image/png",
        "sizes": "512x512",
        "purpose": "any maskable"
      }
    ],
    ```

  * 🔑 We have to provide an image that is 512px large so that our `manifest.json` file can create a loading screen for our application. We must have this icon for our app to be installable!

  * Let's finish the `manifest.json` file by adding a `description` and a few other properties.

    ```json
    {
    "short_name": "Manifest",
    "name": "TODOs Manifest Example",
    "icons": [
      {
        "src": "/assets/images/icon_96x96.png",
        "type": "image/png",
        "sizes": "96x96",
        "purpose": "any maskable"
      },
      {
        "src": "/assets/images/icon_128x128.png",
        "type": "image/png",
        "sizes": "128x128",
        "purpose": "any maskable"
      },
      {
        "src": "/assets/images/icon_192x192.png",
        "type": "image/png",
        "sizes": "192x192",
        "purpose": "any maskable"
      },
      {
        "src": "/assets/images/icon_512x512.png",
        "type": "image/png",
        "sizes": "512x512",
        "purpose": "any maskable"
      }
    ],
    ```

  * 🔑 Here, we provide a `start_url` for our web application and some styling with the `theme_color` and `background_color`.

    ```json
    "orientation": "portrait",
    "display": "standalone",
    "start_url": "/",
    "description": "Keep track of important tasks!",
    "background_color": "#7eb4e2",
    "theme_color": "#7eb4e2"
    ```

* Open `25-Ins_Manifest/assets/js/install.js` in your IDE and explain the following:

  * 🔑 When we launch the application in our browser and our app is installable, we will see an install button inside of the address bar.

  * 🔑 We also can create our own install button, using the following:

    ```js
    const installBtn = document.getElementById("installBtn");

    window.addEventListener('beforeinstallprompt', (event) => {
        console.log('👍', 'beforeinstallprompt', event);
        // Store the event so it can be used later.
        window.deferredPrompt = event;
        // Remove the 'hidden' class from the install anchor tag.
        installBtn.classList.toggle('hidden', false);
      });

    installBtn.addEventListener('click', async () => {
      console.log('👍', 'installBtn-clicked');
      const promptEvent = window.deferredPrompt;
      if (!promptEvent) {
      return;
      }
      // Show the install prompt.
      promptEvent.prompt();
      // Show the result
      const result = await promptEvent.userChoice;
      console.log('👍', 'userChoice', result);
      // Reset the deferred prompt variable, prompt() can only be used once.
      window.deferredPrompt = null;
      installBtn.classList.toggle('hidden', true);
    });

    window.addEventListener('appinstalled', (event) => {
      console.log('👍', 'appinstalled', event);
      // Clear the prompt
      window.deferredPrompt = null;
    });
    ```

  * We have connected our `<a>` tag to now launch the installation prompt.

* Open `25-Ins_Manifest/service-worker.js` in your IDE and explain the following:

  * 🔑 For the `manifest.json` file to work, we need to have at the minimum service worker that registers, has scope, and has a fetch method in place.

    ```js
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function() {
        navigator.serviceWorker.register('./service-worker.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
      });
    }

    this.addEventListener('fetch', function (event) {
      // This fetch function is required for the SW to be detected and is intentionally empty
      // For a more robust, real-world SW example see: https://developers.google.com/web/fundamentals/primers/service-workers
    });
    ```

* Open `25-Ins_Manifest/index.html` in your IDE and explain the following:

  * 🔑 For the `manifest.json` file to work, we also need to import it into our `index.html` file.

    ```html
    <link rel="manifest" href="./manifest.json">
    ```

* Open `25-Ins_Manifest/index.html` with Live Server and demonstrate the following:

  * Click the Install! button on the webpage.

* Navigate to your computer's Launchpad (Mac) or Desktop (Windows) to demonstrate the following:

  * The app is installed and an the icon appears.

  * When we click on the icon, the app launches.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What file do we need to create an installable PWA?

  * 🙋 A `manifest.json` file!

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `26-Stu_Manifest/README.md`.

### 20. Student Do: Manifest (15 min)

* Direct students to the activity instructions found in `26-Stu_Manifest/README.md`, which are also shown below.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📖 Implement a Manifest.json File with Webpack

  Work with a partner to implement the following user story:

  * As a developer, I want to be able to automatically generate a `manifest.json` file inside `dist` when I run my application.

  ## Acceptance Criteria

  * It is done when I can install my application as a Progressive Web App.

  * It is done when I can see my `manifest.json` file generated inside Chrome DevTools.

  ## 📝 Notes

  Refer to the documentation:

  [Webpack PWA Manifest plugin documentation.](https://www.npmjs.com/package/webpack-pwa-manifest)

  ---

  ## 💡 Hints

  How could our JSON be represented in a JavaScript object?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What is each key in a `manifest.json` file responsible for?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 21. Instructor Review: Manifest (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with `manifest.json`? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use Office Hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `manifest.json`

  * ✔️ Installable web applications

  * ✔️ `manifest.json` properties

* Open `26-Stu_Manifest/Solved/webpack.config.js` in your IDE and explain the following:

  * 🔑 Install the webpack plugin `webpack-pwa-manifest`.

    ```bash
    npm install --save-dev webpack-pwa-manifest
    ```

  * Import the `webpack-pwa-manifest` package into your `webpack.config.js` file.

    ```js
    const WebpackPwaManifest = require('webpack-pwa-manifest');
    ```

  * 🔑 Under the `plugins` property, declare a new plugin using `WebpackPwaManifest`.

    ```js
    plugins: [
        new HtmlWebpackPlugin({
          template: './index.html',
        }),

        new GenerateSW(),
        new WebpackPwaManifest({ }),

      ],
    ```

  * 🔑 Fill out the JavaScript object with the properties that we saw inside the `manifest.json` file earlier.

    ```js
    plugins: [
        new HtmlWebpackPlugin({
          template: './index.html',
        }),

        new GenerateSW(),
        new WebpackPwaManifest({
          name: 'TODOs',
          short_name: 'TODOs',
          description: 'Keep track of important tasks!',
          background_color: '#7eb4e2',
          theme_color: '#7eb4e2',
          start_url: '/',
          publicPath: '/',
          icons: [
            {
              src: path.resolve('assets/images/logo.png'),
              sizes: [96, 128, 192, 256, 384, 512],
              destination: path.join('assets', 'icons'),
            },
          ],
         }),

      ],
    ```

* 🔑 You can see most of the JSON coordinates to a key in the JavaScript object, but we have two properties that look different.

* 🔑 The `publicPath` tells webpack where to serve the bundled.

* 🔑 The `icons` now generate the properly sized icons for us based on one provided image.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is the name of the webpack plugin that we use to generate a `manifest.json` file?

  * 🙋 `webpack-pwa-manifest`

  * ☝️ Do we need a service worker for us to use a `manifest.json` file?

  * 🙋 Yes!

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on manifest.json](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json), and attend Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `27-Evr_Git-Hooks/README.md`.

## 22. Everyone Do: Git (20 min)

* Open the [Git Docs on Git hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) in your browser and explain the following:

  * When working with a team, we often have a certain set of practices that we want everyone to follow when using a repository. Git hooks provide a convenient way to execute custom scripts when a certain action is performed in order to remind the team of the established rules.

  * For example, if we want to add a reminder to our teammates about the way the commit message should be styled, we can set up a Git hook to listen for a commit event and then execute a script to send an automated reminder.

  * Each Git hook is local to a single repository, and we must install the hook in each repository where we want the script to execute.

  * To install a Git hook, we either start with a pre-written sample hook provided by Git or write a custom hook on our own.

* Direct students to the activity instructions found in `27-Evr_Git-Hooks/README.md`.

* While everyone is working on the activity, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be addressed. It's a good way for your team to prioritize students who need extra help.

* Open the command line and demonstrate the following:

  * 🔑 We initialize a new repository and enter `ls .git/hooks` to see a list of pre-written sample hooks that Git provides with each new repository.

    ```bash
    mkdir hook-test
    cd hook-test
    git init
    ls .git/hooks
    ```

  * Let's explore one of these hooks. We enter `code .git/hooks/pre-commit.sample` to open the `pre-commit` hook in VS Code.

  * 🔑 We see that Git hooks are written as shell hooks, and this hook is executed before a commit is made to check if files that use non-ASCII names are being used. To apply this hook to our repository, we simply rename it and remove the `.sample` extension.

    ```bash
    mv .git/hooks/pre-commit.sample .git/hooks/pre-commit
    ```

  * 🔑 We can also write our own custom hooks. To start, we add a new file in the `hooks` directory to hold our custom hook and set the permissions to execute.

    ```bash
    touch .git/hooks/post-checkout
    chmod +x .git/hooks/post-checkout
    code .git/hooks/post-checkout
    ```

  * We then add the shell script logic to set a safe list of issue/feature names, get the current branch, and check if the name matches a name in the safe list.

    ```bash
    #!/bin/sh
    safelist=("main", "develop", "staging")
    branch=$(git branch --show-current)
    if [[ ! ${safelist[*]} =~ "$branch" ]] && [[ ! "$branch" =~ ^(issue/|feature/).* ]]
    then
      echo "Warning!"
      echo 'If feature or issue branch, please use "issue/" or "feature/" prefix.'
    fi
    ```

  * We can now use our new Git hook to set a reminder to use the team's naming convention within the repository.

* Answer any questions before ending the class.

### 23. END (0 min)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this [anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

---
2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

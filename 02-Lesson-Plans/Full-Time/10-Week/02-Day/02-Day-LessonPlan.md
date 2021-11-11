# 19.2 Full-Time Lesson Plan: Workbox, Caching, and Service Workers

## Overview

In this class, students will learn how to use the workbox library to cache and serve static assets. Students will also become familiar with the different methods workbox provides to create a service worker. Additionally, students will learn some of the caching strategies that workbox provides out of the box.

## Instructor Notes

* In this lesson, students will complete activities `15-Ins_Caching` through `27-Stu_Activity-Title`.

* This unit features activities that will require students to save and refresh the browser in order to see changes. The very nature of PWAs means that, by design, students will likely run into issues with cached assets interfering while debugging and testing.

  > **Important**: If you are having issues with cached assets, please use a private or incognito window to view the application.

* For Chrome users, you can open an incognito window by clicking the three dots in the top-right corner of the browser. From there, click the "New Incognito Window" button. You can also use hot keys to open an incognito window: on macOS, press Command + Shift + N; on Windows, press Control + Shift + N.

* In addition to using a private window, students can troubleshoot caching issues further by completely unregistering the service worker. This will allow the browser to cache the assets again. Details on how to do this will vary among browsers, but generally you can find the option to do this in the browser's developer tools.

* Remind students to do a `git pull` of the class repo and to have today's activities ready and open in VS Code.

* If you are comfortable doing so, live code the solutions to the activities. If not, just use the solutions provided and follow the prompts and talking points for review.

* Let students know that the Bonus at the end of each activity is not meant to be extra coding practice, but instead is a self-study on topics beyond the scope of this unit for those who want to further their knowledge.

## Learning Objectives

* Leverage caching strategies to optimize performance.

* Execute a full-stack application with a server and client-side development server.

## Time Tracker

| Start  | #   | Activity Name                       | Duration |
|---     |---  |---                                  |---       |
| 10:00AM| 1   | Instructor Demo: Cache CSS and JavaScript Files                   | 0:05     |
| 10:05AM| 2   | Student Do: Cache CSS and JavaScript Files                        | 0:15     |
| 10:20AM| 3   | Instructor Review: Cache CSS and JavaScript Files                 | 0:10     |
| 10:30AM| 4   | Instructor Demo: Caching Images                    | 0:05     |
| 10:35AM| 5   | Student Do: Caching Images                        | 0:15     |
| 10:50AM| 6   | Instructor Review: Caching Images                 | 0:10     |
| 11:00AM| 7   | Instructor Demo: Client-Server Model                    | 0:05     |
| 11:05AM| 8   | Student Do: Client-Server Model                        | 0:15     |
| 11:20AM| 9   | Instructor Review: Client-Server Model                 | 0:10     |
| 11:30AM| 10  | FLEX                                | 0:30     |
| 12:00PM| 11  | BREAK                               | 0:30     |
|        |     | **ODD.3 BEGINS**                    |          |
| 12:30PM| 12  | Instructor Do: Stoke Curiosity      | 0:10     |
| 12:40PM| 13  | Instructor Demo:                    | 0:05     |
| 12:45PM| 14  | Student Do:                         | 0:15     |
| 1:00PM | 15  | Instructor Review:                  | 0:10     |
| 1:10PM | 16  | Instructor Demo:                    | 0:05     |
| 1:15PM | 17  | Student Do:                         | 0:15     |
| 1:30PM | 18  | Instructor Review:                  | 0:10     |
| 1:40PM | 19  | Instructor Demo:                    | 0:05     |
| 1:45PM | 20  | Student Do:                         | 0:15     |
| 2:00PM | 21  | Instructor Review:                  | 0:10     |
| 2:10PM | 22  | Everyone Do: Git                    | 0:20     |
| 2:30PM | 23  | END                                 | 0:00     |

---

## Class Instruction

### 1. Instructor Demo: Cache CSS and JavaScript Files (5 min) 

* Welcome students to class.

* Navigate to `15-Ins_Caching` in your terminal and run `npm i && npm run dev`. This will install the dependencies and start the development server.

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

  * It is done when I have registered a new Wqorkbox service worker inside the `src/index.js` file using the `Workbox` constructor.

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

* Open `src/index.js` in your IDE to demonstrate the following:

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

* Open `Solved/src/sw.js` in your IDE to demonstrate the following:

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

* Navigate to `17-Ins_Caching-Images` in your terminal and run `npm i && npm run dev`. This will install the dependencies and start the development server.

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

  * Let's test our work by running the `npm i && npm run dev` command again from the root of the `/Solved` directory. This time, we can see that the images are now being cached. Specifically, after a few refreshes, the browser will show a new cache called `my-image-cache` that contains the images.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are some challenges that you encountered with caching images?

  * 🙋 Caching images can be difficult to troubleshoot due to cors issues. We can use the `cors-anywhere` package to proxy requests to the server, or we can make sure that the images are served from the same domain as the server.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Workbox docs on caching images](https://developers.google.com/web/tools/workbox/guides/common-recipes), and attend Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 7. Instructor Demo: Client-Server Model (5 min) 

* Navigate to `19-Ins_Client-Server` in your terminal and run `npm i` to install all dependencies and demonstrate the following:

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

* Navigate to `20-Stu_Client-Server` in your terminal and run `npm i && npm run dev`. This will install the dependencies and start the development server.

  * 🔑 When we run this command, we notice that our terminal beings to start both the client's start command and the backend Express.js server.

    ```console
    concurrently "cd server && npm run server" "cd client && npm run dev"
    ```

  * 🔑 We can see that because of our root level `dev` command, we invoke `concurrently` to run both the client and the backend server at the same time.

  * The server is navigated to first, and then the `npm run server` command is invoked. This will start the Express server and listen on port `3000`.

* Open `Solved/server/server.js` in your IDE to demonstrate the following:

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

* Open `Solved/package.json` in your IDE to demonstrate the following:

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

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

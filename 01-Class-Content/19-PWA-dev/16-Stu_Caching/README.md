# 📖 Implement Caching for CSS and JS files

Work with a partner to implement the following user story:

* As a developer, I want to cache the CSS and JS files so that I don't have to download them every time I load a page.

* As a developer, I want to implement workbox caching strategies so that I can improve the performance of the app.

## Acceptance Criteria

* It's done when I have installed the `workbox-webpack-plugin` as a devDependency.

* It's done when I have registered the service worker inside the `client/index.js` file after checking to see if the browser supports service workers.

* It's done when I have imported `injectManifest` using destructuring assignment from the `workbox-webpack-plugin` inside the `webpack.config.js` file.

* It's done when I have added a new `InjectManifest` plugin to the `plugins` array in `webpack.config.js`.

* It's done when I have specified the `swSrc` and `swDest` properties in the `InjectManifest` constructor in the `plugins` array in `webpack.config.js`.

* It's done when I have registered a route for the caching of static assets (JavaScript, HTML, CSS) by using a `staleWhileRevalidate` strategy for files that aren't precached, by matching against the destination of the incoming request.

## 📝 Notes

Refer to the documentation:

* [Google Docs on Common Recipes](https://developers.google.com/web/tools/workbox/guides/common-recipes)

## Assets

@TODO: Add a screenshot
The following image demonstrates the web application's appearance and functionality:

![]()

---

## 💡 Hints

* What does the `staleWhileRevalidate` strategy do? Is there another strategy that could be used?

* What are some different methods we can match files we want to cache? How can we use the `destination` property on the `request` object to our advantage?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* What is the difference between GenerateSW and InjectManifest?

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

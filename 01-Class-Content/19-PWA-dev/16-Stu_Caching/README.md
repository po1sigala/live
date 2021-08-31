# 📖 Implement Caching for CSS and JS

Work with a partner to implement the following user story:

* As a developer, I want to cache the CSS and JS files so that I don't have to download them every time I load a page.

* As a developer, I want to implement workbox caching strategies so that I can improve the performance of the app.

## Acceptance Criteria

* It's done when I have installed the `workbox-webpack-plugin` as a devDependency.

* It's done when I have registered the service worker inside the `client/index.js` file after checking to see if the browser supports service workers.

* It's done when I have imported and configured the `workbox-webpack-plugin` to the `webpack.config.js` file.

* It's done when I have updated the `plugins` array in the `webpack.config.js` file to invoke a new `generateSw()` method.

* It's done when I have created a root level `./src/src-sw.js` file that will invoke workbox precaching using the `precacheAndRoute` method.

## 📝 Notes

Refer to the documentation:

* [Google Docs on Caching Strategies](https://developers.google.com/web/tools/workbox/guides/caching-strategies)

## Assets

<!-- TODO: Add a screenshot -->
The following image demonstrates the web application's appearance and functionality:

![]()

---

## 💡 Hints

* The `self.__precacheManifest` variable gets dynamically generated and contains a list of files that are used for what purpose?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* What is the difference between GenerateSW and InjectManifest?

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

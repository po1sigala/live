# 🐛 Images are not being cached properly

Work with a partner to resolve the following issue(s):

* As a developer, I want to be able to rely on the browser to cache images so that I can create a faster application for the end user.

## Expected Behavior

The browser should load images almost instantly from the cache and not need to make a request to the server. This can be verified by inspecting the network tab in the browser when the user visits the page after the first time.

## Actual Behavior

When a user visits the page even after the first time, the browser is still making network requests to the server to retrieve the images.

## Steps to Reproduce the Problem

1. Start the dev server by running `npm run dev`

2. Open a new browser tab and navigate to the page at `http://localhost:3000/`

3. Open the developer tools in your browser and click on the network tab and notice that there are multiple requests to the server for the images that were not cached.

---

## 💡 Hints

What is a cache miss and how can we use the advanced recipe to resolve this issue?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* What is Cache Storage API? How do we use it?

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

# 🐛 Images Are Not Being Cached Properly

Work with a partner to resolve the following issue:

* As a developer, I want to be able use runtime caching so that my images are cached as they are used. 

## Expected Behavior

Images should not only be cached as they are used and not precached. In addition, the total number of cached images should be limited to 2. 

## Actual Behavior

All images are precached. 

## Steps to Reproduce the Problem

To reproduce the problem, follow these steps:

1. Navigate to the `Unsolved` folder and run `npm install` and `npm run start:dev`

2. Open a new incognito browser tab and navigate to `http://localhost:3001/`.

3. Open Chrome DevTools, click the Application tab and select Cache Storage to see the precached files. Note: You may need to do hard refresh!

## 💡 Hints

* How can we enable runtime caching when using the GenerateSW class of the workbox webpack plugin?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* What is the Cache Storage API? How do we use it?

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

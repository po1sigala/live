# 🐛 Query on Embedded Document Not Returning Matching Data

Work with a partner to resolve the following issue(s):

* As a developer, I should be able to execute a query that accesses the price data stored in an embedded document.

## Expected Behavior

When I query the embedded document using the `db.collection.find()` method, the matching data should be returned. 

## Actual Behavior

When I query the embedded document using the `db.collection.find()` method, no matching data is returned. 

## Steps to Reproduce the Problem

1. In the Unsolved folder, run `npm install` and `node server`

2. Open Insomnia and enter the GET Route `/price-less-than-20`. The data should be returned. 

---

## 💡 Hints

What notation do you use to access an object inside another object in JavaScript? 

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* How would you query an array of embedded documents in MongoDB? 

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

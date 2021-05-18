# 🐛 Tag Population Not Working

Work with a partner to resolve the following issue(s):

* As a user, I should be able to see a list of tags associated with a `post` after run a query for all posts using the Mongoose populate method.

## Expected Behavior

When a user queries a `post`, the controller should find the `post` with an array populated with associated `tags`.

## Actual Behavior

When a user runs the application in an attempt to get a post, they are presented with an error:

```sh
TypeError: Invalid schema configuration: `Tag` is not a valid type at path `ref`
```
## Steps to Reproduce the Problem

1. Navigate to `Unsolved/` in your command line window

2. Run `npm run seed` to populate our example database

3. Run `npm start` to attempt to query the database

4. Notice error

## 💡 Hints

When referencing another schema inside our Post schema, what attributes and types need to be specified?  

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* What are the performance benefits associated with using the populate method in mongoose as opposed to the $lookup operator in MongoDB? 

Use [Google](https://www.google.com) or another search engine to research this.

---
@TODO © YEAR Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

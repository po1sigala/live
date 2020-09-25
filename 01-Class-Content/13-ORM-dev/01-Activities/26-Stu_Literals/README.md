# 🐛 Users Route is Missing Data

Work with a partner to resolve the following issue(s):

* As a user, I want to see the books I own and a total count of how many books are short novels.

## Expected Behavior

When a request is made for user data, the response includes a `shortBooks` property that totals the number of books with a page count between 100 and 300.

## Actual Behavior

The user data in the response does not include a `shortBooks` property.

## Steps to Reproduce the Problem

1. Run `node seeds.js` from the command line to seed the database.

2. Run `npm start` to start the server.

3. In Insomnia Core, make a GET request to `/api/readers/1`.

4. Note that the response data does not include a `shortBooks` property.

---

## 💡 Hint(s)

* How could you obtain this short novel count using a regular SQL query?

## 🏆 Bonus

* If you have fully completed the above tasks, here is something you and your partner can work through as an added challenge to further your knowledge:

  * How would you build a many-to-many relationship using Sequelize?

* Use [Google](https://www.google.com) or another search engine to research the above.

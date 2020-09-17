# 🐛 Users Route is Missing Data

Work with a partner to resolve the following issue(s):

* As a user, I want to see the books I own and a total count of how many books are short novels.

## Expected Behavior

When a GET request is made to `/api/users`, the response includes a `shortNovels` property that totals the number of books with a page count between 100 and 200.

## Actual Behavior

The data returned from `/api/users` does not include a `shortNovels` property.

---

## 💡 Hint(s)

* How could you obtain this short novel count using a regular SQL query?

## 🏆 Bonus

* If you have fully completed the above tasks, here is something you and your partner can work through as an added challenge to further your knowledge:

  * How would you build a many-to-many relationship using Sequelize?

* Use [Google](https://www.google.com) or another search engine to research the above.

# 🐛 MySQL Table isn't Being Created to Specifications

Work with a partner to resolve the following issue(s):

* As a developer, I want a MySQL table with the same name as the Sequelize model.

* As a developer, I want a more descriptive primary key name in the MySQL table.

## Expected Behavior

When Sequelize syncs the model with the database, the table name should be `book` (singular) and the primary key named `bookId`.

## Actual Behavior

The table name is `books`, and the primary key is `id`.

---

## 💡 Hint(s)

* What options do the [Sequelize docs on model basics](https://sequelize.org/master/manual/model-basics.html) outline when it comes to naming tables and fields?

## 🏆 Bonus

* If you have fully completed the above tasks, here is something you and your partner can work through as an added challenge to further your knowledge:

  * How can we apply model-based rules to all models in the Sequelize connection logic?

* Use [Google](https://www.google.com) or another search engine to research the above.

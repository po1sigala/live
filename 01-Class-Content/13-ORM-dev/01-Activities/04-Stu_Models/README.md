# 🐛 MySQL Table isn't Being Created to Specifications

Work with a partner to resolve the following issue(s):

* As a developer, I want a MySQL table with the same name as the Sequelize model.

* As a developer, I want a more descriptive primary key name in the MySQL table.

## Expected Behavior

When Sequelize syncs the model with the database, the table name should be `book` (singular) and the primary key named `bookId`.

## Actual Behavior

The table name is `books`, and the primary key is `id`.

## Steps to Reproduce the Problem

1. Run `npm start` from the command line to start the server and sync the database.

2. Run `mysql -u root -p` to log into the MySQL shell.

3. In the MySQL shell, run `USE library_db;` to switch to the library database.

4. Try to run `DESCRIBE book;`, and it will fail, because the table name is `books`.

5. Run `DESCRIBE books;` and note that the primary key is named `id` and not `bookId`.

---

## 💡 Hint(s)

* What options does Sequelize provide when it comes to naming tables and fields?

## 🏆 Bonus

* If you have fully completed the above tasks, here is something you and your partner can work through as an added challenge to further your knowledge:

  * How can we apply model-based rules to all models in the Sequelize connection logic?

* Use [Google](https://www.google.com) or another search engine to research the above.

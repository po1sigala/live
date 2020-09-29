# 🐛 Routes send back 200 status code every time

Work with a partner to resolve the following issue(s):

* As a developer, I want to see proper HTTP status codes returned so I can be aware of any errors.

* As a developer, I want to use `try/catch` to properly catch errors when using `async/await`.

## Expected Behavior

* When there is no error with the request, the 200 status code is returned.

* When there is an internal server error, the 500 status code is returned.

* When a user does not exist in the database, the 404 status code is returned along with a message "No user found with this id!".

## Actual Behavior

* Whether there is an error with the request or if the user does not exist in the database, the 200 status code is returned.

## Steps to Reproduce the Problem

1. Run `npm start` in your command line to start the server.

2. Open Insomnia Core and make a GET request to `api/users/10`.

3. Notice the 200 status code returned.

## Assets

The following code block demonstrates the expected JSON response:

```json
{
  "message": "No user with this id!"
}
```

---

## 💡 Hint(s)

* How do we return HTTP status codes?

## 🏆 Bonus

* If you have fully completed the above tasks, here is something you and your partner can work through as an added challenge to further your knowledge:

  * What other principles make up "REST"?

* Use [Google](https://www.google.com) or another search engine to research the above.
# Unit 19 Mini-Project: Deploy Contact Directory App on Heroku with Script

In this mini-project, you are given a fully functioning PWA that is almost ready to be deployed to Heroku. We can easily install this application via `localhost` but now it's up to us to make it installable via the web. We have released applications before on Heroku and it has been a pretty painless experience. PWAs are not much different but we need to implement a few different scripts so that Heroku can deliver our web application with the right bundle created by Webpack.

## User Stories

Work with your group to resolve the following issues:

* As a user, I want to be able to install the web application as a PWA.

* As a developer, I want all my scripts to run from the root directory `package.json`.

* As a developer, I want to be able to run in the command line `npm run start` and have both my client and server start.

* As a developer, I want to be able to run in the command line `npm run start:prod` to run our build script and start our server. 

* As a developer, I want to be able to run in the command line `npm run server` and have just our server start without the client.

* As a developer, I want to be able to run in the command line `npm run build` and have our client run the Webpack build script.

* As a developer, I want to be able to run in the command line `npm run install` and have all of the clients dependencies installed.

* As a developer, I want to be able to run in the command line `npm run client` and have just our client start without the server.

## Acceptance Criteria

The mini-project is complete when the following criteria are met:

* The web application can be installed from the web address provided by Heroku.

* Deployed using Heroku.

* Scripts are placed in the root directory's `package.json`.

* `npm run start` starts both the client and server.

* `npm run start:prod` runs the `build` script and starts the server.

* `npm run server` starts just the server and not the client.

* `npm run build` runs the webpack build script in the client.

* `npm run install` installs the dependencies for the client.

* `npm run client` starts the client without the server.

---

## 💡 Hints

* How do you navigate to different directories inside of bash?

* What is the operator for "and"?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* Incorporate a way to edit information on the contact card using a PUT method with IndexedDB.

---

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
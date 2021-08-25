# Unit 19 PWA Homework: Text Editor

## Your Task

Add functionality to our existing Note-taker application to allow for offline access and functionality.

The user will be able to add notes to their Note-taker with or without a connection. When entering notes offline, they should populate the notes area when brought back online.

Offline Functionality:

  * Enter notes offline

  * Enter notes offline

When brought back online:

  * Offline entries should be added to Note-taker.

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important note to a note taking application
SO THAT I reliably take notes with or without an internet connection.
```

## Acceptance Criteria

```md
GIVEN an a text editor web application 
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm start:dev` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still works in the browser
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading
WHEN I pre cache my static assets
THEN I proceed to cache my pages and any subsequent static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
```

## Mock-Up

The following animation demonstrates the application functionality:

TODO add demo gif


## Grading Requirements

This homework is graded based on the following criteria: 

### Technical Acceptance Criteria: 40%

* Satisfies all of the above acceptance criteria plus the following:

  * Uses a IndexedDB API in their application.

  * The application works without an internet connection. 

  * Automatically saves on a set time.

### Deployment: 32%

* Application deployed at live URL

* Application loads with no errors

* Application GitHub URL submitted

* GitHub repo contains application code

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate

* Application user interface style is clean and polished

* Application resembles the mock-up functionality provided in the homework instructions

### Repository Quality: 13%

* Repository has a unique name

* Repository follows best practices for file structure and naming conventions

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages

* Repository contains quality README file with description, screenshot, and link to deployed application

## Review

You are required to submit the following for review:

* The URL of the deployed application

* The URL of the GitHub repository, with a unique name and a README describing the project

- - -
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

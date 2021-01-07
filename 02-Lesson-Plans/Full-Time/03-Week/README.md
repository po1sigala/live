# Week 03: Third-Party-APIs & Server-side APIs

## Overview

When developers find themselves repeating a task, they tend to look for a way to simplify their workflow. We saw earlier how CSS frameworks were developed to ensure consistency across applications and to expedite developer workflows. Tools with similar goals have emerged in the JavaScript ecosystem. 

jQuery is a JavaScript library that simplifies DOM manipulation and event handling. It allows us to write fewer lines of code than we'd need to if we were using plain ol' JavaScript to accomplish the same end. jQuery also provides a number of methods for animations and working with APIs.

Some argue that jQuery is slowly being phased out and replaced with front-end frameworks such as React. You might not see as many job listings for jQuery developers, but it’s an important skill to master as the library is still widely used in both new and legacy code. 

Also this week we will learn the Fetch web API which can data from third-party APIs, like the OpenWeather API.

We'll use the `fetch()` method to make requests, parse through the returned datasets, and convert them to HTML elements. We'll explore how this data is typically formatted, how to look for and handle errors that might arise, and more importantly, how to read documentation when working with server-side APIs.

### Learning Objectives

* By the end of this unit, students will be able to:

  * Explain the difference between a JavaScript library and a framework
  * Incorporate jQuery into HTML documents via CDN and using its associated selector
  * Perform DOM traversals to get and select elements by tag, class, and id as well as node relationship
  * Perform DOM manipulations to add, remove, and modify elements and attributes
  * Implement interactivity using event handlers
  * Explain the importance of `document.ready()` and how to resolve issues related to dynamically generated HTML
  * Explain what JSON is.
  * Explain the methods that can be used to request data from the server.
  * Explain the difference between a client-side and server-side API.
  * Explain the client-server model and request-response pattern.
  * Implement and explain the differences between making HTTP GET requests with XMLHttpRequest, jQuery AJAX, and the Fetch API.
  * Explain HTTP response codes and handle response metadata with the Fetch API.
  * Parse JSON to dynamically generate HTML.
  * Explain the benefits and challenges of working with asynchronous JavaScript.
  * Explain and implement URL query string parameters.

### Key Topics

We'll cover the following topics in this unit:

* jQuery
* DOM traversal and manipulation
* Event handling
* this
* data-* attributes
* Client-server model
* JSON format
* URLs
* HTTP GET requests
* HTTP status codes
* Fetch API
* `curl`
* DevTools Network tab
* `document.location`

### Lesson Plans

* [3.1 - Lesson Plan](01-Day/01-Day-LessonPlan.md)
* [3.2 - Lesson Plan](02-Day/02-Day-LessonPlan.md)
* [3.3 - Lesson Plan](03-Day/03-Day-LessonPlan.md)
* [3.4 - Lesson Plan](04-Day/04-Day-LessonPlan.md)
* [3.5 - Lesson Plan](05-Day/05-Day-LessonPlan.md)

### Homework Activities

* [Day Planner](../../../01-Class-Content/05-Third-Party-APIs/02-Homework/README.md)
* [Weather Dashboard](../../../01-Class-Content/06-Server-Side-APIs/02-Homework/README.MD)

## Career Connection

Each week students receive Career Connections in the `04-Important` folders that ties what we do in the classroom to the profession, along with technical interviewing practice.

[Third-party APIs](../../../01-Class-Content/05-Third-Party-APIs/04-Important/CAREER-CONNECTION.md).
[Server-side APIs](../../../01-Class-Content/06-Server-Side-APIs/04-Important/CAREER-CONNECTION.md).

If you'd like more information on Career Services, visit the [Career Services resources page](http://bit.ly/CodingCS).

### Helpful Links

* [MDN: jQuery](https://developer.mozilla.org/en-US/docs/Glossary/jQuery)
* [Wikipedia: jQuery](https://en.wikipedia.org/wiki/JQuery)
* [jQuery Official Website](https://jquery.com/)
* [Eloquent JavaScript](http://eloquentjavascript.net/)
* [JavaScript Timing Events](http://www.w3schools.com/js/js_timing.asp)
* [Debug With Breakpoints](https://developers.google.com/web/tools/chrome-devtools/debug/breakpoints/?hl=en)
* [MDN Web Docs on the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
* [MDN Web Docs on XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
* [jQuery API Docs on .ajax()](https://api.jquery.com/jquery.ajax/)
* [MDN Web Docs on Location](https://developer.mozilla.org/en-US/docs/Web/API/Location)
* [Chrome DevTools tutorial on the Network tab](https://developers.google.com/web/tools/chrome-devtools/network)
* [GitHub documentation on the REST API](https://docs.github.com/en/rest/reference)
* [OpenWeather API documentation](https://openweathermap.org/api)

### Slide Shows

* [03.1: jQuery Begins](https://docs.google.com/presentation/d/1NBt77MEEZDhJS9_mYzqgaSLQs8eQNHnd1ay38bKlnHI/edit?usp=sharing)

* [03.2: jQuery Jubilee](https://docs.google.com/presentation/d/1OLol2xQemLl4uhvtKg7J3qx6hL4v59UTT9uRxlvfHNs/edit?usp=sharing)

* [03.3: Server-Side APIs](https://docs.google.com/presentation/d/1tL0nVHEJVeR5Bi1C1bDBUAOY2ncW9ySReklGIAzaRms/edit?usp=sharing)
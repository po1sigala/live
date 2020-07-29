# Mini Project - Train Scheduler

In this project you will work with others to create a train schedule application using Bootstrap, jQuery, jQueryUI, Moment, and Google Fonts. Break up these phases amongst members of your team.

The first three tasks will get you to MVP, so focus on those first!

## Instructions

### Task 1 - HTML Build

* Create a header/hero area that welcomes users to the application and displays the current time and date using Moment.js with a `setInterval()`

* Create a Bootstrap card component explaining the instructions of how to use the app and a button to open a modal dialog (https://getbootstrap.com/docs/4.5/components/modal/)

* The modal should contain a form asking users to fill in the following data:

  * The project's name

  * The project's type (use a `<select>` dropdown)

  * Your hourly wage for the project work

  * The project's due date (use jQuery UI's datepicker with a minimum date setting in place)

* A Bootstrap table that the project's information can be printed to that has columns for the following data:

  * The project's name

  * The project's type

  * The hourly wage

  * The due date

  * Days until the due date (use Moment calculate)

  * Estimated total earned (Hourly wage at 8 hrs/day times how many days until the due date)

* Things to keep in mind while you build:

  * Make sure any elements you need to interact with using JavaScript/jQuery are properly identified (e.g. form elements, the table body, etc.)

  * Use different `<input>` element attributes to help enforce rules such as different `type` attribute values, minimum values, and required! (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)

  * When in doubt, read the Bootstrap documentation.

---

### Task 2 - Capture Form Data

* Using jQuery, set up functionality to capture the form's input elements on submit and use that data to create a new table row on the page.

* Select and save references to every DOM element we will interact with to a variable (i.e. `var projectFormEl = $("#project-form");`) so these elements can be used later.

* Attach a "submit" event listener to the `<form>` element using jQuery.

* Upon submission, capture the four input values from the form and pass them to another function to handle printing project data. Having a function to capture the data and another function to print the data to the page's `<table>` element will help with code readability.

---

### Task 3 - Print Project Data to Page

* Create a function that will accept the four input fields' data as arguments.

* Create a table row (`<tr>`) element and save it to a variable.

* Create a table detail (`<td>`) element for each of the table columns created in Task 1 above.

* For printing the days to the due date, use Moment to get the difference between the due date and the current time in days. 

* For printing the estimated total earned amount, assume that you work an 8 hour day. So multiply the hourly rate by 8 to get the daily rate, then multiply that value by how many days until the project is due to get the estimated total earned. 

* Append all `<td>` elements to the table row created, then append the entire row to the `<tbody>` element on the page.

* Don't forget to close the modal when done!

---

### Task 4 - Delete a Project From the Table

* Update the table to accommodate one more column without a name.

* When generating a new `<tr>` for a project, add one more `<td>` that holds a button for deleting a project from the list.

* Use jQuery event delegation to attach an event listener to each of those buttons that when clicked, the parent `<tr>` element will be removed from the page.

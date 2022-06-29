# Module 05 Mini-Project: Project Tracker

In this project, you will work with others to create a project tracker application using Bootstrap, jQuery, jQueryUI, Moment, and Google Fonts. Break up these phases amongst members of your team.

## Instructions

This mini-project is divided into four tasks. The first three tasks will get you to MVP, so focus on those first!

### Task 1: HTML Build

1. Create a header/hero area that welcomes users to the application and displays the current time and date using Days.js. THe current time and date should be updated every second with `setInterval()`.

2. Create a Bootstrap card component explaining the instructions of how to use the app and a form for a user to add a new project to the tracker.

3. The form should ask users to fill in the following data:

    * The name of the project

    * The type of project (use a `<select>` drop-down)

    * The date the date the project is due.

    * The month the project is due. (Use a `<select>` input with the name for each month. The `value` attribute may be set on each `<option>` to return a number for the month the user has selected.)

    * The year the project is due.

    * Optional: Use the jQuery UI datepicker instead of the three inputs to get the date.

4. Include a Bootstrap table that the project's information can be printed to with columns for the following data:

    * Project name

    * Project type

    * Due date

While you build, remember the following guidelines:

* Ensure that any elements you need to interact with using JavaScript/jQuery are properly identified (e.g., form elements, the table body, etc.).

* Use different `<input>` element attributes to help enforce rules, like different `type` attribute values, minimum values, and required! See the [MDN web docs on the HTML input element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) for more guidance.

* When in doubt, read the Bootstrap documentation.

---

### Task 2: Capture Form Data

1. Using jQuery, set up functionality to capture the form's input elements on submit and use that data to create a new table row on the page.

2. Select and save references to every DOM element we will interact with to a variable (i.e., `var projectFormEl = $("#project-form");`) so that we can use these elements later.

3. Attach a submit event listener to the `<form>` element using jQuery.

4. On submission, capture the input values from the form and update localStorage so that the projects that have been added are persistent.

---

### Task 3: Print Project Data to Page

1. Create a function that will read the saved projects from localStorage.

2. Create a table row (`<tr>`) element and save it to a variable.

3. If the project is past due, give the row a class so that the row for the project will have a light red background. If the project is due today, give the row a class so that the row will have a light yellow class.

4. Create a table detail (`<td>`) element for each of the table columns created in Task 1.

5. Create a td element for each column and append it to the `<tr>` element.

6. Append each `<tr>` to the `<tbody>` element on the page.

7. Don't forget to clear the `<tbody>` before adding all the rows.

8. Add a call to the function when the page loads.

9. Update the function responsible for capturing form data so that it calls the function for printing the data.

---

### Task 4: Delete a Project From the Table

1. Update the table to accommodate one more column without a name.

2. When generating a new `<tr>` for a project, add one more `<td>` that holds a button for deleting a project from the list.

3. Use jQuery event delegation to attach an event listener to each of those buttons so that when clicked, the parent `<tr>` element will be removed from the page.

---

© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

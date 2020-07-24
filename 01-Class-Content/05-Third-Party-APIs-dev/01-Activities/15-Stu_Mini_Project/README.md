# Mini Project - Train Scheduler

In this project you will work with others to create a train schedule application using Bootstrap, jQuery, jQueryUI, Moment, and Google Fonts. Break up these phases amongst members of your team.

The first three tasks will get you to MVP, so focus on those first!

## Instructions

### Task 1 - HTML Build

* Create a header/hero area that welcomes users to the application and displays the current time and date

* Create a Bootstrap card component explaining the instructions of how to use the app and a button to open a modal dialog

* The modal should contain a form asking users to fill in the following data:

  * The train's name

  * The train's destination

  * The train's first departure time of the day

  * How frequently does the train depart (in minutes)

* A Bootstrap table that the train's information can be printed to that has columns for the following data:

  * The train's name

  * The train's destination

  * The frequency of how often the train departs

  * Minutes until the next train (to be calculated using Moment)

  * The next train departure time (to be calculated using Moment)

* Things to keep in mind while you build:

  * Make sure any elements you need to interact with using JavaScript/jQuery are properly identified (e.g. form elements, the table body, etc.)

  * Use different `<input>` element attributes to help enforce rules such as different `type` attribute values, minimum values, and required! (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)

  * When in doubt, read the Bootstrap documentation.

---

### Task 2 - Capture Form Data

* Using jQuery, set up functionality to capture the form's input elements on submit and use that data to create a new table row on the page.

* Select and save references to every DOM element we will interact with to a variable (i.e. `var trainFormEl = $("#train-form");`) so these elements can be used later.

* Attach a "submit" event listener to the `<form>` element using jQuery.

* Upon submission, capture the four input values from the form and pass them to another function to handle printing train data. Having a function to capture the data and another function to print the data to the page's `<table>` element will help with code readability.

---

### Task 3 - Print Train Data to Page

* Create a function that will accept the four input fields' data as arguments.

* Create a table row (`<tr>`) element and save it to a variable. Provide the table row with a class of `train-row` and set a data attribute named `data-first-train` with a value of the first train time. This data isn't important for users to see, but it will be important to update the train time later.

* Create a table detail (`<td>`) element for each of the columns created in Task 1 above. Provide each of them with a class names so we can reference them later (i.e. `train-name` or `train-destination`).

* For the "Minutes to Next Train" value, create another function that accepts the first train time and frequency values as arguments and returns the value. This function will do the following:

  * Parse the first train time into a Moment object. Subtract one day from it to make the timing easier.

  * Get the total difference in minutes between the current time and the parsed first train time.

  * Calculate the remaining minutes when dividing the total difference by the frequency. This will help determine how many minutes away the next train is.

  * Get the minutes to next train by subtracting the remaining minutes from the frequency values. Be sure to wrap this in a `parseInt()` to avoid any floating point numbers.

  * Return the minutes to next train value to be printed to the page.

* For the "Next Train Departure" time value, use Moment to add the amount of minutes to the next train to the current time and format it to be displayed.

---

### Task 4 - Update Train Schedule

* Create a function to handle updating the train schedule that will execute every 30 seconds using `setInterval()`.

* In this function, use the jQuery `$('<selector>').each()` method to iterate through every single `.train-row`.

* For each row, update the "Minutes to Next Train" and "Next Train Departure" values with the following tasks:

  * Parse each `<tr>` element provided by the `.each()` method's callback function with jQuery
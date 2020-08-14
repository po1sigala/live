$(document).ready(function () {
  // Assemble DOM elements
  var rootEl = $("#root");
  var buttonEl = $("<button class='fancy' type='submit'>Add</button>");
  var inputEl = $("<input placeholder='Item' type='text'>");
  var listEl = $("<ul>");
  var labelEl = $("<label>Add an Item</label>");
  var formEl = $("<form>");
  var headerEl = $("<h1>Shopping List</h1>");

  // Map the HTML structure
  // <h1></h1>
  // <form>
  //   <label>
  //     <input> </input>
  //   </label>
  //   <button > </button>
  // </form>
  // <ul>
  //   Add grocery items on submit
  // </ul>

  // TODO: Arrange the form elements to match the preceding hierarchical structure and attach to the root element
  // `prepend()` to ensure the `<h1>` is at the top of the page.
  rootEl.prepend(headerEl);
  // `append()` the form so it sits under the `<h1>`
  rootEl.append(formEl);
  // attach the button
  formEl.append(buttonEl);
  // `prepend()` so the label appears above the button
  formEl.prepend(labelEl);
  // `append()` the `<input>` to nest the element
  labelEl.append(inputEl);
  // Append the grocery list to `rootEl` so it appears beneath the `<form>`
  rootEl.append(listEl);

  // TODO: Create a submit event listener on the form element
  formEl.submit(function (event) {
    event.preventDefault();
    listEl.append("<li>" + inputEl.val() + "</li>");
    inputEl.val("");
  });
});

// Once the DOM has loaded, we can manipulate the DOM elements
$(document).ready(function() {
  // Assemble: Create/select DOM elements
  // Select the empty `<div>` and add the title
  var rootEl = $("#root");
  var buttonEl = $("<button>").attr("class", "fancy").attr("type", "submit").text("Add");
  var inputEl = $("<input>").attr("type", "text");
  var listEl = $("<ul>");
  var labelEl = $("<label>").text("Add an Item:");
  var formEl = $("<form>");
  var headerEl = $("<h1>").text("Shopping List");

  // Arrange: Create the hierarchical structure of the DOM elements and attach to the page
  rootEl.prepend(headerEl);
  rootEl.append(formEl);
  formEl.append(buttonEl);
  formEl.prepend(labelEl);
  labelEl.append(inputEl);
  rootEl.append(listEl);

  // Array stores the new shopping list items
  var shoppingList = []; 
  
  // Create a function to populate the list since this logic must be performed in multiple places
  function populateList(list) {
    listEl.empty();
    for(var i = 0; i < list.length; i++) {
      var itemEl = $("<li>");
      itemEl.text(list[i]);
      listEl.append(itemEl);
      itemEl.prepend("<button class=item data-id=" + i + ">X</button>");
    }
  }

  // Handler of the submit event populates a modifiable list
  formEl.submit(function (event) {
    event.preventDefault();

    // Validation so blank or other falsely values are not added
    if(inputEl.val()) {
      shoppingList.push(inputEl.val());
    }
    populateList(shoppingList);
    inputEl.val("");
  });

  // TODO: Delegate the click event to a parent element for all the delete buttons for grocery list 
  // TODO: The event handler must create a new list by removing the selected item, then repopulate
  // HINT: Use the `on()` method
  // HINT: Use keyword `this` to retrieve the user's selection
  // HINT: Use the `attr()` or `data()` method to retrieve the value of the `data-id`
});
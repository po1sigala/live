// Create an array to store the shopping list items
var shoppingList = [];

// Populates the list by first clearing the list on the page then repopulating it with the new list, the button and button attribute `data-id-*`
function populateList(list) {
  listEl.empty();
  for (var i = 0; i < list.length; i++) {
    var itemEl = $('<li>');
    itemEl.text(list[i]);
    listEl.append(itemEl);
    itemEl.prepend('<button class=item data-id=' + i + '>X</button>');
  }
}

// Change the handler of the submit event to populate a modifiable list
formEl.submit(function (event) {
  event.preventDefault();

  // Validation so blank or other falsely values are not added
  if (inputEl.val()) {
    shoppingList.push(inputEl.val());
  }
  // populate the new grocery list
  populateList(shoppingList);
  inputEl.val('');
});

// Delegated the event to the parent element, `<ul>`
listEl.on('click', 'button', function () {
  // `$(this)` selects the element selected by the click
  var removeItem = $(this).attr('data-id');
  // Alternatively
  // var removeItem = $(this).data("id");

  // Convert `removeItem` into a number
  removeItem = parseInt(removeItem);

  // Alternatively use the `.data` method which returns a number
  // var removeItem = $(this).data("id");
  var newList = [];
  for (var i = 0; i < shoppingList.length; i++) {
    if (removeItem !== i) {
      newList.push(shoppingList[i]);
    }
  }
  shoppingList = newList;

  // Render a new list with the item removed
  populateList(shoppingList);

  // Clear the input
  inputEl.val('');
});

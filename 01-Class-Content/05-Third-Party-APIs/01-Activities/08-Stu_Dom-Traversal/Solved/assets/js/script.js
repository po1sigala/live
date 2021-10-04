// Ensure the document is rendered when manipulating DOM elements
// Assemble: Create/select DOM elements
var rootEl = $('#root');

// Starting from the root element, `<main id="root">`, select all the boxes and turn them white.
rootEl.children('ul').children().css('background-color', 'white');

// Starting from <main id="root">, we select the last `<ul>` or the third row.
var rowThree = rootEl.children('ul').eq(2);

// Add the O to the first box in the last row for the win
// Select the children of the `<ul>` to select the list items, then select the first list item and add the text.
rowThree.children().eq(0).text('O');
console.log(rowThree)

// Open this file in the browser and display the console in DevTools.

// Starting from the `<main id="top">` element, place a blue border around the title of the website, Develop Community Center
$('#top').children().css('border', 'aqua dashed 3px');
console.log($('#top').children());

$('#top').children().eq(0).addClass('p-5').css('border', 'aqua solid 2px');

// Starting from `<main id="top">`, add an li element to the list, ul.

// Starting from `<main id="top">`, add the classes to all of its child `<li>` elements
$('#top').children().eq(4).children().css('background-color', 'aqua');

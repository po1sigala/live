// Open this file in the browser and display the console in DevTools.

// Starting from the `<main id="top">` element, place a blue border around the title of the website, Develop Community Center
// Comment out the following two lines to demonstrate the before and after effect on the webpage. 
$('#top').children().css('border', 'turquoise solid 2px');
console.log($('#top').children());

// $('#top').children().first().addClass('p-5').css('border', '#1bbc9b solid 2px');

// $('#top').children().eq(5).css('border', 'purple solid 2px');

// Starting from `<main id="top">`, add an li element to the list, ul.

// Starting from `<main id="top">`, add the classes to all of its child `<li>` elements
// $('#top').children().eq(5).children().addClass('bg-info text-dark mb-3 p-3');

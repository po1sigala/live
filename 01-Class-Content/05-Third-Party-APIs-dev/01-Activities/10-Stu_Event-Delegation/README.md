# 📖 Implement Shopping List Item Deletion

Work with a partner to implement the following user story:

* As an online shopper, I want to have the ability to remove items from my list.

## Acceptance Criteria

* It's done when each item's delete button (`X`) can be clicked to remove the item. 

## Instructions

* Be sure to work with your partner!

* Navigate to the [jQuery Docs on Event Delegation](https://learn.jquery.com/events/event-delegation/) in your browser.

* Open [script.js](Unsolved/assets/js/script.js) in your IDE and examine the code.

* Using the documentation, implement the following:

  * We are given a Shopping List form. We can add grocery items to the shopping list by using the form.

  * When we click the `X` button next to a grocery item, it should be removed from the shopping list. 

  * Follow the instructions provided by the comments in the starter code to use event delegation to target a parent element of the grocery items in order to handle the click event for the dynamically created buttons.
  
  * Clear the input field on submission. 

## 💡 Hint(s) 

* In the event handler, create a new list by removing the user's selection.
  
* Use the new shopping list to call the `populateList()` in the event handler.

## 🏆 Bonus

* If you have fully completed the above tasks, here is something you and your partner can work through as an added challenge:

  * What are some alternatives to using jQuery? Discuss the merits with your partner. 
 
* You can read [You might not need jQuery](http://youmightnotneedjquery.com/) to see some options to jQuery. 
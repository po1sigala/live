# Modifiable Shopping List 

In this activity, you will use jQuery to remove items from a shopping list.

Items added to the list are now removable by clicking the item's button

## Instructions

* Open [`shoppinglist-unsolved`](Unsolved/shoppinglist-unsolved.html), examine the code, and do the following:

  * Follow the directions listed in the `TODO:` comments to complete this activity 
  
  * Use event delegation to target a parent element in order to handle the click event for the dynamically created buttons
  
  * Change the handler of the submit event to populate a modifiable list
   
  * Attach the click event listener to each item on the shopping list which removes that item.
  
  * Clear the input field on submission 
   
## Hint(s) 

* Need to use event delegation to attach the event listener
  
* Create an array to store the shopping list items

* Use the `.on` method

* Use keyword `this` to retrieve the user's selection

## Bonus

* Discuss the following [topic about event delegation](https://api.jquery.com/on/#direct-and-delegated-events) and its merits with a classmate.

* Refactor the code to make it D.R.Y.
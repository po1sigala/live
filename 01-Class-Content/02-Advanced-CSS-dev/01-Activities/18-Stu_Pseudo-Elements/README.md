# Pseudo-Elements

In this activity, you will work with a partner to use CSS documentation to incorporate pseudo-elements in order to create tooltips.

## Instructions

* Be sure to work with your partner!

* Navigate to the [CSS Docs on ::after](https://developer.mozilla.org/en-US/docs/Web/CSS/::after) in your browser.

* Open [index.html](./Unsolved/index.html) in the browser. We are given a blog post with key terms and explanations.

* Open both [index.html](./Unsolved/index.html) and [style.css](./Unsolved/assets/css/style.css) in your IDE to examine the code and implement the following features:

  * As a visitor to this blog, I want to hover over keywords and read short tips on it instead of having all of the text on the page.

  * In `index.html`, determine which pieces of text can be used as a tooltip. 
  
    * Wrap the keyword in a `<span>` with the `data-descr` attribute assigned to the tooltip text. 
    
    * Give this a class of `tooltip`.

  * In `style.css`, style the keyword using the `.tooltip` class. 
  
    * Display the tooltip inline with the keyword using relative positioning. 
    
    * Underline the keyword so it is easy to see which words have a tooltip.

    * Use the `:hover` and `:after` selectors on the `.tooltip` class to create the tooltip. 
    
    * Give the tooltip a black background and white text with rounded corners. 
      
* When in doubt, consult the CSS documentation. And like all things CSS, play around with the properties to position the tooltip where you want it.

## 💡 Hint(s)

* Look into properties like `border-radius`, `z-index`, and `position` to style and position the tooltip.

## 🏆 Bonus

* If you have fully completed the above tasks, here is something you and your partner can work through as an added challenge to further your knowledge:

  * What are some real-life scenarios for using pseudo-elements?

* Use [Google](https://www.google.com) or another search engine to research the above.

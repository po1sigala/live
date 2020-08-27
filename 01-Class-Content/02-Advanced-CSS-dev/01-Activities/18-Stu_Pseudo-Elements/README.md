# Pseudo-Elements

In this activity, you will work with a partner to use CSS documentation to incorporate pseudo-elements in order to create tooltips.

## Instructions

* Be sure to work with your partner!

* Navigate to the [CSS Docs on Pseudo-elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements) in your browser.

* Open [index.html](./Unsolved/index.html) in the browser. We are given a blog post about CSS.

  * As a visitor to this blog, I want to hover over keywords and read short info on it instead of having all of the text on the page.

* Open both [index.html](./Unsolved/index.html) and [style.css](./Unsolved/assets/css/style.css) in your IDE to examine the code.

* Using the CSS documentation, implement the following features:

  * In `index.html`, determine which pieces of text can be used as a tooltip for a keyword. 

    * For example, for the first tooltip we can use "Cascading Style Sheets" and assign the tooltip text to say "Commonly known as CSS". Choose one more keyword and phrase to use for tooltips from the other paragraphs.

    * How can you designate the keyword to use a `data-descr` custom data attribute for the tooltip text?

  * In `style.css`, style the keyword and tooltip. 
  
    * When I read the blog, I want to be able to easily identify which word is the keyword with the tooltip by underlining the keyword and changing the cursor into a hand when I hover over it.
    
    * When the tooltip appears above the keyword, it should have the same background color and text color as the header and navbar items. Give the tooltip a rectangular shape and slightly smaller font size than the rest of the page.
          
* When in doubt, consult the CSS documentation. And like all things CSS, play around with the properties to position the tooltip where you want it.

## 💡 Hint(s)

* How can we use the `:after` pseudo-element along with the `:hover` and `:focus` selectors to create the tooltip?

* Don't get too hung up on what pieces of text to use for the keyword and tooltip!

## 🏆 Bonus

* If you have fully completed the above tasks, here is something you and your partner can work through as an added challenge to further your knowledge:

  * What are some real-life scenarios for using pseudo-elements?

* Use [Google](https://www.google.com) or another search engine to research the above.

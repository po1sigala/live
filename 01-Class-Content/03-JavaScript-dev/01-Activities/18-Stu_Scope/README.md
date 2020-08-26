# Scope 

In this activity, you will work with a partner to debug some broken code to learn more about scope.

## Instructions

* Be sure to work with your partner!

* As a developer, I want to log a series of messages to the console. 

* When I declare the variable `shout` and give it the value `Shout` then it should be available to functions `justShout` and `justShoutItAllOut`

* When I declare the variable `animal` and give it the value `Tigers`, it should only be available to the `sayTigers` function and should not change the value of the `animal` variable in the `sayLions` function.

* When the function `sayBears` is called, it should log "Bears! OH  MY!". The variable `bears` should only be declared once. 

* When the nested function `singAlong` is called, it should log "Sing, Sing a Song." The variable `sing` should only be declared once and not in the global scope. 

* Open [18-Stu_Method/Unsolved/script.js]() and examine the code.

* Using the following questions, try to debug and fix the code:
  
  * What error messages are being logged?
  
  * Where in your code is the error happening?
  
  * What is a good key word or phrase you can Google to find resources to help you debug?

## 💡 Hint

If stuck, try to think about how the variable is being used. Is it being made available to all functions? Or is it only being used locally by one function?    

## 🏆 Bonus

* If you have fully completed the above tasks, here is something you and your partner can work through as an added challenge to further your knowledge:

  * What is lexical scope?

* Use [Google](https://www.google.com) or another search engine to research the above.

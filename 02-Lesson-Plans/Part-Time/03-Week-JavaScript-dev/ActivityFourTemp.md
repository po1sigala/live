### 12. Instructor Demo: Logical and Conditional Operators (5 mins) 

* Open `07-Ins_Logical-Comparison-Operators/script.js` in your IDE and demonstrate the following:

  * We can use arithmetic operators to create simple math equations. We set the variable `a` to have a value of `100` and variable `b` to `10` . Both of these are of the data type `number.`  When we run `a + b` it will return the value, or evaluate to `110`.

  ```js
  var a = 100;
  var b = 10;

  console.log(a + b);
  ```

  * Arithmetic operators include addition(`+`), subtraction(`-`), division(`\`) and multiplication(`*`).

  ```js
  console.log(a + b);
  console.log(a - b);
  console.log(a / b);
  console.log(a * b);
    ```

  * Modulus `%` is an arithmetic operator that allows us return the `remainder` or what is left over after dividing one number by another. When we divide `100` by `10`, the remainder is `0` because `10` divides into `100` evenly.  So, `a%b` returns `0`.

  ```js
  var a = 100;
  var b = 10;

  console.log(a % b);
  ```

  * In addition to peforming math equations, we can also use comparison operators to determine the equality of difference of values. 

  * We can compare if two values are equal using the equality operator(`==`). The value of `b` and `c` are both `10`. So, `b == c` returns `true`.

  ```js
  var b = 10;
  var c = "10";

  console.log(b == c);
  ```

  * We can also test for inequality using the inequality operator(`!=`). Since the value of `b` and `c` are both `10`, `b != c` returns `false.` 

  ```js
  console.log(b != c);
  ```

  * Using `==` only tests for equality of value. To test strict equality, we use `===`. The value of `b` and `c` are both `10` but one is a `string` and the other is a `number`. Since they are not equal in both value and type, `b === c` returns `false`.

  ```js
  console.log(b === c);
  ```

  * We can also test for inequality of value or type using `!==`. The variables `b` and `c` do not have the same type (one is a `string` and the other is a `number`). So either value or type is inequal, `b !== c ` returns `true`.

  ```js
  console.log(b !== c);
  ```

  * To evaluate greater than or less than, we use the greater than (`>`) or less than (`<`) operators. If `a` is greater than `b`, the first expression returns `true`. If `a` is less than `b`, the second expression returns `true`.

  ```js
  console.log(a > b);
  console.log(a < b);
  ```

  * To evaluate greater than or equal to and less than or equal to, we use `>=` or `<=`. In this case, if `a` is greater than or equal or equal to`b`, the first expression returns `true`. If `a` is less than or equal to `b`, the second expression returns `true`.

  ```js
  console.log(a <= b);
  console.log(a >= b);
  ```

  * It is also possible to determine logic between expressions using logical operators and(`&&`), or(`||`), and not(`!`).

  * We use the logical operator `&&` to check if both expressions evaluate to `true`.  If both expressions evaluate to `true`, then `true` is returned. Otherwise, `false` is returned.

  ```js
  console.log(expression1 && expression2);
  ``` 

  * We use the logical operator `!!` to check if one expression OR the other evaluates to true.  If one expressions evaluates to `true`, then `true` is returned. Otherwise, `false` is returned

  ```js
  console.log(expression1 || expression2);
  ```

  * The logical operator `!` adds `not` to an expression, negating it. If the expression evaluates to `true`, then we can add `!` to it, making it `not true` or `false` (or vice-versa.)

  ```js
  // Returns true
  console.log(expression2);

  // Returns false
  console.log(!expression2);
  ```
  
* Open `07-Ins_Logical-Comparison-Operators/index.html` and navigate to the console and explain the following:

  * When arithmetic operators can be used with numbers to create math equations. These equations return a single number as seen in the first five logs.  

  * Expressions using logical and comparison operators evaluate to `true` or `false`. As a result, the remainder of the logs are `true` or `false`.

  * As demonstrated in the final two console logs, using the `!` operator negates the expression, turning `true` to `false.`

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What can arithmetic operators do? 

  * 🙋 A arithmetic operator can perform simplee math problems like adding, subtracting, multiplying, dividing or even finding the remainder. 

  * ☝️ What type of operators are used to evaluate equality and difference? 

  * 🙋 Comparison operators

  * ☝️ What operators determine logic between expressions?  

  * 🙋 Logical operators 

  * ☝️ What does an expression using a logical or comparison operator evaluate to? 

  * 🙋 True or false 

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `08-Stu_Logical-Comparison-Operators/README>md`.

### 13. Student Do: Logical and Comparison Operators (15 mins)

* Direct students to the activity instructions found in `08-Stu_Logical-Comparison-Operators/README>md`.

* Break your students into pairs that will work together on this activity.

```md
  # Logical Comparison Operators 

  In this activity, you will work with a partner to debug some broken code so that all the console logs return true. 

  ## Instructions

  * Be sure to work with your partner!

  * As a developer, I want to use comparison and logical operators to create logs that only read true. 

  * When I open the console, all the logs should read "true", but right now they do not!

  * Open [script.js](08-Stu_Logical-Comparision-Operators/Unsolved/script.js) and examine the code.

  * Using the following questions, try to debug and fix the code:
  
    * What is the current output for each console log?
  
    * How might you use a logical or conditional operator so the expression that the expression evaluates to true? 
  
    * What is a good key word or phrase you can Google to find resources to help you debug?

  ## 💡 Hints

  As seen in the prior activities, a single `=` is an assignment operator, not a comparison operator. To test equality use `==` or `===`.

  ## 🏆 Bonus

  * If you have fully completed the above tasks, here is something you and your partner can work through as an added challenge to further your knowledge:

  * What is NaN? What happens when you use typeof to evaluate NaN? Is the answer what you expected? Why or why not?

  * Use [Google](https://www.google.com) or another search engine to research the above.

```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help while circulating through room.

### 14. Instructor Review: Logical and Comparison Operators (10 mins) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with `Logical and Comparison Operators`? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

  * ✔️ Arithmetic operators

  * ✔️ Conditional operators

  * ✔️ Logical operators

* Open `09-Stu-Logical-Comparison-Operators/Solved/script.js` in your IDE and explain the following: 

  * Variables `d` and `e` use arithmetic operators to perform simple math. Since `c` has a value of `100` and `b` has a value of `50`, then the remainder of `100` divided by `50` is `0`. So the value of `d` is `0`. Likewise, the value of `e` is `100` divided by `2` or `50`. Both variables `d` and `e` have the type of `number`.

  ```js
  var b = 50;
  var c = 100;
  var d = c % b;
  var e = c / 2;
  ```

  * Both `b` and `e` have the value of `50` and the type of `number`. So, `expression1` evaluates to `true`.

  ```js
  // Evaluates to true
  var expression1 = (b === e);
  ```

  * The variable `e` has a value of `50` and variable `d` has a value of `0`. Since `50` is not less than `0`,`expression` evaluates to `false.`

  ```js
  // Evaluates to false
  var expression2 = (e < d);
  ```

  * Since `a` holds the value `50` with the type of `string` and `b` holds the value `50` with the type of `number`, `===` returns `false` because while the values are equal, the type is not. However, `==` returns `true`, since `==` evaluates only value (not type!).

  ```js
  console.log(a == b);
  ```

  * The variables `b` and `e` both hold the value `50` and the type `number`. Since they are equal in value and type, `===` returns true. 

  ```js
  console.log(b === e);
  ```

  * Since `c` is greater than `b`, the comparison operator `>` returns true. 

  ```js
  console.log(c > b);
  ```

  * Since `d` evaluates to `0`, it is less than `1`. So, the comparison operator `<` returns `true`.

  ```js
  console.log(d < 1);
  ```

  * Since `expression1` evaluates to `true` and `expression2` evaluates to `false`, using `&&` returns `false`. Replacing `&&` with `||` works, because with `||` only one expression or the other must be `true` in order for `true` to be returned.

  ```js
  console.log(expression1 || expression2);
  ```
  
  * Alternately, using `&&` works if a `!` operator is adding. Since `expression1` evaluates to `true`, negating the second expression will make it `not false` or also `true`.  Since both expressions now evaluate to `true`, then `true` is returned. 

  ```js
  console.log(expression1 && !expression2);
  ```

  * Since `expression1` has been negated, it evaluates to `false`. The second expression `expression2` is also false. Remove `!` negation from the first expression so that it returns `true`. Because either `expression1` or `expression2` returns true, using `||` returns `true`.

  ```js
    console.log( expression1 || expression2);
  ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is the difference between `==` and  `===`? 

  * 🙋 The comparison `==` evaluates equality of value while `===` evaluates if value and type are equal. 

  * ☝️ What is the difference between `&&` and  `||`? 

  * 🙋 The logical operator `&&` returns true if both expressions are `true` while the logical operator `||` returns true if one expression or the other returns `true`.

  * ☝️ How can you use a logical operator to negate an expression`? 

  * 🙋 Use the `!` operator adds a `not`. So, an expression that returns true, returns `not true` or `false` and vice-versa.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs: Expressions and Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators), and stick around for Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.
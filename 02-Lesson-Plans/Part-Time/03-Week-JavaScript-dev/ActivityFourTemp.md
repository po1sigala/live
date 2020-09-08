### 12. Instructor Demo: Logical and Conditional Operators (5 mins) 

* Open `07-Ins_Logical-Comparison-Operators/script.js` in your IDE and demonstrate the following:

  * Arithmetic operators combine with numbers to form an expression that returns a single number. Since `a` is a number with a value of `100` and `b` is a number with a value `10`, then `a + b` evaluates to the single number `110`.
  ```
    var a = 100;
    var b = 10;

    console.log(a + b);
  ```

  * Arithmetic operators include `+`, `-`, `\` and `*`

  ```
    console.log(a + b);
    console.log(a - b);
    console.log(a / b);
    console.log(a * b);
    ```

  * Modulus `%` is a special arithmetic operator that evalutes remainder. Since a is `100` and b is `10`, then the remainder of `100` divided by `10` is `0`. 

  ```
    var a = 100;
    var b = 10;

    console.log(a % b);
  ```

  * Comparison operators are not limited to numbers. They combine with strings, booleans and numbers to form an expression that evaluates to `true` or `false.`

  * To compare equality of value, use `==`. To compare inquality of value, use`!=`. The variables `b` and `c` both hold the value `10` so they are equal. As a result, the first expression logs `true`. The second expression logs `false`.

  ```
    var b = 10;
    var c = "10";

    console.log(b == c);
    console.log(b != c);
  ```

  * To compare equality value AND type, use strict equality operator `===`. While `b` and `c` both hold the value of `10` one is a string and the other is number. So, both value and type are not equal. As a result, using `===` will log `false`.

  ```
  console.log(b === c);
  ```

 * To compare inequality of value OR type, use `!==`. The values of `b` and `c` are both `10` but the types are different. Since the type is inequal, using `!==` will evaluate to `true`.

  ```
  console.log(b !== c);
  ```

  * To evaluate greater than or less than, use the  `>` or `<` operators. If `a` is greater than `b`, the first expression returns `true`. If `a` is less than `b`, the second expression returns `true`.

  ```
    console.log(a > b);
    console.log(a < b);
  ```

  * To evaluate greater than or equal to and less than or equal to, use `>=` or `<=`. In this case, if `a` is greater than or equal or equal to`b`, the first expression returns `true`. If `a` is less than or equal to `b`, the second expression returns `true`.

  ```
    console.log(a <= b);
    console.log(a >= b);
  ```

  * It is also possible to determine logic between expressions using logical operators `and`, `or`, and `not`.

  * The logical operator `&&` evaluates if both expressions evaluate to true. If the first expression evaluates to `true` AND the second evaluates evaluates to `true`, then `true` is returned. Otherwise, `false` is returned. 

  ```
    console.log(expression1 && expression2);
  ``` 

  * The logical operator `||` evaluates if one expression OR the other expression returns true.  If one expression evaluate to true, then true is returned. Otherwise, `false` is returned. 

  ```
    console.log(expression1 || expression2);
  ```

  * The logical operator `!` adds `not` to an expression, negating it. If the expression evaluates to `true`, then adding `!` will add a `not` turning it into `not true` or `false` (and vice-versa).

  ```
    // Returns true
    console.log(expression2);

    // Returns false
    console.log(!expression2);
  ```
  
* Open `07-Ins_Logical-Comparison-Operators/index.html` and navigate to the console and explain the following:

  * When arithmetic operators are combined with numbers to form an expression, a single number is returned. The first five logs are the results of using `+`, `-`, `\`, `*` and `%` and return a single number.

  * Expressions using logical and comparison operators evaluate to `true` or `false`. As a result, the remainder of the logs are `true` or `false`.

  * As demonstrated in the final two console logs, using the `!` operator negates the expression, turning `true` to `false.`

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What does an expression with an arithmatic expression evaluate to? 

  * 🙋 A arithmetic expression adds, subtracts, multiplies, divides or returns the value of two numbers and returns a single number.

  * ☝️ What operators are used to compare equality or greater than/less than? 

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

  * ☝️ How comfortable do you feel with `Logical and Comparison Operators`? (Poll via Fist of Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

  * ✔️ Arithmetic operators

  * ✔️ Conditional operators

  * ✔️ Logical operators

* Open `09-Stu-Logical-Comparison-Operators/Solved/script.js` in your IDE and explain the following: 

  * The numerical expressions stored in `d` and `e` evaluate numbers and return a single number. Since `c` holds a number with the value of `100` and  `b` holds a number with a value of `50`, the remainder of `100` divided by `50` is 0. So `d` holds the value of `0`. Likewise, `100` divided by `2` is `50`, so `e` holds a value of `50`.

    ```
    var b = 50;
    var c = 100;
    var d = c % b;
    var e = c / 2;
    ```

  * Expressions using logical operators evaluate to `true` or `false`. So, `expression1` evaluates to `true` and `expression2` evaluates to `false`. 

    ```
    // Evaluates to true
    var expression1 = (b === e);

    // Evaluates to false
    var expression2 = (e < d);
    ```

  * Since `a` holds the value `50` with the type of `string` and `b` holds the value `50` with the type of `number`, `===` returns false because while the values are equal, the type is not. However, `==` returns true, since `==` evaluates only value (not type!) and the values are equal. 

    ```
    console.log(a == b);
    ```

  * The variables `b` and `e` both hold the value `50` and the type `number`. Since they are equal in value and type, `===` returns true. 

    ```
    console.log(b === e);
    ```

  * Since `c` is greater than `b`, the comparison operator `>` returns true. 

    ```
    console.log(c > b);
    ```

  * Since `d` evaluates to `0`, it is less than `1`. So, the comparison operator `<` returns true.

    ```
    console.log(d < 1);
    ```

  * Since `d` evaluates to `0`, it is less than `1`. So, the comparison operator `<` returns true.

    ```
    console.log(d < 1);
    ```

  * Since `expression1` evaluates to `true` and `expression2` evaluates to `false`, using `&&` returns false because both expressions do not evaluate to `true`. Replacing `&&` with `||` works, because with `||` one expression or the other must be `true` for `true` to be returned.

    ```
    console.log(expression1 || expression2);
    ```
  
  * Alternately, the `&&` works if a `!` operator is used. Since `expression1` evaluates to `true`, negating the second expression will make it `not false` or also `true`. If both expressions then evaluate to `true`, using the `&&` operator in combination with the added `!` will also return true. 

    ```
    console.log(expression1 && !expression2);
    ```

  * Since `expression1` has been negated, it evaluates to `false`. The second expression `expression2` is also false. Remove `!` negation from the first expression so that it returns `true`. Because `expression` or `expression2` returns true, using `||` returns true.

    ```
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
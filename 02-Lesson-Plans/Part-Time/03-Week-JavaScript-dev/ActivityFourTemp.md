### 12. Instructor Demo: Logical and Conditional Operators (5 mins) 

* Open `07-Ins_Logical-Comparison-Operators/script.js` in your IDE and demonstrate the following:

  * Arithmetic operators combine with numbers to form an expression that returns a single number. Since `a` is a number with a value of `100` and `b` is a number with a value `10`, then `a + b` evaluates to the single number `110.`
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

  * Modulus `%` is a special arithmatic operator that evalutes remainder. Since a is `100` and b is `10`, then the remainder is 0. 

  ```
    var a = 100;
    var b = 10;

    console.log(a % b);
  ```

  * Comparison operators combine with strings, booleans and numbers to form an expression that evaluates to true or false.

  * Compare equality of value with `==` or inequality with `!=`. Both `b` and `c` have the value `10` so they are equal. The first expression logs `true`. The second expression logs `false`.

  ```
    var b = 10;
    var c = "10";

    console.log(b == c);
    console.log(b != c);
  ```

  * To compare value and type, use strict equality operators `===` and `!==`. While `b` and `c` both have the value of `10` one is a string and one is number. So, they are not strictly equal. As a result, both of these expressions evaluate to `false`.

  ```
    console.log(b !== c);
    console.log(b === c);
  ```

  * Evaluate greater than or less than with `>` or `<` operators. If `a` is greater than `b`, the first expression returns `true`. If `a` is less than `b`, the second expression returns `true`.

  ```
    console.log(a > b);
    console.log(a < b);
  ```

  * Greater than or equal to and less than or equal to can also be evaluated with `>=` or `<=`.

  ```
    console.log(a <= b);
    console.log(a >= b);
  ```

  * It is also possible to determine logic between expressions using logical operators `and`, `or`, and `not`

  * The logical operator `&&` evaluates if both expressions evaluate to true. If the first evaluates to `true` AND the second evaluates to `true`, then `true` is returned. Otherwise, `false` is returned. 

  ```
    console.log(expression1 && expression2);
  ``` 

  * The logical operator `||` evaluates if one expression OR the other returns true.  If one evaluate to true, then true is returned. Otherwise, `false` is returned. 

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
  
* Open `07-Ins_Logical-Comparison-Operators/index.html` and navigate to the console and point out the following:

  * When arithmetic operators are combined with numbers to form an expression, a single number is returned. The first five logs are the results of using `+`, `-`, `\`, `*` and `%` and return a single number.

  * Expressions using logical and comparison operators evaluate to `true` or `false`. As a result, the remainder of the logs are `true` or `false`.

  * As demonstrated in the final two console logs, using the `!` operator negates the expression, turning `true` to `false.`

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What does an expression with an arithmatic expression evaluate to? 

  * 🙋 A arithmatic expression adds, subtracts, multiplies, divides or returns the value of two numbers and returns a single number.

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
@TODO ADD INSTRUCTIONS TABBED
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

* Open `@TODO/folder/file` in your IDE and explain the following: 

  * @TODO { WE DO THIS AND THE RESULT IS THAT }

    ```
    @TODO ADD CODE SNIPPET, TABBED
    ```

  * 🔑 @TODO DON'T FORGET TO USE THE KEY EMOJI ON KEY POINTS, BUT ONLY KEY POINTS, NOT _EVERY_ POINT

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ @TODO { DO WE END OUR REVIEWS WITH A QUESTION? }

  * 🙋 @TODO { YES, WE DO! }

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 @TODO We can refer to supplemental material, read the [{ DOCS }]({ URL }), and stick around for Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.
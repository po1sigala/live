<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>
   
    <h1> Open Up the Console To See It Work </h1>
 
    <script>


/********* YOUR CODE BELOW ********************* */

// Eat Lunch? 

var hungerLevel = 50;
var isLunchTime = true;


// Eat Lunch? 

//Complete the expression using isLunchTime and the logical operator && so it evalutes to true

var eatLunch = (hungerLevel === 50 && isLunchTime === true)


// Eat Pizza?

//Write expression to evaluate if hungerLevel is equal to 50 or isLunchTime is equal to falae.
//The expression should evaluate to true. 

var eatPizza = (hungerLevel === 50 || isLunchTime === false)


//Eat Snack? 

//Write expression evaluating if isLunchTime does not equal true. It should evaluate to false. 

var eatSnack = (isLunchTime !== true)

//isHungry? 


//Write expresssion that evaluates to true if hungerLevel is greater than or equal to 50. 
//Store in a new variable named isHungry.

var isHungry = (hungerLevel >= 50)


// isEqual? 

//Write an expression evaluating if doubleEquals is equal to tripleEquals. 
//Store it a new variable called isEqual and console log the variable to check the results.


var doubleEquals = ( 23 == "23");

var tripleEquals = ( 23 === "23");

var isEqual = (doubleEquals == tripleEquals);






/********* DON'T CHANGE CODE BELOW THIS LINE ********************* */


/* The code below is the Javascript that logs the correct and incorrect answers.
 * It is okay if the code does not look completely familar
 * just yet! It will very soon.  */ 
 
var right = "✅";
var wrong = "❌"


if (eatLunch === true) {
    console.log( "Eat Lunch?: " + right)
} else {
    console.log( "Eat Lunch?: " + wrong)
}

if (eatPizza === true) {
    console.log( "Eat Pizza?: " + right)
} else {
    console.log( "Eat Pizza?: " + wrong)
}

if (!eatSnack) {
    console.log( "Eat Snack?: " + right)
} else {
    console.log( "Eat Snack?: " + wrong)
}

if (isHungry) {
    console.log( "Not Hungry?: " + right)
} else {
    console.log( "Not Hungry?: " + wrong)
}

if (isEqual === false) {
    console.log( "Is Equal: " + right)
} else {
    console.log( "Is Equal?: " + wrong)
}

        
    </script>
    
</body>
</html>
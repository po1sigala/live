// A for-loop allows you to execute code more than once
// A for loop that starts with 0, runs while i is less an 5 and increments by 1
for (var i = 0; i < 5; i++) {
    //This is the block of code that will run each time
    console.log("This is the current value of i: " + i + ".");
}

// For-loops are often used to iterate over arrays
var zooAnimals = ["Bears", "Giraffes", "Penguins", "Meerkats"];

// A for-loop that starts with 0, runs while i is less than array length, increments by 1
for (var i=0; i < zooAnimals.length; i++) { 
    console.log("I am going to zoo to see " + zooAnimals[i] + ".");
}

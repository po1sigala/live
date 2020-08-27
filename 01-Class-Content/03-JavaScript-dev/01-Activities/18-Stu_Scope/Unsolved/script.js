function justShout() {
  console.log(shout + ", " + shout);
  return;
}

function shoutItAllOut() {
  console.log(shout + " it all out! ");
  return;
}

justShout();
shoutItAllOut();

function sayLions() {
  var animal = "Lions"; 
  console.log(animal);
  return;
}

function sayTigers() {
  console.log("and " + animal + " and "); 
  return;
}

var bears = "Bears";

function sayBears() {
    var bears = "Pandas";
    console.log(bears + "! OH  MY!");
    return;
}

var sing = "Sing"; 

function singAlong() {
  console.log(sing + ",");
  var singASong = function () {
    console.log(sing + " a Song.");
  };
  singASong();
}

singAlong();

// Constructor function which can take in a series of values and create objects
function Character(name, profession, age, strength, hitpoints) {
  this.name = name;
  this.profession = profession;
  this.age = age;
  this.strength = strength;
  this.hitpoints = hitpoints;
}

// Method which prints all of the stats for a character
Character.prototype.printStats = function () {
  console.log(
    `Name: ${this.name}\nProfession: ${this.profession}\nAge: ${this.age}\nStrength: ${this.strength}\nHitPoints: ${this.hitpoints}`
  );
  console.log('\n-------------\n');
};

// Method which determines if "hitpoints" are less than zero and returns a boolean depending on the outcome
Character.prototype.isAlive = function () {
  // TODO: Your code here
};

// Method which takes in a second object and decreases their "hitpoints" by this character's strength
Character.prototype.attack = function (character2) {
  // TODO: Your code here
};

// Method which increases this character's stats when called
Character.prototype.levelUp = function () {
  // TODO: Your code here
};

// Creates two unique characters using the "character" constructor
const warrior = new Character('Crusher', 'Warrior', 25, 10, 75);
const rogue = new Character('Dodger', 'Rogue', 23, 20, 50);

warrior.printStats();
rogue.printStats();

rogue.attack(warrior);
warrior.printStats();
warrior.isAlive();

rogue.levelUp();
rogue.printStats();

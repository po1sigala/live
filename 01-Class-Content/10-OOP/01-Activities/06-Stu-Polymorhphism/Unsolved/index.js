// We create our parent class, Developer, and the `sayHi` method
class Developer {
  constructor(name) {
    this.developerName = name;
  }

  sayHi() {
    return `Hey! my name is ${this.developerName} 👋`;
  }
}

// We extend Developer into a subclass called Frontend and give it its own `saySkill` method
// The saySkill method should simply return a statement about what tech stack (ex. React) the developer uses
class FrontEnd extends Developer {}

// We extend developer into another class called Backend and give it a `code` method
// The code method should return a line of code that the developer might write (ex. SELECT * FROM users;)
class Backend extends Developer {}

// Create three variables that are instances of each class you have made

// Have the three objects you've created `sayHi`

// Have the two extended classes you've created preform their `saySkill` and `code` methods

// Override the sayHi method for the `Backend` and `Frontend` classes

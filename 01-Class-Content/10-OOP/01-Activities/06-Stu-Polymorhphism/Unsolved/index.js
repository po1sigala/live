// We create our parent class, Develop, and the `sayHi` method
class Developer {
  constructor(name) {
    this.developerName = name;
  }

  sayHi() {
    return `Hey! my name is ${this.developerName} 👋`;
  }
}

// We extend Developer into a subclass called Frontend and give it its own `saySkill` method
class FrontEnd extends Developer {}

// We extend developer into another class called Backend and give it a `code` method;
class Backend extends Developer {}

// Create three variables that are instances of each class you have made

// Have the three objects you've created `sayHi`

// Have the two extended classes you've created preform their `saySkill` and `code` methods

// BONUS: Add an additional method using prototype

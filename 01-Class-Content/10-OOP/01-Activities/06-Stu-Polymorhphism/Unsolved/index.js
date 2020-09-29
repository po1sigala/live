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

// Here we create instances of all three classes we made
const dev = new Developer('Dave');
const frontend = new FrontEnd('Kyle', 'Typescript');
const backend = new Backend('Kelly', 'SELECT * FROM users;');

// All users inherit the sayHi method
console.log(dev.sayHi());
console.log(frontend.sayHi());
console.log(backend.sayHi());

// Users created from subclasses exercise their own methods
console.log('backend.code() =>', backend.code());
console.log('frontend.saySkill() =>', frontend.saySkill());

// BONUS: Add an additional method using prototype

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
class FrontEnd extends Developer {
  constructor(name, stack) {
    super(name);
    this.techStack = stack;
  }

  saySkill() {
    return `${this.sayHi()}, I code with ${this.techStack}`;
  }
}

// We extend developer into another class called Backend and give it a `code` method;
class Backend extends Developer {
  constructor(name, snippet) {
    super(name);
    this.snippet = snippet;
  }

  code() {
    return `${this.sayHi()}, I would run something like ${this.snippet}`;
  }
}

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

// Override the sayHi method for both Frontend and Backend
FrontEnd.prototype.sayHi = () =>
  console.log('Hello, I am part of the Front End team');

Backend.prototype.sayHi = () =>
  console.log('Hello, I am part of the Back End team');

frontend.sayHi();
backend.sayHi();

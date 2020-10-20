// Create our parent class Computer
class Computer {
  constructor(type) {
    this.type = type;
  }

  getInfo() {
    return `This computer is a ${this.type}`;
  }
}

// Extend our class to a more customized version, Laptop
class Laptop extends Computer {
  constructor(type, model) {
    super(type);
    this.model = model;
  }

  bootUp() {
    console.log(`Now booting the OS on your ${this.model}`);
  }
}

// Create an instance of Laptop
const macbook = new Laptop('mac', 'macbook pro');

// Call on the methods, both inherited and custom
console.log('macbook.getInfo();', macbook.getInfo());
macbook.bootUp();

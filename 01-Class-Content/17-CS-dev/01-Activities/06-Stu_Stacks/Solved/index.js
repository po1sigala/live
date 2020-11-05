class Stack {
  // default value allows stack to initialize without an argument
  constructor(container = []) {
    this.container = container;
  }

  // adds an element to the stack
  addToStack(el) {
    return this.container.push(el);
  }

  // removes an element from the stack
  removeFromStack() {
    return this.container.pop();
  }
}

module.exports = Stack;
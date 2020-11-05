class Stack {
  constructor(container = []) {
    this.container = container;
  }
  addToStack(el) {
    return this.container.push(el);
  }
  removeFromStack() {
    return this.container.pop();
  }
}

module.exports = Stack;

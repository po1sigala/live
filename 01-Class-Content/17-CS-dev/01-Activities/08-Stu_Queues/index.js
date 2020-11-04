class Queue {
  constructor(container = []) {
    this.container = container;
  }
  addToQueue(el) {
    return this.container.push(el);
  }
  removeFromQueue() {
    return this.container.pop();
  }
}

module.exports = Queue;
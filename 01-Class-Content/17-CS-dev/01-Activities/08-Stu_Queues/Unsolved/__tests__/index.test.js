const Queue = require('../queue');

describe('Queue class', () => {
  const inputArray = [1, 2, 3, 4];
  const queue = new Queue(inputArray);
  const newItem = 5;

  test('Is able to instantiate a new queue', () => {
    const queue = new Queue();
    expect(queue).toEqual({"container": []});
  });

  test('Is able to instantiate a new queue with an array', () => {
    expect(queue).toEqual( { "container": [1, 2, 3, 4] } );
  });

  // test('Is able to add a new item at the end of the queue', () => {
  //   stack.addToQueue(newItem);
  //   expect(queue).toEqual( { "container": [1, 2, 3, 4] } );
  // });

  // test('Is able to instantiate with an array', () => {
  //   expect(queue).toEqual( { "container": [1, 2, 3, 4] } );
  // });
});
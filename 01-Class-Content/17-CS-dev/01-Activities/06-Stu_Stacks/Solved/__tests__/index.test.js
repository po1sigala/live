const Stack = require("../index");

describe("Stack class", () => {
  const inputArray = [1, 2, 3, 4];
  const stack = new Stack(inputArray);
  const newItem = 5;
  
  test("is able to instantiate a new stack", () => {
    const stack = new Stack();
    expect(stack).toEqual({ container: [] });
  });

  test("is able to instantiate a new stack with an array", () => {
    expect(stack).toEqual({ container: [1, 2, 3, 4] });
  });

  test("is able to add a new element at the end of the stack", () => {
    stack.addToStack(newItem);
    expect(stack).toEqual({ container: [1, 2, 3, 4, 5] });
  });

  test("is able to return the removed element", () => {
    const val = stack.removeFromStack();
    expect(val).toEqual(5);
    expect(stack).toEqual({ container: [1, 2, 3, 4] });
  });

});

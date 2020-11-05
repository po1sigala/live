const indexOfNum = require("../index");

describe("The indexOfNum function", () => {
  const inputArray = [10, 20, 30, 40, 50, 20];
  
  test("can find the index of 20", () => {
    expect(indexOfNum(inputArray, 20)).toEqual(1);
  });

  test("can find the index of 40", () => {
    expect(indexOfNum(inputArray, 40)).toEqual(3);
  });
});

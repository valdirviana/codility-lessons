let { equal, deepEqual } = require("assert");
let { solution } = require("./index");

describe("cyclicrotation", () => {
  it("should return cyclic number to array [3,8,9,7,6], cycles are 3", () => {
    deepEqual(solution([3, 8, 9, 7, 6], 3), [9, 7, 6, 3, 8]);
  });
});
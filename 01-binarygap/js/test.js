let { equal } = require("assert");
let { solution } = require("./index");

describe("binarygap", () => {
  it("should return 0 binarygap to number 32", () => {
    equal(solution(32), 0);
  });

  it("should return 0 binarygap to number 12", () => {
    equal(solution(12), 0);
  });

  it("should return 6 binarygap to number 1226778", () => {
    equal(solution(1226778), 6);
  });

  it("should return 1 binarygap to number 122", () => {
    equal(solution(122), 1);
  });

  it("should return 3 binarygap to number 10000", () => {
    equal(solution(10000), 3);
  });

  it("should return 4 binarygap to number 1234567891456", () => {
    equal(solution(1234567891456), 4);
  });
});

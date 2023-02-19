const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("returns [1] for letterPositions('hello').e", () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });
  it("returns [8] for letterPositions('Hello World').r", () => {
    assert.deepEqual(letterPositions('Hello World').r, [8]);
  });
});

const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {
  it("returns [1, 2, 3, 4, 5] for [1, 2, [3, 4], 5]", () => {
    assert.deepEqual(flatten(arrayOne), [1, 2, 3, 4, 5]);
  });
  it("returns [1, 2, 3, 4, 8, 9, 10, 5, 6] for [1, 2, [3], [4, [8,9,10], 5], 6, []]", () => {
    assert.deepEqual(flatten(arrayThree), [1, 2, 3, 4, 8, 9, 10, 5, 6]);
  });
});
// TEST VARIABLES
const arrayOne = [1, 2, [3, 4], 5];
const arrayThree = [1, 2, [3], [4, [8,9,10], 5], 6, []];
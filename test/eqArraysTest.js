const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("returns [1, 2, 3, 4] for [1, 2, 3, 4]", () => {
    assert.strictEqual(assertEqual(eqArrays([1,2,3,4], [1,2,3,4]), true));
  });
  it("returns ['M'] for ['M']", () => {
    assert.strictEqual(assertEqual(eqArrays(['M'], ['M']), true));
  });
});

// TEST CODE
assertEqual(eqArrays([1,2,3,4], [1,2,3,4]), true);
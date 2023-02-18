const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle(arrayOdd), [3]);
  });
  it("return ['mid1', 'mid2'] for ['foo', 'bar', 'mid1', 'mid2', 'foobar', 'barfoo']", () => {
    assert.deepEqual(middle(arrayEven), ['mid1', 'mid2']);
  });
  it("return [] for ['x', 'y'] ", () => {
    assert.deepEqual(middle(['x', 'y']), []);
  });
});

// TEST VARIABLES
let arrayOdd = [1, 2, 3, 4, 5];
let arrayEven = ['foo', 'bar', 'mid1', 'mid2', 'foobar', 'barfoo'];
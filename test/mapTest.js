const assert = require('chai').assert;
const map = require('../map');

describe("#map", () => {
  it("returns [ 'g', 'c', 't', 'm', 't' ] for map(['ground', 'control', 'to', 'major', 'tom'], word => word[0])", () => {
    assert.deepEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
  });
  it("returns [2, 4, 6, 8] for map([1, 2, 3, 4], num =>  num * 2)", () => {
    assert.deepEqual(map([1, 2, 3, 4], num =>  num * 2), [2, 4, 6, 8]);
  });
});

// TEST VARIABLES
const words = ["ground", "control", "to", "major", "tom"];
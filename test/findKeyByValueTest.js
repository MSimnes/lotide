const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("#findKeyByValue", () => {
  it('returns The Wire for findKeyByValue({sci_fi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama:  "The Wire"}, drama)', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
});

// TEST VARIABLES
// eslint-disable-next-line camelcase
const bestTVShowsByGenre = {sci_fi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama:  "The Wire"};
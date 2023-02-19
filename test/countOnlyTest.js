const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => {
  it('returns {Jason: 1} for ["Salima", "Jason", "Salima", "Fang", "Joe"],{"Jason": true, "Karima": false, "Fang": false}', () => {
    assert.deepEqual(countOnly(["Salima", "Jason", "Salima", "Fang", "Joe"], {"Jason": true, "Karima": false, "Fang": false}), {"Jason": 1});
  });
  it('returns {Jason: 1, Salima: 2} for ["Salima", "Jason", "Salima", "Fang", "Joe"],{"Jason": true, "Salima": true, "Fang": false}', () => {
    assert.deepEqual(countOnly(["Salima", "Jason", "Salima", "Fang", "Joe"], {"Jason": true, "Salima": true, "Fang": false}), {"Jason": 1, "Salima": 2});
  });
});
const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe("#takeUntil", () => {
  it("returns [1,2,5,7,2] for takeUntil(data1, x => x < 0)", () => {
    assert.deepEqual(takeUntil([1,2,5,7,2], x => x < 0), [1,2,5,7,2]);
  });
});
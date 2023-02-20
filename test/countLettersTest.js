const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
  it("returns { t: 3, h: 1, i: 2, s: 3, a: 1, e: 1 } for countLetters('this is a test')", () => {
    assert.deepEqual(countLetters("this is a test"), { t: 3, h: 1, i: 2, s: 3, a: 1, e: 1 });
  });
  it('returns {} for countLetters(" ")', () => {
    assert.deepEqual(countLetters(" "), {});
  });
});
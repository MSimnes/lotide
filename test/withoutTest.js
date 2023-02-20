const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {
  it("returns ['hello', 'goodbye'] for (without(['hi', 'hello', 'bye', 'goodbye'], ['hello', 'goodbye']), )", () => {
    assert.deepEqual(without(words, remove), ['hello', 'goodbye']);
  });
});

// TEST VARIABLES
let words = ['hi', 'hello', 'bye', 'goodbye'];
let remove = ['hi', 'bye'];
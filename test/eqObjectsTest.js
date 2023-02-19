const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
  it('returns true for eqObject({ colors: ["red", "blue"], size: { length: "medium", height: "medium"},{ size: { length: "medium", height: "medium"}, colors: ["red", "blue"] } })', () => {
    assert.deepEqual(eqObjects(multiColorShirtObject2  , anotherMultiColorShirtObject2), true);
  });
});

// TEST VARIABLES
const multiColorShirtObject2 = { colors: ["red", "blue"], size: { length: "medium", height: "medium"} };
const anotherMultiColorShirtObject2 = { size: { length: "medium", height: "medium"}, colors: ["red", "blue"] };

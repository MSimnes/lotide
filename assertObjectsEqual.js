const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');

// leverages eqObjects and eqArrays and returns a clear message to the console if they match or not.
const assertObjectsEqual = function(objectOne, objectTwo) {
  const inspect = require('util').inspect;
  const test = eqObjects(objectOne, objectTwo);
  test === true ? console.log(`✔✔✔ Assertion Passed: ${inspect(objectOne)} === ${inspect(objectTwo)}`) : console.log(`🚨🚨🚨 Assertion Failed: ${inspect(objectOne)} !== ${inspect(objectTwo)}`);
};

// TEST CODE

assertObjectsEqual({a:1}, {a:1});

module.exports = assertObjectsEqual;
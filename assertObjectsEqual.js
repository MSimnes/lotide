// leverages eqObjects and eqArrays and returns a clear message to the console if they match or not.
const assertObjectsEqual = function(objectOne, objectTwo) {
  const inspect = require('util').inspect;
  const test = eqObjects(objectOne, objectTwo);
  test === true ? console.log(`✔✔✔ Assertion Passed: ${inspect(objectOne)} === ${inspect(objectTwo)}`) : console.log(`🚨🚨🚨 Assertion Failed: ${inspect(objectOne)} !== ${inspect(objectTwo)}`);
};
// ASSERTION FUNCTIONS

const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) return false;
  }
  return true;
};
const eqObjects = function(object1, object2) {
  // store the keys in a variable for easy looping
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  // check if length are not equal
  if (keys1.length !== keys2.length) return false;
  for (let val of keys1) {
    // check if values are arrays and check if not equal using eqArrays
    if (Array.isArray(object1[val]) && Array.isArray(object2[val])) {
      const arraysAreEqual = eqArrays(object1[val], object2[val]);
      if (!arraysAreEqual) return false;
    // eslint-disable-next-line brace-style
    }
    // use recursion to check if values are objects and if those objects are not equal
    else if (typeof object1[val] === 'object' && typeof object2[val] === 'object') {
      const objectsAreEqual = eqObjects(object1[val], object2[val]);
      if (!objectsAreEqual) return false;
    } else if (object1[val] !== object2[val]) {
      return false;
    }
  }
  return true;
};
// TEST CODE

assertObjectsEqual({a:1}, {a:1});

module.exports = assertObjectsEqual;
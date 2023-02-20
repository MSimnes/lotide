const eqArrays = require("./eqArrays");

// Function compares objects to see if they are equal, works with nested objects and arrays.

const eqObjects = function(object1, object2) {
  // store the keys in a variable for easy looping
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  // check if length are not equal
  if (keys1.length !== keys2.length) return false;
  for (const val of keys1) {
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
    // eslint-disable-next-line brace-style
    }
    // check if the values are not equal
    else {
      if (object1[val] !== object2[val])
        return false;
    }
  }
  // return true if all checks passed
  return true;
};

module.exports = eqObjects;
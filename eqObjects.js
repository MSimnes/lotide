// ASSERTION FUNCTIONS

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔✔✔ Assertion Passed: ${actual} === ${expected}`);
    return;
  } else if (actual !== expected) {
    console.log(`🚨🚨🚨 Assertion Failed: ${actual} !== ${expected}`);
    return;
  }
};

const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) return false;
  }
  return true;
};

// ACTUAL FUNCTIONS


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


// TEST CODE

// *** primitive value test
// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject = { size: "medium", color: "red" };
// assertEqual(eqObjects(shirtObject , anotherShirtObject), true); // => true

// const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
// assertEqual(eqObjects(shirtObject , longSleeveShirtObject), true); // => false

// *** arrays as value tests
// const multiColorShirtObject = { colors: ["red", "blue"], size:"medium" };
// const anotherMultiColorShirtObject = { size:"medium", colors: ["red", "blue"] };
// assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true); // => true

// const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
// assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => false

// *** arrays as objects tests
const multiColorShirtObject2 = { colors: ["red", "blue"], size: { length: "medium", height: "medium"} };
const anotherMultiColorShirtObject2 = { size: { length: "medium", height: "medium"}, colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject2  , anotherMultiColorShirtObject2), true); // => true
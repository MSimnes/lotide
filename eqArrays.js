// ASSERT FUNCTIONS

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔✔✔ Assertion Passed: ${actual} === ${expected}`);
    return;
  } else if (actual !== expected) {
    console.log(`🚨🚨🚨 Assertion Failed: ${actual} !== ${expected}`);
    return;
  }
};

// ACTUAL FUNCTION

const eqArrays = function(arrayOne, arrayTwo) {
  let itemOne = arrayOne.toString();
  let itemTwo = arrayTwo.toString();
  if (itemOne === itemTwo) {
    return true;
  } else if (itemOne !== itemTwo) {
    return false;
  }
};

// TEST CODE

assertEqual(eqArrays([1,2,3,4], [1,2,3,4]), true);
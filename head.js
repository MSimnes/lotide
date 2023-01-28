// ASSERTION FUNCTION

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔✔✔ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🚨🚨🚨 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// ACTUAL FUNCTION

// Function to return the first item in an array

const head = function(array) {
  let result;
  result = array.shift();
  return result;
};

// TEST CODE

assertEqual(head([1,2,3,4]),1);
assertEqual(head([1,3]), 1);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);
// TEST ASSERTION FUNCTIONS

// 1. function to check if two arrays are equal

// const eqArrays = function(arrayOne, arrayTwo) {
//   if (arrayOne.length !== arrayTwo.length) return false;
//   for (let i = 0; i < arrayOne.length; i++) {
//     if (arrayOne[i] !== arrayTwo[i]) return false;
//   }
//   return true;
// };

// 2.  function to display the appropriate message to the console if two arrays match or not leveraging existing eqArrays function.

// const assertArraysEqual = function(arrayOne, arrayTwo) {
//   let test = eqArrays(arrayOne, arrayTwo);
//   test === true ? console.log(`✔✔✔ Assertion Passed: [${arrayOne}] === [${arrayTwo}]`) : console.log(`🚨🚨🚨 Assertion Failed: [${arrayOne}] !== [${arrayTwo}]`);
// };

//  ACTUAL FUNCTION

// function to take in an array or array of nested arrays and return a flattened array using recursion to find the depth of the array and then flatmap to flatten the array to the given depth.

// const arrayOne = [1, 2, [3, 4], 5];
// const arrayTwo = [1, [], 2, 3, 4, [5]];
// const arrayThree = [1, 2, [3], [4, [8,9,10], 5], 6, []];

const flatten = function(array) {
  let flatArray = array.flat(getArrayDepth(array));
  return flatArray;
};
// recursive helper function to get array depth
const getArrayDepth = (value) => {
  return Array.isArray(value) ? 1 + Math.max(0, ...value.map(getArrayDepth)) : 0;
};
module.exports = flatten;
// function to return a subset of the first arg 'source' array, removing unwanted elements from the second arg 'itemsToRmemove'

const without = function(source, itemsToRemove) {
  let result;
  result = source.filter(elem => !itemsToRemove.includes(elem));
  return result;
};

// ASSERTION FUNCTIONS

// function to check if two arrays are equal

const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) return false;
  }
  return true;
};

// function to display the appropriate message to the console if two arrays match or not leveraging existing eqArrays function.

const assertArraysEqual = function(arrayOne, arrayTwo) {
  let test = eqArrays(arrayOne, arrayTwo);
  test === true ? console.log(`✔✔✔ Assertion Passed: ${arrayOne} === ${arrayTwo}`) : console.log(`🚨🚨🚨 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
};

// TEST CODE

let words = ['hi', 'hello', 'bye', 'goodbye'];
let remove = ['hi', 'bye'];
//test the function
assertArraysEqual(without(words, remove), ['hello', 'goodbye']);
// test that the function doesn't mutate original array
assertArraysEqual(words, ['hi', 'hello', 'bye', 'goodbye']);

module.exports = without;
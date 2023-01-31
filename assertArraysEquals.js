// ASSERTION FUNCTION

// function to check if two arrays are equal

const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) return false;
  }
  return true;
};

// ACTUAL FUNCTION

// function to display the appropriate message to the console if two arrays match or not leveraging existing eqArrays function.

const assertArraysEqual = function(arrayOne, arrayTwo) {
  let test = eqArrays(arrayOne, arrayTwo);
  test === true ? console.log(`✔✔✔ Assertion Passed: [${arrayOne}] === [${arrayTwo}]`) : console.log(`🚨🚨🚨 Assertion Failed: [${arrayOne}] !== [${arrayTwo}]`);
};

// TEST CODE

assertArraysEqual([1,2,3,4],[1,2,3,4]);
assertArraysEqual([2,3,4],[1,2,3,4]);
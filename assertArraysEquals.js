// ASSERTION FUNCTION

// function to check if two arrays are equal

const eqArrays = function(arrayOne, arrayTwo) {
  let itemOne = arrayOne.toString();
  let itemTwo = arrayTwo.toString();
  if (itemOne === itemTwo) {
    return true;
  } else if (itemOne !== itemTwo) {
    return false;
  }
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
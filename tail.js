// ASSERTION FUNCTIONS

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔✔✔ Assertion Passed: ${actual} === ${expected}`);
    return;
  } else if (actual !== expected) {
    console.log(`🚨🚨🚨 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// ARRAY ASSERTION FUNCTIONS

// 1. function to check if two arrays are equal

const eqArrays = function(arrayOne, arrayTwo) {
  let itemOne = arrayOne.toString();
  let itemTwo = arrayTwo.toString();
  if (itemOne === itemTwo) {
    return true;
  } else if (itemOne !== itemTwo) {
    return false;
  }
};

// 2.  function to display the appropriate message to the console if
// two arrays match or not leveraging existing eqArrays function.

const assertArraysEqual = function(arrayOne, arrayTwo) {
  let test = eqArrays(arrayOne, arrayTwo);
  test === true ? console.log(`✔✔✔ Assertion Passed: [${arrayOne}] === [${arrayTwo}]`) : console.log(`🚨🚨🚨 Assertion Failed: [${arrayOne}] !== [${arrayTwo}]`);
};



// ACTUAL FUNCTION

// function to return a new array containing only the tail of the original array

const tail = function(array) {
  // use slice to make a copy of 'array'
  let result = array.slice();
  // remove the first element from 'result'
  result.shift();
  return result;
};



// TEST CODE

// Test Case: Check original array
const arrayOne = [1,2,3,4];
console.log(tail(arrayOne));
assertEqual(arrayOne.length, 4);

// TEST TAIL:
const arrayTwo = ["foo", "bar", "barfoo", "foobar"];
assertArraysEqual(tail(arrayTwo), ["bar", "barfoo", "foobar"]);


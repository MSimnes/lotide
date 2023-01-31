// TEST ASSERTION FUNCTIONS

// 1. function to check if two arrays are equal

const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) return false;
  }
  return true;
};

// 2.  function to display the appropriate message to the console if two arrays match or not by leveraging existing eqArrays function.

const assertArraysEqual = function(arrayOne, arrayTwo) {
  let test = eqArrays(arrayOne, arrayTwo);
  test === true ? console.log(`✔✔✔ Assertion Passed: [${arrayOne}] === [${arrayTwo}]`) : console.log(`🚨🚨🚨 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
};

//  ACTUAL FUNCTION

// function to return the middle most element in an array.
// If array length is two or less should return an empty array.
// If array length is odd will return an array with a single element.
// If array length is even will return an array with two elements.

let arrayOdd = [1, 2, 3, 4, 5];
let arrayEven = ['foo', 'bar', 'middle1', 'middle2', 'foobar', 'barfoo'];
let arrayShort = ['x','y'];

const middle = function(array) {
  let result = [];
  // return empty array if length is less than 3
  if (array.length < 3) {
    return result;
  // eslint-disable-next-line brace-style
  }
  // return middle two items if length is even
  else if (array.length % 2 === 0) {
    let index = array.indexOf(array[Math.floor((array.length - 1) / 2)]);
    result.push(array[index]);
    result.push(array[index + 1]);
    return result;
  // eslint-disable-next-line brace-style
  }
  // return middle element if array length is odd
  else if (array.length % 2 !== 0) {
    result.push(array[Math.floor((array.length - 1) / 2)]);
    return result;
  }
};

// TEST CODE

assertArraysEqual(middle(arrayOdd), [3]);
assertArraysEqual(middle(arrayEven), ['middle1', 'middle2']);
assertArraysEqual(middle(arrayShort), []);

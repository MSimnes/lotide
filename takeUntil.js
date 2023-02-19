// Returns a slice of the array from the beginning until the callback returns a truthy value.
const takeUntil = function(array, callback) {
  let result = [];
  for (let item of array) {
    if (!callback(item)) {
      result.push(item);
    } else break;
  }
  return result;
};

// ASSERTION FUNCTION
// function to display the appropriate message to the console if two arrays match or not leveraging existing eqArrays function.

const assertArraysEqual = function(arrayOne, arrayTwo) {
  let test = eqArrays(arrayOne, arrayTwo);
  test === true ? console.log(`✔✔✔ Assertion Passed: [${arrayOne}] === [${arrayTwo}]`) : console.log(`🚨🚨🚨 Assertion Failed: [${arrayOne}] !== [${arrayTwo}]`);
};

// check if two arrays are the same and return true or false

const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

// TEST CODE

const data1 = [1,2,5,7,2,-1,2,4,5];
assertArraysEqual([1,2,5,7,2], takeUntil(data1, x => x < 0));

const data2 = ['I\'ve', 'been', 'to', 'hollywood', ","];
assertArraysEqual(['I\'ve', 'been', 'to', 'hollywood'], takeUntil(data2, x => x === ","));

module.exports = takeUntil;
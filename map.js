const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// ASSERTION FUNCTION

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
  test === true ? console.log(`✔✔✔ Assertion Passed: [${arrayOne}] === [${arrayTwo}]`) : console.log(`🚨🚨🚨 Assertion Failed: [${arrayOne}] !== [${arrayTwo}]`);
};

// TEST CODE

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual([ 'g', 'c', 't', 'm', 't' ], results1);

const numbers = [1, 2, 3, 4];
const results2 = map(numbers, num =>  num * 2);
assertArraysEqual([2, 4, 6, 8], results2);

const welcome = ['Tiffany', "Henrik", "Abdul", "Sam"];
const results3 = map(welcome, name =>  "Welcome, " + name);
assertArraysEqual(['Welcome, Tiffany', "Welcome, Henrik", "Welcome, Abdul", "Welcome, Sam"], results3);

module.exports = map;
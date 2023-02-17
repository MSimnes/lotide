const assertArraysEqual = require('../assertArraysEqual');
const assertEqual = require('../assertEqual');
const tail = require('../tail');
// TEST CODE

// Test Case: Check original array
const arrayOne = [1,2,3,4];
console.log(tail(arrayOne));
assertEqual(arrayOne.length, 4);

// TEST TAIL:
const arrayTwo = ["foo", "bar", "barfoo", "foobar"];
assertArraysEqual(tail(arrayTwo), ["bar", "barfoo", "foobar"]);
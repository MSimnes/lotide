const assertArraysEqual = require("../assertArraysEqual");
const middle =  require("../middle");
// const eqArrays = require("../eqArrays");
// TEST CODE

let arrayOdd = [1, 2, 3, 4, 5];
let arrayEven = ['foo', 'bar', 'middle1', 'middle2', 'foobar', 'barfoo'];
let arrayShort = ['x','y'];

assertArraysEqual(middle(arrayOdd), [3]);
assertArraysEqual(middle(arrayEven), ['middle1', 'middle2']);
assertArraysEqual(middle(arrayShort), []);
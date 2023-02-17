const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');

// ACTUAL FUNCTION

// function to return a new array containing only the tail of the original array

const tail = function(array) {
  // use slice to make a copy of 'array'
  let result = array.slice();
  // remove the first element from 'result'
  result.shift();
  return result;
};
module.export = tail;
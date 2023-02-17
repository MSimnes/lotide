const assertEqual = require('./assertEqual');
// ACTUAL FUNCTION

// Function to return the first item in an array

const head = function(array) {
  let result;
  result = array.shift();
  return result;
};

module.export = head;
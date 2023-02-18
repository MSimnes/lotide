const eqArrays = require("./eqArrays");
// ACTUAL FUNCTION
// function to display the appropriate message to the console if two arrays match or not leveraging existing eqArrays function.
const assertArraysEqual = function(arrayOne, arrayTwo) {
  let test = eqArrays(arrayOne, arrayTwo);
  test === true ? console.log(`✔✔✔ Assertion Passed: [${arrayOne}] === [${arrayTwo}]`) : console.log(`🚨🚨🚨 Assertion Failed: [${arrayOne}] !== [${arrayTwo}]`);
};
module.exports = assertArraysEqual;
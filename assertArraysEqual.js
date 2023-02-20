const eqArrays = require("./eqArrays");

/**
 * Function to assert whether two arrays are equal or not.
 * @param {array} arrayOne - First array to compare.
 * @param {array} arrayTwo - Second array to compare.
 * @returns {string} - Displays the appropriate message to the console if two arrays match or not.
 */

const assertArraysEqual = function(arrayOne, arrayTwo) {
  const test = eqArrays(arrayOne, arrayTwo);
  test === true ? console.log(`✔✔✔ Assertion Passed: [${arrayOne}] === [${arrayTwo}]`) : console.log(`🚨🚨🚨 Assertion Failed: [${arrayOne}] !== [${arrayTwo}]`);
};

module.exports = assertArraysEqual;
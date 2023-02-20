const eqObjects = require('./eqObjects');

/**
 * Function to assert whether two objects are equal or not.
 * @param {object} objectOne - First object to compare.
 * @param {object} objectTwo - Second object to compare.
 * @returns {string} - Displays the appropriate message to the console if two objects match or not.
 */

const assertObjectsEqual = function(objectOne, objectTwo) {
  // Require the 'util' module to enable the use of inspect() to output the actual and expected objects as strings
  const inspect = require('util').inspect;
  const test = eqObjects(objectOne, objectTwo);
  test === true ? console.log(`✔✔✔ Assertion Passed: ${inspect(objectOne)} === ${inspect(objectTwo)}`) : console.log(`🚨🚨🚨 Assertion Failed: ${inspect(objectOne)} !== ${inspect(objectTwo)}`);
};

module.exports = assertObjectsEqual;
/**
 * Function to log a clear message to the console whether actual === expected or not.
 *
 * @param {*} actual - The actual value to compare.
 * @param {*} expected - The expected value to compare.
 * @returns {undefined}
 */

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔✔✔ Assertion Passed: ${actual} === ${expected}`);
    return;
  } else {
    console.log(`🚨🚨🚨 Assertion Failed: ${actual} !== ${expected}`);
    return;
  }
};

module.exports = assertEqual;
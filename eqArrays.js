/**
 * Function to compare two arrays and return true or false if they match or not.
 * @param {array} arrayOne - First array to compare.
 * @param {array} arrayTwo - Second array to compare.
 * @returns {boolean} - True if the two arrays match, false otherwise.
 */

const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) return false;
  }
  return true;
};
module.exports = eqArrays;
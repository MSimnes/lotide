/**
 * Returns a slice of the array from the beginning until the callback returns a truthy value.
 *
 * @param {Array} array - The source array.
 * @param {Function} callback - The function to test each element of the array.
 * @returns {Array} - A new array containing elements from the beginning of the source array until the callback function returns a truthy value.
 */

const takeUntil = function(array, callback) {
  let result = [];
  for (const item of array) {
    if (!callback(item)) {
      result.push(item);
    } else {
      break;
    }
  }
  return result;
};
module.exports = takeUntil;
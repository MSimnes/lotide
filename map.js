/**
 * Returns a new array based on the results of the callback function.
 * @param {Array} array - The array to iterate over.
 * @param {Function} callback - The function to execute on each element.
 * @returns {Array} - The new array with the results.
 */

const map = function(array, callback) {
  const results = [];
  for (const item of array) {
    results.push(callback(item));
  }
  return results;
};
module.exports = map;
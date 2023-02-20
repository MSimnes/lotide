/**
 * Returns a subset of the first argument, removing any elements from the second argument.
 *
 * @param {Array} source - The array to filter
 * @param {Array} itemsToRemove - The items to remove from the source array
 * @returns {Array} - A new array with the itemsToRemove removed
 */

const without = function(source, itemsToRemove) {
  let result;
  result = source.filter(elem => !itemsToRemove.includes(elem));
  return result;
};
module.exports = without;
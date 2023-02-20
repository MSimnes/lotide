/**
 * Returns a new array containing all elements except for the first one.
 * 
 * @param {Array} array - The array to process.
 * @returns {Array} A new array containing all elements except for the first one.
 */

const tail = function(array) {
  return array.slice(1);
};
module.exports = tail;
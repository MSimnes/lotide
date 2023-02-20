/**
 * Takes in an object and a callback function and returns the first key that produces a truthy value from the callback function.
 * @param {Object} object - The object to search for the key.
 * @param {Function} callback - The callback function that will be called on each value in the object.
 * @returns {string|undefined} - The key that passes the callback function's truth test, or undefined if no key is found.
 */

const findKey = function(object, callback) {
  for (const item in object) {
    if (callback(object[item])) {
      return item;
    }
  }
  return undefined;
};
module.exports = findKey;
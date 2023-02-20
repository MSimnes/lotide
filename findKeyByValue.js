/**
 * Finds the key of the corresponding value argument in the object argument.
 * @param {Object} object - The object to search through.
 * @param {*} value - The value to search for.
 * @returns {(string|undefined)} - The key of the value if found, otherwise undefined.
 */

const findKeyByValue = function(object, value) {
  for (const prop in object) {
    if (object[prop] === value) {
      return prop;
    }
  }
  return undefined;
};
module.exports = findKeyByValue;
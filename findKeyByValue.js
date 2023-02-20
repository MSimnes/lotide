// Finds the key of the corresponding value passed in as an argument.
const findKeyByValue = function(object, value) {
  for (const prop in object) {
    if (object[prop] === value) {
      return prop;
    }
  }
  return undefined;
};
module.exports = findKeyByValue;
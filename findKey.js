// Takes in an object and a callback, returns the key according to the callback passed in.
const findKey = function(object, callback) {
  for (const item in object) {
    if (callback(object[item])) {
      return item;
    }
  }
  return undefined;
};

module.exports = findKey;
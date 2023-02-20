// Returns a slice of the array from the beginning until the callback returns a truthy value.
const takeUntil = function(array, callback) {
  let result = [];
  for (let item of array) {
    if (!callback(item)) {
      result.push(item);
    } else break;
  }
  return result;
};

module.exports = takeUntil;
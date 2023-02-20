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

// TEST CODE

const data1 = [1,2,5,7,2,-1,2,4,5];
assertArraysEqual([1,2,5,7,2], takeUntil(data1, x => x < 0));

const data2 = ['I\'ve', 'been', 'to', 'hollywood', ","];
assertArraysEqual(['I\'ve', 'been', 'to', 'hollywood'], takeUntil(data2, x => x === ","));

module.exports = takeUntil;
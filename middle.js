//  ACTUAL FUNCTION

// function to return the middle most element in an array.
// If array length is two or less should return an empty array.
// If array length is odd will return an array with a single element.
// If array length is even will return an array with two elements.

const middle = function(array) {
  let result = [];
  // return empty array if length is less than 3
  if (array.length < 3) {
    return result;
  // eslint-disable-next-line brace-style
  }
  // return middle two items if length is even
  else if (array.length % 2 === 0) {
    let index = array.indexOf(array[Math.floor((array.length - 1) / 2)]);
    result.push(array[index]);
    result.push(array[index + 1]);
    return result;
  // eslint-disable-next-line brace-style
  }
  // return middle element if array length is odd
  else if (array.length % 2 !== 0) {
    result.push(array[Math.floor((array.length - 1) / 2)]);
    return result;
  }
};
module.exports = middle;
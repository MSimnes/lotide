// Function to take in an array or array of nested arrays and return a flattened array using recursion to find the depth of the array and then flatmap to flatten the array to the given depth.
const flatten = function(array) {
  let flatArray = array.flat(getArrayDepth(array));
  return flatArray;
};
// recursive helper function to get array depth
const getArrayDepth = (value) => {
  return Array.isArray(value) ? 1 + Math.max(0, ...value.map(getArrayDepth)) : 0;
};

module.exports = flatten;
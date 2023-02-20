// Function to return a subset of the first arg 'source' array, removing unwanted elements from the second arg 'itemsToRmemove'
const without = function(source, itemsToRemove) {
  let result;
  result = source.filter(elem => !itemsToRemove.includes(elem));
  return result;
};
module.exports = without;
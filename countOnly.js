/**
 * This function takes in an array of allItems and returns an object containg counts for items selected for in itemsToCount object.
 * @param {Array} allItems - The collection of items to be counted.
 * @param {Object} itemsToCount - The items to be counted.
 * @returns {Object} - An object containing the counts of the items to be counted.
 */

const countOnly = function(allItems, itemsToCount) {
  let results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};
module.exports = countOnly;
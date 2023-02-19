// This function takes in a collection of allItems and return counts for items selected in itemsToCount.
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

// ASSERTION FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔✔✔ Assertion Passed: ${actual} === ${expected}`);
    return;
  } else if (actual !== expected) {
    console.log(`🚨🚨🚨 Assertion Failed: ${actual} !== ${expected}`);
    return;
  }
};

module.exports = countOnly;
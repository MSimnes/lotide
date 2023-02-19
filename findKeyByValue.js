const findKeyByValue = function(object, value) {
  for (const prop in object) {
    if (object[prop] === value) {
      return prop;
    }
  }
  return undefined;
};

// ASSERTION FUNCTIONS

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✔✔✔ Assertion Passed: ${actual} === ${expected}`);
//     return;
//   } else if (actual !== expected) {
//     console.log(`🚨🚨🚨 Assertion Failed: ${actual} !== ${expected}`);
//     return;
//   }
// };

module.exports = findKeyByValue;
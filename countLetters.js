// ASERTION FUNCTIONS

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✔✔✔ Assertion Passed: ${actual} === ${expected}`);
//     return;
//   } else if (actual !== expected) {
//     console.log(`🚨🚨🚨 Assertion Failed: ${actual} !== ${expected}`);
//     return;
//   }
// };

// ACTUAL FUNCTION

const countLetters = function(string) {
  let results = {};
  for (let letter of string) {
    if (letter === " ") {
      continue;
    } else if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

// TEST CODE

console.log(countLetters("hahaha this is a test"));
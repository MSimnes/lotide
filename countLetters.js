/**
 * Takes in a string parameter and returns an object containing the count of letters, with each letter's count stored as a value with its respective key.
 * @param {string} string - The string or several strings to be counted.
 * @returns {Object} - Returns an object containing the count of letters, with each letter's count stored as a value with its respective key.
 */

const countLetters = function(string) {
  let results = {};
  for (const letter of string) {
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
module.exports = countLetters;
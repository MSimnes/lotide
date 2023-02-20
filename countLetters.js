// Takes in a string or several strings and returns an object containingthe count of letters excluding whitespaces.
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
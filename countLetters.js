// takes in a string or several strings adn returns the count of letters excluding whitespaces.
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

module.exports = countLetters;
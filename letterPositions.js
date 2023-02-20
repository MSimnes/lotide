// Takes in a string and returns an object with the letters and positions of each letter.
const letterPositions = function(string) {
  let results = {};
  for (let i = 0; i < string.length; i++) {
    const letter = string[i];
    if (letter === " ") {
      continue;
    } else if (results[letter]) {
      results[letter].push(i);
    } else {
      results[letter] = [i];
    }
  }
  return results;
};

module.exports = letterPositions;
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

// ASSERTION FUNCTIONS

// function to check if two arrays are equal

// const eqArrays = function(arrayOne, arrayTwo) {
//   if (arrayOne.length !== arrayTwo.length) return false;
//   for (let i = 0; i < arrayOne.length; i++) {
//     if (arrayOne[i] !== arrayTwo[i]) return false;
//   }
//   return true;
// };

//assert arrays are equal

// const assertArraysEqual = function(arrayOne, arrayTwo) {
//   let test = eqArrays(arrayOne, arrayTwo);
//   test === true ? console.log(`✔✔✔ Assertion Passed: [${arrayOne}] === [${arrayTwo}]`) : console.log(`🚨🚨🚨 Assertion Failed: [${arrayOne}] !== [${arrayTwo}]`);
// };

module.exports = letterPositions;
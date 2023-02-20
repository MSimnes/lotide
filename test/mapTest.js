const map = require('../map');
const assertArraysEqual = require('../assertArraysEqual');

// TEST CODE

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual([ 'g', 'c', 't', 'm', 't' ], results1);

const numbers = [1, 2, 3, 4];
const results2 = map(numbers, num =>  num * 2);
assertArraysEqual([2, 4, 6, 8], results2);

const welcome = ['Tiffany', "Henrik", "Abdul", "Sam"];
const results3 = map(welcome, name =>  "Welcome, " + name);
assertArraysEqual(['Welcome, Tiffany', "Welcome, Henrik", "Welcome, Abdul", "Welcome, Sam"], results3);

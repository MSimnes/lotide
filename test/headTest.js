const assertEqual = require('./assertEqual');
// TEST CODE

assertEqual(head([1,2,3,4]),1);
assertEqual(head([1,3]), 1);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);
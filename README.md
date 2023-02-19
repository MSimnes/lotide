# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mike.simnes/lotide`

**Require it:**

`const _ = require('@mike.simnes/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:
* `assertArraysEqual(arrayOne, arrayTwo)`: function to display the appropriate message to the console if two arrays match or not leveraging existing eqArrays function.
* `assertEqual(actual, expected)`: logs a clear message to the console whether actual === expected or not.
* `asserObjectsEqual(object1, object2)`: leverages eqObjects and eqArrays and returns a clear message to the console if they match or not.
* `countLetters(string)`: takes in a string or several strings adn returns the count of letters excluding whitespaces.
* `countOnly(allItems, itemsToCount)`: This function takes in a collection of allItems and return counts for items selected in itemsToCount.
* `eqArrays(arrayOne, arrayTwo)`: compares two arrays and returns true or false if they match or not.
* `eqObjects(objectOne, objectTwo)`: compares objects to see if they are equal, works with nested objects and arrays.
* `findKey(object, callback)`: takes in an object and a callback, returns the key according to the callback passed in
* `findKeyByValue(object, value)`: finds the key of the corresponding value passed in as an argument
* `flatten(array)`: function to take in an array or array of nested arrays and return a flattened array using recursion to find the depth of the array and then flatmap to flatten the array to the given depth.  
* `head(array)`: returns the first item of an array.
* `letterPositions(string)`: takes in a string and returns an object with the letters and positions of each letter. 
* `map(array, callback)`: returns a new array based on the results of the callback function.
* `middle(array)`: returns middle element if array length is odd, returns middle two items if length is even
* `tail(array)`: returns a new array containing only the tail of the original array
* `takeUntil(array, callback)`: returns a slice of the array from the beginning until the callback returns a truthy value.
* `without(source, itemsToRemove)'`: returns a subset of the first argument 'source' array, removing unwanted elements from the second arg 'itemsToRmemove'
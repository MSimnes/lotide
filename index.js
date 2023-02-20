/**
 * Module with various utility functions.
 * @module utilities
 */

const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const head = require('./head');
const letterPositions = require('./letterPositions');
const map = require('./map');
const middle = require('./middle');
const tail = require('./tail');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  /**
   * Function to assert whether two arrays are equal.
   * @function assertArraysEqual
   */
  assertArraysEqual,

  /**
   * Function to assert whether two values are equal.
   * @function assertEqual
   */
  assertEqual,

  /**
   * Function to assert whether two objects are equal.
   * @function assertObjectsEqual
   */
  assertObjectsEqual,

  /**
   * Function to count the number of occurrences of each letter in a string.
   * @function countLetters
   */
  countLetters,

  /**
   * Function to count the number of occurrences of specified elements in an array.
   * @function countOnly
   */
  countOnly,

  /**
   * Function to determine whether two arrays are equal.
   * @function eqArrays
   */
  eqArrays,

  /**
   * Function to determine whether two objects are equal.
   * @function eqObjects
   */
  eqObjects,

  /**
   * Function to find the first key in an object that satisfies a provided condition.
   * @function findKey
   */
  findKey,

  /**
   * Function to find the key of the corresponding value passed in as an argument.
   * @function findKeyByValue
   */
  findKeyByValue,

  /**
   * Function to take in an array or array of nested arrays and return a flattened array using recursion to find the depth of the array and then flatmap to flatten the array to the given depth.
   * @function flatten
   */
  flatten,

  /**
   * Function to return the first item in an array.
   * @function head
   */
  head,

  /**
   * Function to take in a string and returns an object with the letters and positions of each letter.
   * @function letterPositions
   */
  letterPositions,

  /**
   * Function to return a new array based on the results of the callback function.
   * @function map
   */
  map,

  /**
   * Function to return the middle most element in an array.
   * @function middle
   */
  middle,

  /**
   * Function to return a new array containing only the tail of the original array.
   * @function tail
   */
  tail,

  /**
   * Function to returns a slice of the array from the beginning until the callback returns a truthy value.
   * @function takeUntil
   */
  takeUntil,

  /**
   * Function to return a subset of the first arg 'source' array, removing unwanted elements from the second arg 'itemsToRmemove'.
   * @function without
   */
  without
};
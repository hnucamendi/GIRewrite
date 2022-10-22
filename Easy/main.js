"use strict";

/**
 * EASY:
 * Write a function that takes in an array of numbers and outputs the average of all the numbers.
 *
 * @param {Array} nums - Array of numbers
 * @param {number} sum - Calculated sum
 * @returns {number} Calculated average
 */

const calculateAverage = (nums) => {
  let sum = 0;
  for (let n of nums) {
    sum += n;
  }
  return sum / nums.length;
};

console.log(calculateAverage([1, 4, 7])); // Output: 4

console.log(calculateAverage([10, 5])); // Output: 7.5

console.log(calculateAverage([1.5, 3, 2.5, 1])); // Output: 2

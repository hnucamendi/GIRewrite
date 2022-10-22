"use strict";

/**
 * MEDIUM:
 * Suppose an array is numbers with a random order of numbers unknown to you beforehand.
 * You are given a target value to search. If found in the array return its index, otherwise return -1.
 * You may assume no duplicate exists in the array.
 *
 * @param {Array} nums - Array of numbers
 * @param {number} target - Value to search for
 */

const findTarget = (nums, target) => nums.indexOf(target);

// console.log(findTarget([4, 5, 6, 7, 0, 1, 2], 0)); // Output: 4
// console.log(findTarget([4, 5, 6, 7, 0, 1, 2], 3)); // Output: -1

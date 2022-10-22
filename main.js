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

// console.log(calculateAverage([1, 4, 7])); // Output: 4

// console.log(calculateAverage([10, 5])); // Output: 7.5

// console.log(calculateAverage([1.5, 3, 2.5, 1])); // Output: 2

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

/**
 * HARD:
 * Create two buttons, one that turns the background color red when clicked.
 * The other, when clicked, turns the body's background color blue.
 *
 */

// const buttonOne = document.querySelector(".button-one");
// const buttonTwo = document.querySelector(".button-two");

// buttonOne.addEventListener("mousedown", () => {
//   buttonOne.style.backgroundColor = "red";
//   buttonOne.addEventListener("mouseup", () => {
//     buttonOne.style.backgroundColor = "";
//   });
// });

// buttonTwo.addEventListener("mousedown", () => {
//   buttonTwo.style.backgroundColor = "blue";
//   buttonTwo.addEventListener("mouseup", () => {
//     buttonTwo.style.backgroundColor = "";
//   });
// });

// VERY HARD: You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
// Hint:  Sudo code this problem. Focus on breaking the problem down into steps  Use functions, arrays and logical operators.  Do not have anyone give you the answer or solve this problem for you.
// Example 1:
// Input: coins = [1, 2, 5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:
// Input: coins = [2], amount = 3
// Output: -1

// Note: You may assume that you have an infinite number of each kind of coin.

/**
 * VERY HARD:
 * You are given coins of different denominations and a total amount of money amount.
 * Write a function to compute the fewest number of coins that you need to make up that amount.
 * If that amount of money cannot be made up by any combination of the coins, return -1.
 *
 */

const coinCounter = (coins, target) => {
  coins.sort((a, b) => a - b);
  let minCoins = 0;
  while (target > 0 ) {
    for (let i = coins.length - 1; i > -1; i--) {
      if (coins[i] <= target) {
        target -= coins[i];
        minCoins += 1;
        break;
      }
      if (i === 0 && coins[i] > target) {
        return -1;
      }
    }
  }
  return minCoins;
};

// console.log(coinCounter([1, 2, 5], 11));
// console.log(coinCounter([2], 3));
// console.log(coinCounter([0], 3)); brokens

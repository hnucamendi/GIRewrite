"use strict";

/**
 * VERY HARD:
 * You are given coins of different denominations and a total amount of money amount.
 * Write a function to compute the fewest number of coins that you need to make up that amount.
 * If that amount of money cannot be made up by any combination of the coins, return -1.
 * Note: You may assume that you have an infinite number of each kind of coin.
 *
 * @param {number[]} coins - coins of different denominations
 * @param {number} amount - the target amount
 * @return {number} The number of coins to reach amount variable or -1
 */

//Write code below this comment

console.log(coinCounter([1, 2, 5], 11)); // Output 3
console.log(coinCounter([1, 10, 8, 33], 25)); // Output 5
console.log(coinCounter([2], 3)); // Output -1
console.log(coinCounter([0], 3)); // Output -1

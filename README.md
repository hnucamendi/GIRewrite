# Guided Inquiry: JavaScript Week 2

- [Guided Inquiry: JavaScript Week 2](#guided-inquiry-javascript-week-2)
- [Learning Objectives](#learning-objectives)
- [Learning Resources](#learning-resources)
- [Challenges](#challenges)
  - [EASY:](#easy)
  - [MEDIUM:](#medium)
  - [HARD:](#hard)
  - [VERY HARD:](#very-hard)
- [Submission](#submission)

# Learning Objectives

- Continue building proficiency with key concepts
  - Variables, Data Types, Type Coercion, Basic Operators, and Operator Precedence
- Understand the use of Logical Operators
  - Boolean, If/Else, Ternary, and Switch Statements
- Become comfortable creating and working with Functions, Arrays, and Objects
- Differentiate between the terms: Objects, Properties, and Methods
- Demonstrate an understanding
  - Logical Operators, Functions, and Arrays
- Understand the importance and use of the following in JavaScript
  - Loops and Iteration Events, Execution Context, Hoisting, Scope, and ‘this’

# Learning Resources

Udemy Video: The Complete JavaScript Course
[The Complete JavaScript Course](https://redventures.udemy.com/course/the-complete-javascript-course)

# Challenges

Please push your completed project to a repository on Github. Provide the link to your repo.

## [EASY](./GI2/Easy/):

Write a function that takes in an array of numbers and outputs the average of all the numbers.

Example:

```JavaScript
const calculateAverage = function(array) {...}

calculateAverage([1 , 4 , 7]) // Output: 4

calculateAverage([10, 5]) // Output: 7.5

calculateAverage([1.5, 3, 2.5, 1]) // Output: 2
```

## [MEDIUM](./GI2/Medium/):

Suppose an array of numbers with a random order of numbers unknown to you beforehand. You are given a target value to search for. If found in the array return its `index`, otherwise return `-1`. You may assume no duplicate exists in the array.

Example 1:

```JavaScript
const findTarget = function(array, target) {...}

findTarget( [4,5,6,7,0,1,2], 0) // Output: 4
```

Example 2:

```JavaScript
const findTarget = function(array, target) {...}

findTarget([4,5,6,7,0,1,2], 3) // Output: -1
```

## [HARD](./GI2/Hard/):

Create two buttons in an HTML file and link it to this JavaScript file for this to work. one button turns the background color of its button square to `red` when clicked. The other button turns the background color to `blue` when clicked.

Note: No functions for required, use the DOM

## [VERY HARD](./GI2/Very%20Hard/):

You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

Note: You may assume that you have an infinite number of each kind of coin.

Example 1:

```JavaScript
const coinCounter = function (coins, amount) {...}

coinCounter([1, 2, 5], 11) // Output: 3

// Explanation:
5 + 5 + 1 = 11
```

Example 2:

```JavaScript
const coinCounter = function (coins, amount) {...}

coinCounter(coins = [2], 3) // Output: -1
```

# Submission

Submit the URL to your individual repository that contains your assignment to Canvas. Make sure to check that your content was successfully pushed/uploaded. The deadline is <strong>11:59 pm, Monday, 5/9/2022</strong>.

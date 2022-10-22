"use strict";

/**
 * HARD:
 * Create two buttons, one that turns the background color red when clicked.
 * The other, when clicked, turns the body's background color blue.
 *
 */

const buttonOne = document.querySelector(".button-one");
const buttonTwo = document.querySelector(".button-two");

buttonOne.addEventListener("mousedown", () => {
  buttonOne.style.backgroundColor = "red";
  buttonOne.addEventListener("mouseup", () => {
    buttonOne.style.backgroundColor = "";
  });
});

buttonTwo.addEventListener("mousedown", () => {
  buttonTwo.style.backgroundColor = "blue";
  buttonTwo.addEventListener("mouseup", () => {
    buttonTwo.style.backgroundColor = "";
  });
});

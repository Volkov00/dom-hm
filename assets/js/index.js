"use strict";

// Task 1
const btn1 = document.querySelector(".hw1");

btn1.addEventListener(
  "click",
  ({
    target: {
      dataset: { counter },
    },
  }) => {
    if (counter < 1) {
      btn1.removeEventListener("click", addEventListener());
    }
    btn1.setAttribute("data-counter", --counter);
    btn1.innerHTML = counter;
  }
);
// Task 2

const btn2 = document.querySelector(".hw2");

btn2.addEventListener("click", ({ target: { parentNode } }) => {
  function randomNum(a, b) {
    let randomNumber = Math.floor(Math.random() * (a - b) + b);
    return randomNumber;
  }
  function randomColor(
    r = randomNum(0, 255),
    g = randomNum(0, 255),
    b = randomNum(0, 255)
  ) {
    return `rgb(${r},${g},${b}`;
  }
  parentNode.style.background = randomColor();
});

// Task 3

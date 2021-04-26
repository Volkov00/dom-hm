"use strict";

// Task 1
// лучше делать обращение через таргет, что действовало на другие кнопки
const btn1 = document.querySelector(".hw1");
const buttonHundler = ({ target }) => {
  if (target.dataset.counter <= 1) {
    target.removeEventListener("click", buttonHundler);
  }
  target.dataset.counter--;
  target.innerHTML = target.dataset.counter;
};

btn1.addEventListener("click", buttonHundler);
// Task 2

const btn2 = document.querySelector(".hw2");

btn2.addEventListener("click", ({ target: { parentNode } }) => {
  function randomNum(a, b) {
    let randomNumber = Math.floor(Math.random() * (a - b + 1) + b);
    return randomNumber;
  }
  function randomColor(
    r = randomNum(0, 255),
    g = randomNum(0, 255),
    b = randomNum(0, 255)
  ) {
    return `rgb(${r},${g},${b})`;
  }
  parentNode.style.background = randomColor();
});

// Task 3

const pictureLink = "https://picsum.photos/200/300?random=";
const img = document.querySelector(".imgs");
const imgBtn = document.querySelector(".hw3");

imgBtn.addEventListener("click", getImageLink(img));

function getImageLink(elem) {
  let count = 0;
  return function () {
    return (elem.src = pictureLink + count++);
  };
}

"use strict";

let dropdownList = document.querySelector(".dropdown__list");
let dropdownValue = document.querySelector(".dropdown__value");
let dropdownItems = document.querySelectorAll(".dropdown__item");
let dropdownLink = document.querySelectorAll(".dropdown__link");

function dropdown(event) {
  if (dropdownList.classList.contains('dropdown__list_active')) {
    dropdownList.classList.remove("dropdown__list_active");
  } else {
    dropdownList.classList.add("dropdown__list_active");
  }
}

function chooseItem(event) {
  event.preventDefault();
  dropdownList.classList.remove("dropdown__list_active");
  dropdownValue.textContent = this.textContent;
}

dropdownValue.addEventListener("click", dropdown);

dropdownItems.forEach((item, index) => {
  item.addEventListener("click", chooseItem);
});

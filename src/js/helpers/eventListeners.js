import router from "../routing";

import {
  renderDetailedPage
}
from "../views/detaild.js";
import {
  renderSpecificProductPage
}
from "../views/specificProduct";
import {
  renderBasketPage
}
from "../views/basket.js";

export const registerEventListeners = () => {
  document.querySelector(".confirm-btn").addEventListener("click", function () {
    router.redirect('/products');

  })
}

export const productsEventListeners = () => {
  document.querySelectorAll(".grid-item").forEach(function (item) {
    item.addEventListener("click", function () {
      console.log("hi");
      renderDetailedPage();
    })
  })
}

export const specificProductEventListener = (tableNumber) => {
  document.querySelectorAll(".product").forEach(item => item.addEventListener("click",
    () => renderSpecificProductPage(tableNumber)))
}

export const basketPageEventListener = () => {
  document.getElementById("shoppingIcon").addEventListener("click", function () {
    renderBasketPage();
    console.log("hello");

  })
}

export const writeToDocumentCookie = () => {
  let select = document.getElementById('selectTable');
  console.log(select);
  select.addEventListener("change", function () {
    let option = select.options[select.selectedIndex];
    document.cookie = "name=" + option.text;
    // console.log(document.cookie);
  })
}
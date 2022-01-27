import {
  renderDetailedPage
} from "../detaild.js";
import {
  renderSpecificProductPage
} from "../specificProduct";
import {
  renderBasketPage
} from "../basket.js";

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
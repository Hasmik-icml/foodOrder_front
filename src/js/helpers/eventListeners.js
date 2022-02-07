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
import {
  getCookie,
  setCookie
} from "./storage";
import {
  renderBurgerPage
} from "../views/navBar";

import CONSTANTS from "../helpers/constants";

let productTypes = [];

export const registerEventListeners = () => {
  let select = document.getElementById('selectTable')
  select.addEventListener("change", function () {
    document.querySelector(".confirm-btn")
      .addEventListener("click", function () {
        setCookie("table", select.value);
        getCookie("table");
        router.redirect('/products');
      })
  })
}

export const productsEventListeners = (data) => {
  productTypes = data;
  document.querySelectorAll(".grid-item").forEach(item =>
    item.addEventListener("click", function () {
      console.log("Պրոդուկտի դիս >>>>>>>>>>>>", this.className);
      console.log("data", this.getAttribute("data-product-type"));
      router.redirect(`/products/${this.getAttribute("data-product-type")}`);
    })
  )
}



export const specificProductEventListener = () => {
  document.querySelectorAll(".product").forEach(item => item.addEventListener("click",
    function () {
      let hash = window.location.hash;
      router.redirect(`${hash}/${this.id}`);
    }
  ))
}
export const cancelOrder = () => {
  document.getElementById("cancel").
  addEventListener("click", () => {
    if (confirm("Չեղարկե՞լ պատվերը")) {
      document.getElementById("basketCounter").innerHTML = 0;
      router.redirect("/");
    }
  })
}

export const basketPageEventListener = () => {
  let hash = window.location.hash;
  document.getElementById("shoppingIcon").addEventListener("click", function () {
    router.redirect(`/basket`);
  })
}
export const pageBackEventListener = () => {
  document.querySelector(".navArrow").addEventListener("click", function () {
    window.history.back();
  })
}
export const BackEventListener = () => {
  document.querySelector(".arrow").addEventListener("click", function () {
    window.history.back();
  })
}

export const fiterSearchListener = () => {

let searchText = "";

document.querySelector("#searchInput").addEventListener("keyup", function (e ) {
  searchText = e.target.value;
  render();
})

let li = document.querySelector(".filterItem");
function render() {
  li.innerHTML = "";
  fetch(`${CONSTANTS.HOST}/ingredient?url=get-all`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let result = data.filter(function (params, index) {
       return  params.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
        // console.log("result-----", params);
        // return `<li>${params.name}</li>`
      }).map(function(params){
        return `<li>${params.name}</li>`
      })
      console.log("searchText", searchText);
      document.querySelector(".filterItem").insertAdjacentHTML("beforeend", result.join(""));
      setCookie("filter", searchText);
    })
}


render();
}

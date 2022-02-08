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
import {State} from "../model";

//let productTypes = [];

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

export const productsEventListeners = () => {

  document.querySelectorAll(".grid-item").forEach(item =>
    item.addEventListener("click", function () {
      //console.log(this);
      //console.log(State.productTypes);
      let data =  this.getAttribute("data-product-type");
      console.log(this);
      console.log(data);
      router.redirect(`/products/${data}`);
    })
  )
}



export const specificProductEventListener = (id) => {
  document.querySelectorAll(".product")
      .forEach(item => item.addEventListener("click",
    function () {
      let hash = window.location.hash;
      console.log(State.product);
      console.log(this);
      router.redirect(`${hash}/${this.id}`);
    }
  ))
}

export const burgerPageEventListener = () => {
  let hash = window.location.hash;
  document.getElementById("homeIcon").addEventListener("click", function () {
    router.redirect(`/products`);
  });
  document.getElementById("shoppingIcon").addEventListener("click", function () {
    router.redirect(`/basket`);
  });
  document.getElementById("cancel").
  addEventListener("click", () => {
    if (confirm("Չեղարկե՞լ պատվերը")) {
      State.basket.length =0;
        setCookie("table", 0,  0);
      router.redirect("/");
    }
  });
  document.querySelector(".navArrow").addEventListener("click", function () {
    window.history.back();
  });
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
     // setCookie("filter", searchText);
    })
}


render();
}

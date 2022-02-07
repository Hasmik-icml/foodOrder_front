// import { renderRegisterPage } from "./js/views/register";
// // import router from "./js/routing";
// import { renderProductsPage } from "./js/views/products";
// renderRegisterPage();
// document.querySelector(".comfirm-btn").addEventListener("click",renderProductsPage);
// // router.redirect("/menu");
// import {renderDetailedPage} from "./js/views/detaild.js";
// renderDetailedPage();
// import {specificProductPage} from "./js/views/specificProduct";

// specificProductPage()

import {
  writeToDocumentCookie
} from "./js/helpers/eventListeners.js";
import {
  renderBasketPage
} from "./js/views/basket";
import {
  renderRegisterPage
}
from "./js/views/register";
// import router from "./js/routing";
import {
  renderProductsPage
}
from "./js/views/products";
// router.redirect("/menu"
import {
  renderDetailedPage
}
from "./js/views/detaild.js";
// renderDetailedPage();
import {
  specificProductPage
}
from "./js/views/specificProduct";
// specificProductPage();
import {
  setCookie
} from "./js/helpers/storage.js";

import {getCookie} from "./js/helpers/storage.js";

import router from "./js/routing";
import {State} from "./js/model";
import {renderBurgerPage} from "./js/views/navBar";

console.log(State);
let hash = window.location.hash;
console.log( getCookie("filter"));
//if(getCookie("table") !== ""){

let hashString = (hash.indexOf("#") >= 0) &&
(hash.split("#")[1] !== "/") ?
    hash.split("#")[1] : "/";
   router.redirect(hashString);



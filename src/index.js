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
} from "./js/views/helpers/eventListeners.js";
import {
  renderBasketPage
} from "./js/views/basket";
import {
  renderRegisterPage
} from "./js/views/register";
// import router from "./js/routing";
import {
  renderProductsPage
} from "./js/views/products";
// router.redirect("/menu"
import {
  renderDetailedPage
} from "./js/views/detaild.js";
// renderDetailedPage();
import {
  specificProductPage
} from "./js/views/specificProduct";
// specificProductPage();
renderRegisterPage();
document.querySelector(".confirm-btn").addEventListener("click", function () {
  renderProductsPage();
})

//Ընտրված սեղանի համարի պահպանումը cookie-ում
writeToDocumentCookie();



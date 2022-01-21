
import { renderRegisterPage } from "./js/views/register";
// import router from "./js/routing";
import { renderProductsPage } from "./js/views/products";
renderRegisterPage();

// router.redirect("/menu"
import {renderDetailedPage} from "./js/views/detaild.js";
// renderDetailedPage();
import {specificProductPage} from "./js/views/specificProduct";
// specificProductPage();
document.querySelector(".confirm-btn").addEventListener("click",function(){renderProductsPage()})
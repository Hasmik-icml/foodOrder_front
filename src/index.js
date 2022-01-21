import  "./css/registr.css"
import "./css/products.css"
import { renderRegisterPage } from "./js/views/register";
// import router from "./js/routing";
import { renderProductsPage } from "./js/views/products";
renderRegisterPage();
document.querySelector(".comfirm-btn").addEventListener("click",renderProductsPage);
// router.redirect("/menu");
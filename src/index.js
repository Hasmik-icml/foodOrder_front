<<<<<<< HEAD
import  "./css/registr.css"
import "./css/products.css"
import { renderRegisterPage } from "./js/views/register";
// import router from "./js/routing";
import { renderProductsPage } from "./js/views/products";
renderRegisterPage();
document.querySelector(".comfirm-btn").addEventListener("click",renderProductsPage);
// router.redirect("/menu");
=======
<<<<<<< HEAD
import "./css/detailed.css";
import img from "./img/cheesePizza.png";
import {renderDetailedPage} from "./js/views/detaild.js";
renderDetailedPage();
=======
import "../public/css/specificProductPage.css";
import {specificProductPage} from "./js/views/specificProduct";

specificProductPage();
>>>>>>> 280173969beb507aeb8fb32feb02c81f9f5fa99b
>>>>>>> 75c766f946206d1f51b5a7dcbf835cd0a1e5fe64

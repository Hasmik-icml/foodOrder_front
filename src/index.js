
import { renderRegisterPage } from "./js/views/register";
// import router from "./js/routing";
import { renderProductsPage } from "./js/views/products";
// router.redirect("/menu"
import {renderDetailedPage} from "./js/views/detaild.js";
// renderDetailedPage();
import {specificProductPage} from "./js/views/specificProduct";
// specificProductPage();
renderRegisterPage();
document.querySelector(".confirm-btn").addEventListener("click",function(){renderProductsPage()})

//document.querySelector(".containerProducts").addEventListener("click", function(event){
  //let target = event.target;
  //console.log(event.target);
//})
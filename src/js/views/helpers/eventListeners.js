import {renderDetailedPage} from "../detaild.js";
import {renderSpecificProductPage} from "../specificProduct";

export const  productsEventListeners = () => {
document.querySelectorAll(".grid-item").forEach(function(item){
  item.addEventListener("click", function(){
    console.log("hi");
    renderDetailedPage();

  })
})
}

export const specificProductEventListener = () => {
  document.querySelectorAll(".product").forEach(item => item.addEventListener("click",
      ()=> renderSpecificProductPage())
)
}
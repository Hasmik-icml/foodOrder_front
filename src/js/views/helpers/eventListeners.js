import {renderDetailedPage} from "../detaild.js";

export const  productsEventListeners = () => {
document.querySelectorAll(".grid-item").forEach(function(item){
  item.addEventListener("click", function(){
    console.log("hi");
    renderDetailedPage();

  })
})
}
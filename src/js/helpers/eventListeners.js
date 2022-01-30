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
import {getCookie, setCookie} from "./storage";
import {renderBurgerPage} from "../views/navBar";


export const registerEventListeners = () => {
  let select= document.getElementById('selectTable')
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
       console.log(this.id);
       router.redirect(`/products/${this.id}`);
     }
     )
  )
        }



export const specificProductEventListener = () => {
  document.querySelectorAll(".product").forEach
  (item => item.addEventListener("click",
      function () {
         let hash = window.location.hash;
        router.redirect(`${hash}/${this.id}`);
    }
 ))
}
export const cancelOrder = () => {
  document.getElementById("cancel").
  addEventListener("click", ()=>{
    if (confirm("Չեղարկե՞լ պատվերը")){
      document.getElementById("basketCounter").innerHTML = 0;
    }
  })
}

export const basketPageEventListener = () => {
    let hash = window.location.hash;
  document.getElementById("shoppingIcon").addEventListener
  ("click", function () {
      router.redirect(`/basket`);
  })
}
export const pageBackEventListener = () => {
    document.querySelector(".navArrow").addEventListener
    ("click", function () {
        window.history.back();
    })
}
export const BackEventListener = () => {
    document.querySelector(".arrow").addEventListener
    ("click", function () {
        window.history.back();
    })
}

export const fiterSearchListener = () => {
  document.querySelector("#searchInput").addEventListener("keyup", function () {
    let filter = document.querySelector("#searchInput").value.toUpperCase();
    // console.log(filter);
    let li = document.querySelector(".filterItem").getElementsByTagName("li");
    let a;
    let txtValue;
    for (let i = 0; i < li.length; i++) {
      txtValue = li[i].innerText;
      console.log(txtValue);
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  })
}
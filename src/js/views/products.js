import {
  burgerPageEventListener,
  productsEventListeners
} from "../helpers/eventListeners";
import CONSTANTS from "../helpers/constants";
import {getCookie} from "../helpers/storage";
import {State} from "../model";

console.log(State);

const renderProductsPage = () => {
  document.querySelector(".container").innerHTML += ` <div class="containerProducts" >

                <div class="grid-container">
 
                </div>
        </div>`


  fetch(`${CONSTANTS.HOST}/product-type?url=get-all`)
    .then(function (response) {
      return response.json()
    }).then(function (data) {
      State.productTypes = data;
      let type = data.reduce((acc, current) => {
        return acc += `<div id="${current.id}" class="grid-item" data-product-type="${current.name}">${current.name}</div> `
      }, "");

      document.querySelector(".grid-container")
        .insertAdjacentHTML("beforeend", type);

      burgerPageEventListener();
      productsEventListeners(data);

    })

  console.log(getCookie("table"));
}

export {
  renderProductsPage
};

/*   <div id="hot_dishes" class="grid-item ">Տաք ուտեստ</div>

    <div id="snacks" class="grid-item " >Խորտիկներ</div>
    <div id="candies" class="grid-item " >Քաղցրավենիք</div>
    <div id="drinks" class="grid-item " >Ըմպելիք</div>
    <div id="pizzas" class="grid-item ">Պիցցաներ</div>
    <div id="salads" class="grid-item ">Աղցաններ</div>*/
import {basketPageEventListener, cancelOrder, productsEventListeners} from "../helpers/eventListeners";
const renderProductsPage=()=>{
  document.querySelector(".container").innerHTML
      += ` <div class="containerProducts" ><div class="grid-container">
    <div id="hot_dishes" class="grid-item ">Տաք ուտեստ</div>
    <div id="snacks" class="grid-item " >Խորտիկներ</div>
    <div id="candies" class="grid-item " >Քաղցրավենիք</div>
    <div id="drinks" class="grid-item " >Ըմպելիք</div>
    <div id="pizzas" class="grid-item ">Պիցցաներ</div>
    <div id="salads" class="grid-item ">Աղցաններ</div></div></div>`

  productsEventListeners();
  basketPageEventListener();
  cancelOrder();
};
export { renderProductsPage };
import {productsEventListeners} from "./helpers/eventListeners.js"
const renderProductsPage=()=>{
  const container= ` <div class="containerProducts" ><div class="grid-container"><div class="grid-item">Տաք ուտեստ</div>
    <div class="grid-item">Խորտիկներ</div>
    <div class="grid-item">Քաղցրավենիք</div>
    <div class="grid-item">Ըմպելիք</div>
    <div class="grid-item">Պիցցաներ</div>
    <div class="grid-item">Աղցաններ</div></div></div>`
    document.querySelector(".container").innerHTML = container;
    productsEventListeners();
};
export { renderProductsPage };
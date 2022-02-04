import constants from "../helpers/constants"
import {
  basketPageEventListener,
  cancelOrder,
  pageBackEventListener,
  specificProductEventListener, fiterSearchListener
 } from "../helpers/eventListeners";

const renderDetailedPage = (textValue) => {
 

  document.querySelector(".container").innerHTML +=
    ` <div class="containerMainDetaild"> <div class="containerDetaild">
      <div id="cheese" class="product">
      <div class="productImg">
        <img src="../img/cheesePizza.png" alt="cheesePizza">
      </div>
      <div class="productName">
        <h2 class="detailedProductName">Cheese Pizza</h2>
        <label for="">1pcs:</label>
        <label class="productPrice" for="">֏350</label>
      </div>
      <h2>Ingredients</h2>
      <ul class="ingredientsList">
        <li>Chees</li>
        <li>Tomato</li>
        <li>Pepper</li>
      </ul>
    </div>

  <div id="pepperoni" class="product">
    <div class="productImg">
      <img src="../img/pepperoniPizza.png" alt="cheesePizza">
    </div>
    <div class="productName">
      <h2 class="detailedProductName">Pepperoni Pizza</h2>
      <label for="">1pcs:</label>
      <label class="productPrice" for="">֏350</label>
    </div>
    <h2>Ingredients</h2>
    <ul class="ingredientsList">
      <li>Chees</li>
      <li>Tomato</li>
      <li>Pepper</li>
    </ul>
  </div>

 <div id="cheese_tomato" class="product">
    <div class="productImg">
      <img src="../img/cheeseTomatoPizza.png" alt="cheesePizza">
    </div>
    <div class="productName">
      <h2 class="detailedProductName">CheeseTomato Pizza</h2>
      <label for="">1pcs:</label>
      <label class="productPrice" for="">֏350</label>
    </div>
    <h2>Ingredients</h2>
    <ul class="ingredientsList">
      <li>Chees</li>
      <li>Tomato</li>
      <li>Pepper</li>
    </ul>
    </div>
  
</div>
    <!-- end products container -->

<div class="fiterContainer">
        <div class="filter">Filter</div>
        <!-- end filter button -->
        <div class="filterWindow hidden">
          <div class="filterInputBlock">
            <input type="text" id = "searchInput" class="searchIngredient" autocomplete="off" placeholder="Search for ingredients..">
            <!-- <h2 class="filterClose">X</h2> ??????????-->
          </div>

          <ul class="filterItem">
            <li>Chees</li>
            <li>Tomato</a></li>
            <li>Ketchup</li>
            <li>Mushroom</li>
            <li>Maiones</li>
          </ul>
        </div>
        <!-- end filter window -->
</div></div>`
  fiterSearchListener();
  pageBackEventListener();
  specificProductEventListener();
  basketPageEventListener();
  cancelOrder();
};
export {
  renderDetailedPage
};
import CONSTANTS from "../helpers/constants";
import {
  basketPageEventListener,
  cancelOrder,
  pageBackEventListener,
  specificProductEventListener,
  fiterSearchListener
} from "../helpers/eventListeners";

const renderDetailedPage = (productType) => {

  document.querySelector(".container").innerHTML += `
  <div class="containerMainDetaild">
    <div class="containerDetaild">


    </div>
    <!-- end products container -->

<div class="fiterContainer">
        <div class="filter">Filter</div>
        <!-- end filter button -->
        <div class="filterWindow hidden">
          <div class="filterInputBlock">
            <input type="text" id = "searchInput" class="searchIngredient" autocomplete="off" placeholder="Search for ingredients..">
          
          </div>

          <ul class="filterItem">
            
          </ul>
        </div>
        <!-- end filter window -->
</div></div>`

//ֆիլտրի մեջ հարցումի սկիզբ
fetch(`${CONSTANTS.HOST}/ingredient?url=get-all`)
.then(function(response){
  return response.json();
})
.then(function(data){
   console.log("result-----", data);
  let result = data.map(function(params, index){
    console.log("result-----", params);
    return `<li>${params.name}</li>`
          
  })
   document.querySelector(".filterItem").insertAdjacentHTML("beforeend", result.join(""));
})
//ֆիլտրի մեջ հարցումի վերջ

/*****************/

//առանձին պրոդուկտների տվյալների հարցումի սկիզբ
  fetch(`${CONSTANTS.HOST}/productType?url=get-all`)

    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      {
        // data = [{}{}{}]  ->>>>>>>>> [{id=2, name=juice}]
        let res = data.filter(function (params) {//{id=2,name=xort}
          return params.name == productType; // xortic==jucie
        })
        show(res);
      }
    })

  function show(product_type_id) {//[id=2,name-juice]

    fetch(`${CONSTANTS.HOST}/product?url=get-all-by-product-type&product_type_id=${product_type_id[0].id}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log("jusi data >>>>>", product_type_id[0].id);
        let result = data.map(function (params, index, data) {
          // let ingredientsCount = Object.values(params.ingredients).length;
          // console.log("dataindex--", Object.values(params.ingredients).length);
          console.log("**************************", params.ingredients);
          if (!params.ingredients) {
            document.querySelector(".ingredientsList").classList.add("hidden");
          }
          return `<div id="${params.id}" class="product">
          <div class="productImg">
            <img src="${params.imagePath}" alt="cheesePizza">
          </div>
          <div class="productName">
            <h2 class="detailedProductName">${params.name}</h2>
            <label for="">1pcs:</label>
            <label class="productPrice" for="">${params.currency}${params.price}</label>
          </div>
          <h2>Ingredients</h2>
          <ul class="ingredientsList">
            <li>${params.ingredients[0].name}</li>
            <li>${params.ingredients[1].name}</li>
            <li>${params.ingredients[2].name}</li>
          </ul>
        </div>`

        });
        document.querySelector(".containerDetaild").insertAdjacentHTML("beforeend", result.join(""));

        fiterSearchListener();
        pageBackEventListener();
        specificProductEventListener();
        basketPageEventListener();
        cancelOrder();
      });
  }
//առանձին պրոդուկտների տվյալների հարցումի վերջ




};

export {
  renderDetailedPage
};


//       <div id="2" class="product">
//       <div class="productImg">
//         <img src="../img/cheesePizza.png" alt="cheesePizza">
//       </div>
//       <div class="productName">
//         <h2 class="detailedProductName">Cheese Pizza</h2>
//         <label for="">1pcs:</label>
//         <label class="productPrice" for="">֏350</label>
//       </div>
//       <h2>Ingredients</h2>
//       <ul class="ingredientsList">
//         <li>Chees</li>
//         <li>Tomato</li>
//         <li>Pepper</li>
//       </ul>
//     </div>

//   <div id="1" class="product">
//     <div class="productImg">
//       <img src="../img/pepperoniPizza.png" alt="cheesePizza">
//     </div>
//     <div class="productName">
//       <h2 class="detailedProductName">Pepperoni Pizza</h2>
//       <label for="">1pcs:</label>
//       <label class="productPrice" for="">֏350</label>
//     </div>
//     <h2>Ingredients</h2>
//     <ul class="ingredientsList">
//       <li>Chees</li>
//       <li>Tomato</li>
//       <li>Pepper</li>
//     </ul>
//   </div>

//  <div id="3" class="product">
//     <div class="productImg">
//       <img src="../img/cheeseTomatoPizza.png" alt="cheesePizza">
//     </div>
//     <div class="productName">
//       <h2 class="detailedProductName">CheeseTomato Pizza</h2>
//       <label for="">1pcs:</label>
//       <label class="productPrice" for="">֏350</label>
//     </div>
//     <h2>Ingredients</h2>
//     <ul class="ingredientsList">
//       <li>Chees</li>
//       <li>Tomato</li>
//       <li>Pepper</li>
//     </ul>
//     </div>
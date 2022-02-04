import {
  basketPageEventListener,
  cancelOrder,
  pageBackEventListener,
  productsEventListeners
} from "../helpers/eventListeners";
const renderProductsPage=()=>{
  document.querySelector(".container").innerHTML
      += ` <div class="containerProducts" >
                <div class="grid-container">
 
                </div>
        </div>`

fetch("http://localhost:8080/productType?url=get-all")
    .then(function(response){
      return response.json()
    }).then(function(data){
  let type = data.reduce((acc,current) => {
    return acc += `<div id="${current.name}" class="grid-item">${current.name}</div> `
  }, "");

  document.querySelector(".grid-container")
      .insertAdjacentHTML("beforeend", type);
      basketPageEventListener();
      cancelOrder();
      pageBackEventListener();
      productsEventListeners();
    })


  
 

}

export { renderProductsPage };

/*   <div id="hot_dishes" class="grid-item ">Տաք ուտեստ</div>

    <div id="snacks" class="grid-item " >Խորտիկներ</div>
    <div id="candies" class="grid-item " >Քաղցրավենիք</div>
    <div id="drinks" class="grid-item " >Ըմպելիք</div>
    <div id="pizzas" class="grid-item ">Պիցցաներ</div>
    <div id="salads" class="grid-item ">Աղցաններ</div>*/
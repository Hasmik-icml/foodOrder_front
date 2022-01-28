
import {basketPageEventListener, cancelOrder} from "../helpers/eventListeners";
const renderSpecificProductPage = (tableNumber) => {
    document.querySelector(".container").innerHTML += ` <div id="mainContainer">
    <div class="gridContainer">
        <div class="item1">
            <h3>Պեպպերոնի</h3>
        </div>
        <div class="item2">
            <div class="pizza-img">
                <img class="spcProductImg" src="../img/pepperoniPizza.png" alt="pepperoniPizza">
            </div>
            <div class="price">
                <label>Գին՝ ֏</label>
                <label class="productPrice">350</label>
            </div>
        </div>
        <div class="item3">
             <h4>Բաղադրություն</h4>
            <div class="ingredientsOfProduct">
             <label for="ingredient1"> Պանիր </label>
            <label for="ingredient2"> Երշիկ </label>
            <label for="ingredient3"> Լոլիկ </label>
             <label for="ingredient4"> <input type="checkbox" id="checkbox1" name="ingredient4" value="onion">
             Սոխ </label>
            
            </div>
             <h4>Քանակ</h4>
            <div class="numberOfProduct">
                <div class="quantityOfProduct"> 
                <label>Կտոր</label>
                 <button id="subtract">-</button>
                <input type="text" id="quantity" value="0" name="quantity">
                <button id="add">+</button> 
                 </div>
                 <div class="totalPriceDiv">
                  <label>Ընդհանուր գին</label>
                <input type="text" id="totalPrice" value="0" name="quantity">
                </div>
               
            </div>
            <button id="addToBasket">Ավելացնել զամբյուղ</button>
        </div>

         </div>
    </div>
    `;
    let quantity = document.getElementById("quantity");
    let initialPrice = document.querySelector(".productPrice").innerHTML;
    let totalPrice = document.getElementById("totalPrice");
    document.getElementById("add").addEventListener("click", ()=>{
        quantity.value++;
        totalPrice.value = initialPrice * quantity.value; // si pongo el numero, no cambia auto..
    });
    document.getElementById("subtract").addEventListener("click", ()=>{
        if(quantity.value>0)
        {quantity.value--;
        totalPrice.value = initialPrice * quantity.value;
        }
    });

    document.getElementById("addToBasket").addEventListener("click", ()=>{
        document.getElementById("basketCounter").innerHTML ++;
    });

    basketPageEventListener();
    cancelOrder();
};

export {renderSpecificProductPage};
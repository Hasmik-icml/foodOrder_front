const renderSpecificProductPage = () => {
    document.querySelector(".container").innerHTML = ` <div id="mainContainer">
 <nav>
    <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>

        <ul id="menu">
            <a href="#"><li>Սեղան</li></a>
            <a href="#"><li>About
                </li></a>
            <a href="#"><li>Info</li></a>
        </ul>
    </div>
</nav>
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
            <div class="ingredientsOfProduct">
            <h4>Բաղադրություն</h4>
            <input type="radio" id="ingredient1" name="ingredient1" value="cheese">
            <label for="ingredient1"> Պանիր </label><br>
            <input type="radio" id="ingredient2" name="ingredient2" value="pepperoni">
            <label for="ingredient2"> Երշիկ </label><br>
            <input type="radio" id="ingredient3" name="ingredient3" value="tomato"> 
            <label for="ingredient3"> Լոլիկ </label>
            </div>
            <div class="numberOfProduct">
                <h4>Քանակ</h4>
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
            <button class="addToBasket">Ավելացնել զամբյուղ</button>
        </div>

         </div>
    </div>
    `;
    let quantity = document.getElementById("quantity");
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
    let initialPrice = document.querySelector(".productPrice").innerHTML;
    let totalPrice = document.getElementById("totalPrice");

};

export {renderSpecificProductPage};
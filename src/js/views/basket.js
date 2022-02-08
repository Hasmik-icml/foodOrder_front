import {BackEventListener, burgerPageEventListener} from "../helpers/eventListeners";
import {State} from "../model";
const renderBasketPage = () => {
    let sum = State.basket.reduce((a,b) => +a.totalPrice + +b.totalPrice);
    document.querySelector(".container").innerHTML =
        `<div class="containerBasket"> <i class="arrow">🡄</i>
  
  
  <div class="total"><label>Ընդհանուր:</label> <label> ${sum} դր</label></div>
  <button class="confirmBtn">Հաստատել</button></div>`;

    console.log(State.basket);

        let orders =  State.basket.reduce((acc,current) => {
        return acc += `<div class="card">
            <div><img src=${current.img} width="70px" height="60px"/></div>
            <div><h5>${current.name}</h5></div>
            <div><label>Գին։</label> <label id=currentPrice>${current.price}</label></div>
            <div>
                <label>Քանակ։</label>
                <label class="minus">-</label>
                <label>${current.amount}</label>
                <label class="plus">+</label>
            </div>
            <div><label>Արժեք</label> <label>${current.totalPrice}</label></div>
            <div><h5 id="deleteProduct">X</h5></div>
        </div>`

    }, "");

    console.log(orders);
    // document.getElementById("deleteProduct").addEventListener("click", () =>
    //         State.basket.filter( item = > item.id != )
    // )

    document.querySelector(".containerBasket")
        .insertAdjacentHTML("afterbegin", orders);

    BackEventListener();
    burgerPageEventListener();
};

export {renderBasketPage};

/*
<div class="card">
    <div><img src="../img/pepperoniPizza.png" width="70px" height="60px"/></div>
    <div><h5>Պեպպերոնի</h5></div>
    <div><label>Գին։</label> <label>350դր</label></div>
    <div>
      <label>Քանակ։</label>
      <label class="minus">-</label>
      <label>5</label>
      <label class="plus">+</label>
    </div>
    <div><label>Արժեք</label> <label>700դր</label></div>
    <div><h5 class="deleteProduct">X</h5></div>
  </div>
  <div class="card">
    <div><img src="../img/cheesePizza.png" width="70px" height="60px" /></div>
    <div><h5>Իտալական</h5></div>
    <div><label>Գին։</label> <label>350դր</label></div>
    <div>
      <label>Քանակ։</label>
      <label class="minus">-</label>
      <label>5</label>
      <label class="plus">+</label>
    </div>

    <div><label>Արժեք</label> <label>700դր</label></div>
    <div><h5 class="deleteProduct">X</h5></div>
  </div>
  <div class="card">
    <div><img src="../img/cheeseTomatoPizza.png" width="70px" height="60px" /></div>
    <div><h5>Բուխարի</h5></div>
    <div><label>Գին։</label> <label>350դր</label></div>
    <div>
      <label>Քանակ։</label>
      <label class="minus">-</label>
      <label>5</label>
      <label class="plus">+</label>
    </div>

    <div><label>Արժեք</label> <label>700դր</label></div>
    <div><h5 class="deleteProduct">X</h5></div>
  </div>


  */
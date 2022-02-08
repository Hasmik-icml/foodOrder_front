import {BackEventListener, burgerPageEventListener} from "../helpers/eventListeners";
import {State} from "../model";
import {logPlugin} from "@babel/preset-env/lib/debug";
import router from "../routing";

const renderBasketPage = () => {
    let sum;
    if (State.basket.length > 1){
    sum = State.basket.reduce((a,b) => { return a + b.totalPrice}, 0)}
    else if ( State.basket.length === 1) {
        sum = State.basket[0].totalPrice;
    }
    else {
        sum = 0;
    }


    console.log("totalprice",sum);
    document.querySelector(".container").innerHTML +=
        `<div class="containerBasket"> 
  <div class="total"><label>Ընդհանուր:</label> <span> ${sum} </span></div>
  <button class="confirmBtn">Հաստատել</button></div>`;

        let orders =  State.basket.reduce((acc,current) => {
        return acc += `<div class="card" id = ${current.id}>
            <div><img class = "basketImg" src=${current.img} "/></div>
            <div><h5>${current.name}</h5></div>
            <div><label>Գին։</label> <label id=currentPrice>${current.price}</label></div>
            <div>
                <label>Քանակ։</label>
                <label class="minus">-</label>
                <label id="amount">${current.amount}</label>
                <label class="plus">+</label>
            </div>
            <div><label>Արժեք</label> <label class ="totalPricetoDelete">${current.amount*current.price}</label></div>
            <div><h5 id=${current.id} class="deleteProduct">X</h5></div>
        </div>`

    }, "");


    document.querySelector(".containerBasket")
        .insertAdjacentHTML("afterbegin", orders);


    document.querySelectorAll(".deleteProduct").forEach(item =>
        item.addEventListener("click", (event) => {
            console.log( "id ", event.target.id);
           let forDelete = event.target.parentElement.parentElement;
           // console.log( "sumic piti haninq ", forDelete.getElementsByClassName("totalPricetoDelete"));
           // console.log(forDelete);
           // console.log(forDelete.getAttribute("id"));
            let found = State.basket.find(item => item.id == event.target.id);

            State.basket = State.basket.filter( item => {
              return  item.id != event.target.id;
                }
            )


            let node = forDelete;
            if (node.parentNode) {
                node.parentNode.removeChild(node);
            }

           let changedSum = Number(document.querySelector(".total span").textContent);
            changedSum -= found.totalPrice;
            document.querySelector(".total span").textContent = changedSum;
            document.getElementById("basketCounter").innerHTML--;

        }
    ));
    console.log("deletet basket ", State.basket);

    //BackEventListener();
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
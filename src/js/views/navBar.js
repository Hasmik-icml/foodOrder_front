import {
    basketPageEventListener,
    cancelOrder,
    pageBackEventListener,
    productsEventListeners
} from "../helpers/eventListeners";
import {getCookie} from "../helpers/storage";
const renderBurgerPage = () => {
    document.querySelector(".container").innerHTML =
        `<i class="navArrow">🡄</i> 
 <nav>
    <div id="menuToggle">
        <input class="checkboxMenu" type="checkbox"/>
        <span class="xspan"></span>
        <span class="xspan"></span>
        <span class="xspan"></span>

        <ul id="menu">
            <li id="tableNumber"> Սեղան <span class="tableNum">${getCookie("table")}</span></li>
            <li><a id="basket"> <img id="shoppingIcon" src="./img/shopping-cart-icon.png" alt="image">
                <span id="basketCounter">0</span></a>
            </li>
            <li id="cancel">Չեղարկել</li>
        </ul>
    </div>
 </nav>`

    productsEventListeners();
    basketPageEventListener();
    cancelOrder();
    pageBackEventListener();

}
export {renderBurgerPage};
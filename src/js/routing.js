import Router from "./lib/router";

import {renderProductsPage} from "./views/products";
import {renderRegisterPage} from "./views/register";
import {renderBurgerPage} from "./views/navBar";
import {getCookie} from "./helpers/storage";
import {renderSpecificProductPage} from "./views/specificProduct";
import {renderDetailedPage} from "./views/detaild";
import {renderBasketPage} from "./views/basket";

let router = new Router();

router.addRoute("/", function () {
    renderRegisterPage();
});

//router.redirect('/');
router.addRoute("/basket", function () {
    // renderBurgerPage();
    renderBasketPage();
});

router.addRoute("/products", function () {
    renderBurgerPage();
    renderProductsPage();


});

router.addRoute("/products/:params", function () {
    renderBurgerPage();
    renderDetailedPage();
});

router.addRoute("/products/:params/:items", function () {
    renderBurgerPage();
    renderSpecificProductPage();
});


export default router;
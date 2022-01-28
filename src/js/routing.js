import Router from "./lib/router";

import {renderProductsPage} from "./views/products";
import {renderRegisterPage} from "./views/register";

let router = new Router();

router.addRoute("/", function () {
    renderRegisterPage();
});

//router.redirect('/');

router.addRoute("/products", function () {
   renderProductsPage();
});

router.addRoute("/menu/:product", function () {
    // ...
});

export default router;
"use strict";

import { Router } from "director";

export default function router(mainEl) {
    let onHomeRoute = () => {
        mainEl.textContent = "Home page.";
        console.log("route: home");
    };

    let onAddPlaceRoute = () => {
        mainEl.textContent = "Add a Place.";
        console.log("route: add-place");
    };

    let routes = {
        "/": onHomeRoute,
        "/add-place": onAddPlaceRoute
    };

    let _router = new Router(routes);
    _router.init("/");
}

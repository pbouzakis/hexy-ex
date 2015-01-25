"use strict";

import { Router } from "director";
import React from "react";
import Shell from "./react/Shell";

export default function router(mainEl) {
    let renderUI = (page) => {
        return () => React.render(<Shell title="Hexy" page={page} />, mainEl);
    };

    let onHomeRoute = renderUI("home");

    let onAddPlaceRoute = renderUI("add-place");

    let routes = {
        "/": onHomeRoute,
        "/add-place": onAddPlaceRoute
    };

    let _router = new Router(routes);
    _router.init("/");
}

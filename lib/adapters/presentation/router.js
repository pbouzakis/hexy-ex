"use strict";

import { Router } from "director";
import React from "react";
import Shell from "./react/Shell";

export default function router(mainEl) {
    let renderUI = (page) => {
        return () => React.render(<Shell title="Places To Eat" page={page} />, mainEl);
    };

    let routes = {
        "/": renderUI("home"),
        "/add-place": renderUI("add-place"),
        "/list-places": renderUI("list-places")
    };

    let _router = new Router(routes);
    _router.init("/");
}

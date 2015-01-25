"use strict";

require("6to5/polyfill");
require("bootstrap");
 
import router from "./adapters/presentation/router";

router(document.getElementById("main"));

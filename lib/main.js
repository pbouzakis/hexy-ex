"use strict";

require("6to5/polyfill");
require("bootstrap");
 
import router from "./adapters/presentation/router";
import inMemoryPlacesRepo from "./adapters/storage/memory/placesRepo";

import domain from "application/domain";

domain.inject({
    placesRepo: inMemoryPlacesRepo()
});

router(document.getElementById("main"));

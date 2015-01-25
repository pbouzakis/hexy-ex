"use strict";

import placeToEat from "../domain/placeToEat";

// First implementation always return the same in memory hardcoded place :)
function selectAPlaceToEat() {
    return () => placeToEat({ id: 123, name: "My House", cuisine: "Bouzakis" });
};

// Enums. // Maybe move to their own module.
selectAPlaceToEat.RANDOM = "random";
selectAPlaceToEat.POPULAR = "popular";
selectAPlaceToEat.CUISINE = "cuisine";

export default selectAPlaceToEat;

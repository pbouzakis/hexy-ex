"use strict";

import placeToEat from "application/domain/placeToEat";

export default function inMemoryPlacesRepo() {
    let places = [
        placeToEat({ id: 100, name: "Thai House", cuisine: "Thai" }),
        placeToEat({ id: 101, name: "Pizza Plus", cuisine: "American" }),
        placeToEat({ id: 102, name: "Mura Sushi", cuisine: "Japanese" })
    ];

    let fetchAll = () => places;

    let findById = (id) => {
        let _place;
        places.some((place) => {
            if (place.id === id) {
                _place = place;
                return true;
            }
        });

        return _place;
    };

    let fetchRandom = () => {
        let min = 0;
        let max = places.length;

        let idx = Math.floor(Math.random() * (max - min) + min);
        return places[idx];
    };

    return { fetchAll, findById, fetchRandom };
}

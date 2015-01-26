"use strict";

import React from "react";
import viewPlacesToEat from "application/actions/viewPlacesToEat";

export default React.createClass({
    getInitialState() {
        return { places: [] }
    },

    componentWillMount() {
        let view = viewPlacesToEat({ displayResults: this._update });
        view();
    },

    render() {
        let places = this.state.places;

        return (
            <div>
                <h2>Listings</h2>
                <ul>
                    { 
                        places.map((place) => <li key={place.id}>{place.name}</li>)
                    }
                </ul>
            </div>
        );
    },

    _update(places) {
        this.setState({ places });
    }
})

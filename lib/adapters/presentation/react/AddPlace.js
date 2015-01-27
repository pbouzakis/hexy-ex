"use strict";

import React from "react";
import addPlaceToEat from "application/actions/addPlaceToEat";

export default React.createClass({
    getInitialState() {
        return { placeAdded: null };
    },

    componentWillMount() {
        this.addPlace = addPlaceToEat(this._onPlaceAdded);
    },

    render() {
        return this.state.placeAdded ? this._renderAddedMessage()
                                     : this._renderForm();
    },

    _renderAddedMessage() {
        return (
            <div>
                <h3>Place Added: <b>{this.state.placeAdded.name}!</b></h3>
                <a href="#/list-places">View Full List of Places.</a>
            </div>
        );
    },

    _renderForm() {
        return (
            <div>
                <h3>Add a Place to Eat!</h3>
                <div className="form-group">
                    <label for="inp-place-name">Name</label>
                    <input ref="nameInput" type="text" className="form-control" id="inp-place-name" placeholder="Enter the name of the place." />
                </div>
                <div className="form-group">
                    <label for="inp-place-cuisine">Cuisine</label>
                    <input ref="cuisineInput" type="text" className="form-control" id="inp-place-cuisine" placeholder="Indian, Mexican, etc." />
                </div>
                <button type="submit" className="btn btn-default" onClick={this._addPlaceOnSubmit}>Add</button>
            </div>
        );
    },

    _addPlaceOnSubmit() {
        let name = this.refs.nameInput.getDOMNode().value;
        let cuisine = this.refs.cuisineInput.getDOMNode().value;
        
        this.addPlace({ name, cuisine});
    },

    _onPlaceAdded(placeAdded) {
        this.setState({ placeAdded });
    }
});


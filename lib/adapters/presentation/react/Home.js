"use strict";

import React from "react";
import selectAPlaceToEat from "../../../app/selectAPlaceToEat";

export default React.createClass({
    getInitialState() {
        return { place: null };
    },

    render() {
        let content = this._getContent();
        return (
            <div>
                <h2>Decision Time!</h2>

                {content}
            </div>
        );
    },

    _getContent() {
        let content;

        if (this.state.place) {
            content = this._renderPlace();

        } else {
            content = this._renderButtons();
        }

        return content;
    },

    _renderButtons() {
        return (
            <div className="buttons">
                <p>So what do we want to eat today?</p>

                <button className="btn btn-primary"
                        data-choice="random"
                        onClick={this._findSomethingOnClick}>Something random?</button>
                <button className="btn btn-default"
                        data-choice="popular"
                        onClick={this._findSomethingOnClick}>Something popular?</button>
                <button className="btn btn-default" 
                        data-choice="cuisine"
                        onClick={this._findSomethingOnClick}>In the mood for something?</button>
            </div>
        );
    },

    _renderPlace() {
        return (
            <div>
                <p>Looks like we are eating at <b>{this.state.place.name}.</b></p>
                <p>Is <b>{this.state.place.cuisine}</b> ok?</p>
            </div>
        );
    },

    _findSomethingOnClick(ev) {
        let select = selectAPlaceToEat();
        let choiceType = ev.target.dataset.choice;

        this.setState({ place: select(choiceType) }); // Forces another render.
    }
});

"use strict";

import React from "react";

export default React.createClass({
    render() {
        return (
            <div>
                <h2>Home Page</h2>
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

    _findSomethingOnClick(ev) {
        alert("Coming soon.");
        console.log(ev.target.dataset.choice);
    }
});

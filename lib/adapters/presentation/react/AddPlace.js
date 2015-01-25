"use strict";

import React from "react";

export default React.createClass({
    render() {
        return (
            <div>
              <h3>Add a Place to Eat!</h3>
              <div className="form-group">
                <label for="inp-place-name">Name</label>
                <input type="email" className="form-control" id="inp-place-name" placeholder="Enter the name of the place." />
              </div>
              <div className="form-group">
                <label for="inp-place-cuisine">Cuisine</label>
                <input type="password" className="form-control" id="inp-place-cuisine" placeholder="Indian, Mexican, etc." />
              </div>
              <button type="submit" className="btn btn-default" onClick={this._addPlaceOnSubmit}>Add</button>
            </div>
        );
    },

    _addPlaceOnSubmit() {
        alert("Add Place!");
    }
});


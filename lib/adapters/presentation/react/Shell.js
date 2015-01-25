"use strict";

import React from "react";
import Home from "./Home";
import AddPlace from "./AddPlace";

export default React.createClass({
    render() {
        let currentPage = this._renderPage();
        
        return (
            <div>
                <h1>{this.props.title}</h1>
                {currentPage}
            </div>
        );
    },

    _renderPage() {
        if (this.props.page === "home") {
            return <Home />;
        } else {
            return <AddPlace />;
        }
    }
});


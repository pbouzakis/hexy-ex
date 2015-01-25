"use strict";

import React from "react";
import Nav from "./Nav";
import Home from "./Home";
import AddPlace from "./AddPlace";

export default React.createClass({
    render() {
        let currentPage = this._renderPage();
        
        return (
            <div>
                <Nav active={this.props.page} />
                <div className="container">
                    <h1>{this.props.title}</h1>
                    {currentPage}
                </div>
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


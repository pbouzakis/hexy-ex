"use strict";

import React from "react";
import Nav from "./Nav";

// Pages
import Home from "./Home";
import AddPlace from "./AddPlace";
import ListPlaces from "./ListPlaces";

let pageMap = {
    "home": () => <Home />,
    "add-place": () => <AddPlace />,
    "list-places": () => <ListPlaces />
};

export default React.createClass({
    render() {
        let renderPage = pageMap[this.props.page];
        renderPage = renderPage || pageMap.home;
        
        let currentPage = renderPage();
        
        return (
            <div>
                <Nav active={this.props.page} />
                <div className="container">
                    <h1>{this.props.title}</h1>
                    {currentPage}
                </div>
            </div>
        );
    }
});


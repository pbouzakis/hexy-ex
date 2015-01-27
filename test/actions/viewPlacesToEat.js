"use strict";

import viewPlacesToEat from "application/actions/viewPlacesToEat";
import domain from "application/domain";
import inMemRepo from "../../lib/adapters/storage/memory/placesRepo";

describe("Application action: `viewAllPlaces`", () => {
    beforeEach(() => {
        domain.inject({ placesRepo: inMemRepo() });
        this.presenter = {
            displayResults: sinon.stub()
        };

        let viewPlaces = viewPlacesToEat(this.presenter);
        viewPlaces();
    });

    it("calls the presenter to display results.", () => { 
        this.presenter.displayResults.should.have.been.called;
    });
});

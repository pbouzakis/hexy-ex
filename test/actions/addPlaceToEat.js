"use strict";

import addPlaceToEat from "application/actions/addPlaceToEat";
import domain from "application/domain";
import inMemRepo from "../../lib/adapters/storage/memory/placesRepo";

describe("Application action: `addPlaceToEat`", () => {
    beforeEach(() => {
        this.repo = inMemRepo();
        domain.inject({ placesRepo: this.repo });
        sinon.spy(this.repo, "add");

        this.displaySuccess = sinon.stub();
        this.addPlace = addPlaceToEat(this.displaySuccess);
    });

    describe("when adding a place", () => {
        beforeEach(() => {
            this.addPlace({ name: "BareBurger", cuisine: "American" });
        });
        
        it("the repo add is called.", () => {
            this.repo.add.should.have.been.called;
        });

        it("display's success message on completion.", () => {
            this.displaySuccess.should.have.been.called;
        });
    });
});

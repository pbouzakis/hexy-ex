"use strict";

import placeToEat from "application/domain/placeToEat";

describe("Domain entity: A `placeToEat`", () => {
    beforeEach(() => {
        this.place = placeToEat({ 
            id: 1, 
            name: "Pizza House", 
            cuisine: "American" 
        });
    });

    it("is selectable.", () => {
        this.place.should.respondTo("select");
    });

    it("has a name.", () => {
        this.place.name.should.equal("Pizza House");
    });

    it("has a cuisine.", () => {
        this.place.cuisine.should.equal("American");
    });

    it("has never been selected.", () => {
        this.place.numOfTimesSelected.should.equal(0);
    });

    describe("when selected", () => {
        beforeEach(() => {
            this.place.select();
        });

        it("has been selected once", () => {
            this.place.numOfTimesSelected.should.equal(1);
        });

        describe("and when selected multiple times (say 3)", () => { // Why not, to be safe :)
            beforeEach(() => {
                this.place.select();
                this.place.select();
                this.place.select();
            });

            it("has been selected four times.", () => {
                this.place.numOfTimesSelected.should.equal(4);
            });
        });
    });
});

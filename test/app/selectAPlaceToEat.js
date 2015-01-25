"use strict";

import selectAPlaceToEat from "../../lib/app/selectAPlaceToEat";
let { RANDOM, POPULAR, CUISINE } = selectAPlaceToEat;

describe("Application action: `selectAPlaceToEat`", () => {
    beforeEach(() => {
        this.selectAPlaceToEat = selectAPlaceToEat();
    });

    describe("when asked for random place", () => {
        beforeEach(() => {
            this.place = this.selectAPlaceToEat(RANDOM);
        });

        it("retuns a place to eat.", () => { 
            expect(this.place).to.exist;
        });
    });

    describe("when asked for popular place", () => {
        beforeEach(() => {
            this.place = this.selectAPlaceToEat(POPULAR);
        });

        it("retuns a place to eat.", () => { 
            expect(this.place).to.exist;
        });
    });

    describe("when asked for a place by `mood` aka cuisine", () => {
        beforeEach(() => {
            this.place = this.selectAPlaceToEat(CUISINE);
        });

        it("retuns a place to eat.", () => { 
            expect(this.place).to.exist;
        });
    });
});

"use strict";

describe("Sanity check", () => {
    it("The world makes sense.", () => {
        "Hello World".should.equal("Hello World");
    });

    it("can use ES6 polyfill's like Object.assign.", () => {
        var o1 = { name: "Paul" };
        var o2 = { age: 18 }; // Yeah 18...
        Object.assign(o1, o2);

        o1.age.should.equal(o2.age);
    });
});

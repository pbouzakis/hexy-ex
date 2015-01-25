"use strict";

var assert = require("assert");

describe("Sanity check", () => {
    it("The world believes in math.", () => {
        assert(5 === 5, "Five is five, right?");
    });

    it("can use ES6 polyfill's like Object.assign.", () => {
        var o1 = { name: "Paul" };
        var o2 = { age: 18 }; // Yeah 18...
        Object.assign(o1, o2);

        assert(o1.age === o2.age, "Assigned failed.");
    });
});

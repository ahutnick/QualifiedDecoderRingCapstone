// Write your tests here!
const caesar = require("../src/caesar")["caesar"];
const expect = require("chai").expect;

describe("Caesar", () => {
    it("returns false with a zero shift", () => {
        const zero = caesar("Try this", 0);
        expect(zero).to.be.false;
    })

    it("returns false with a shift below -25", () => {
        const negTwentySix = caesar("Try this", -26);
        expect(negTwentySix).to.be.false;
    })

    it("returns false with a shift above 25", () => {
        const twentySix = caesar("Try This", 26);
        expect(twentySix).to.be.false;
    })
})

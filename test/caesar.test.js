// Write your tests here!
const caesar = require("../src/caesar")["caesar"];
const expect = require("chai").expect;

describe("Caesar", () => {
    it("returns false with a zero shift", () => {
        const zero = caesar("Try this", 0);
        expect(zero).to.be.false;
    });

    it("returns false with a shift below -25", () => {
        const negTwentySix = caesar("Try this", -26);
        expect(negTwentySix).to.be.false;
    });

    it("returns false with a shift above 25", () => {
        const twentySix = caesar("Try This", 26);
        expect(twentySix).to.be.false;
    });

    it("wraps around the end of the alphabet", () => {
        const zShiftThree = caesar("z", 3);
        expect(zShiftThree).to.equal("c");
    });

    it("wraps around the beginning of the alphabet", () => {
        const aShiftThree = caesar("a", -3);
        expect(aShiftThree).to.equal("x");
    });

    it("works the same with capital and lowercase letters", () => {
        const upper = caesar("TRY THIS", 3);
        const lower = caesar("try this", 3);
        expect(upper).to.equal(lower);
    });
})

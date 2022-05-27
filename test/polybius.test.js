// Write your tests here!
const polybius = require("../src/polybius")["polybius"];
const expect = require("chai").expect;

describe("Polybius", () => {
    describe("Encrypt", () => {

    })

    describe("Decrpyt", () => {
        it("returns false when given an odd amount of numbers", () => {
            const odd = polybius("11 223", false);
            expect(odd).to.be.false;
        });

        it("has proper alphabet assignment", () => {
            const alphabet = polybius("11213141511222324252132333435314243444541525354555", false);
            expect(alphabet).to.equal("abcdefghi/jklmnopqrstuvwxyz");
        });

        it("keeps spaces where they are", () => {
            const message = polybius("11 21 31 41 51", false);
            expect(message).to.equal("a b c d e");
        })


    })
})

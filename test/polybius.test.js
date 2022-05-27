// Write your tests here!
const polybius = require("../src/polybius")["polybius"];
const expect = require("chai").expect;

describe("Polybius", () => {
    describe("Encrypt", () => {
        it("has proper alphabet assignment", () => {
            const alphabet = polybius("abcdefghijklmnopqrstuvwxyz");
            expect(alphabet).to.equal("1121314151122232424252132333435314243444541525354555");
        });

        it("keeps spaces", () => {
            const message = polybius("ab cd e");
            expect(message).to.equal("1121 3141 51");
        });

        it("ignores capital letters", () => {
            const upper = polybius("TRY THIS");
            const lower = polybius("try this");
            expect(upper).to.equal(lower);
        })

    });

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
        });
    });
})

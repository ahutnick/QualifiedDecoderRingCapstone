// Write your tests here!
const substitution = require("../src/substitution")["substitution"];
const expect = require("chai").expect;

describe("Substitution", () => {
    it ("should return false if given an alphabet with less than 26 characters", () => {
        const tooFew = substitution("hi", "!@#$%^&*()");
        expect(tooFew).to.be.false;
    });

    it("should return false if given an alphabet with more than 26 characters", () => {
        const tooMany = substitution("hi", "mnbvcxzlkjhgfdsapoiuytrewq123");
        expect(tooMany).to.be.false;
    });

    it ("should return false if the characters in the alphabet are not unique", () => {
        const notUnique = substitution("hi", "zzyxwvutsrqponmlkjihgfedcb");
        expect(notUnique).to.be.false;
    });
})

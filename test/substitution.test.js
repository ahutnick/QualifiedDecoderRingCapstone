// Write your tests here!
const substitution = require("../src/substitution")["substitution"];
const expect = require("chai").expect;

describe("Substitution", () => {
    it("should return false if given an alphabet with less than 26 characters", () => {
        const tooFew = substitution("hi", "!@#$%^&*()");
        expect(tooFew).to.be.false;
    });

    it("should return false if given an alphabet with more than 26 characters", () => {
        const tooMany = substitution("hi", "mnbvcxzlkjhgfdsapoiuytrewq123");
        expect(tooMany).to.be.false;
    });

    it("should return false if the characters in the alphabet are not unique", () => {
        const notUnique = substitution("hi", "zzyxwvutsrqponmlkjihgfedcb");
        expect(notUnique).to.be.false;
    });

    it("should return false if the alphabet is missing", () => {
        const missing = substitution("hello");
        expect(missing).to.be.false;
    })

    it("should convert message to the included alphabet when encoding", () => {
        const encoded = substitution("hello", "zyxwvutsrqponmlkjihgfedcba");
        expect(encoded).to.equal("svool");
    })

    it("should convert message to the standard alphabet when decoding", () => {
        const decoded = substitution("svool", "zyxwvutsrqponmlkjihgfedcba", false);
        expect(decoded).to.equal("hello");
    })

    it("should leave spaces where they are", () => {
        const spaces = substitution("svool svool", "zyxwvutsrqponmlkjihgfedcba", false);
        expect(spaces).to.equal("hello hello");
    })

    it("should ignore capital letters", () => {
        const upper = substitution("HELLO HELLO", "zyxwvutsrqponmlkjihgfedcba");
        const lower = substitution("hello hello", "zyxwvutsrqponmlkjihgfedcba");
        expect(upper).to.equal(lower);
    });

    it("should include special characters", () => {
        const special = substitution("%$))@", "abcd$fg%ijk)mn@pqrstuvwxyz", false);
        expect(special).to.equal("hello");
    });
});

import { expect } from "chai";
import { countVowels, runLengthEncoding, isPaired } from "../../src/part2/part2";

describe("Assignment 1 Part 2", () => {
    describe("countVowels", () => {
        it("counts vowels", () => {
            expect(countVowels("This is SOME Text")).to.equal(5);
        });
    });
    

    describe("countVowels_empty", () => {
        it("counts vowels", () => {
            expect(countVowels("")).to.equal(0);
        });
    });
    describe("runLengthEncoding", () => {
        it("compresses a string", () => {
            expect(runLengthEncoding("aaaabbbccd")).to.equal("a4b3c2d");
        });
    });

    describe("runLengthEncoding_empty", () => {
        it("compresses a string", () => {
            expect(runLengthEncoding("")).to.equal("");
        });
    });

    describe("runLengthEncoding", () => {
        it("compresses a string", () => {
            expect(runLengthEncoding("abcdefg")).to.equal("abcdefg");
        });
    });

    describe("runLengthEncodingOhad", () => {
        it("compresses a string", () => {
            expect(runLengthEncoding("aaaabbbaaa")).to.equal("a4b3a3");
        });
    });

    describe("isPaired", () => {
        it("returns true for a string with paired parens", () => {
            expect(isPaired("([{}])")).to.be.true;
        });

        it("returns false when the parens are not paired", () => {
            expect(isPaired("(]")).to.be.false;
        });

        it("returns true for a string with paired parens", () => {
            expect(isPaired("")).to.be.true;
        });

        it("returns true for a string with paired parens", () => {
            expect(isPaired("(")).to.be.false;
        });

        it("returns true for a string with paired parens", () => {
            expect(isPaired("(")).to.be.false;
        });

        it("returns true for a string with paired parens", () => {
            expect(isPaired("({)}")).to.be.false;
        });
    });
});
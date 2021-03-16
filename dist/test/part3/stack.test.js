"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const S = require("../../src/part3/stack");
describe("Stack", () => {
    it("can push", () => {
        chai_1.expect(S.push(5)([])).to.deep.equal([[5], undefined]);
    });
    it("can pop", () => {
        chai_1.expect(S.pop([1])).to.deep.equal([[], 1]);
    });
    it("returns the expected result from the assignment example", () => {
        chai_1.expect(S.stackManip([4, 5, 6])).to.deep.equal([[20, 5, 6], undefined]);
    });
});
//# sourceMappingURL=stack.test.js.map
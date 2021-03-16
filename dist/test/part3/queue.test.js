"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const Q = require("../../src/part3/queue");
describe("Queue", () => {
    it("can enqueue", () => {
        chai_1.expect(Q.enqueue(5)([1, 2, 3])).to.deep.equal([[1, 2, 3, 5], undefined]);
    });
    it("can dequeue", () => {
        chai_1.expect(Q.dequeue([1, 2, 3])).to.deep.equal([[2, 3], 1]);
    });
    it("returns the expected result from the assignment example", () => {
        chai_1.expect(Q.queueManip([6, 7, 8])).to.deep.equal([[8, 12, 2], 7]);
    });
});
//# sourceMappingURL=queue.test.js.map
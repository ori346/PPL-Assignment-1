import { expect } from "chai";
import * as S from "../../src/part3/stack";
import {bind} from "../../src/part3/state"
import {push} from "../../src/part3/stack";
describe("Stack", () => {
    it("can push", () => {
        expect(S.push(5)([])).to.deep.equal([[5], undefined]);
    });

    it("can push", () => {
        expect(S.push(5)([])).to.deep.equal([[5], undefined]);
    });

    it("can pop", () => {
        expect(bind(S.push(5) , x=> S.push(3))([])).to.deep.equal([[3,5], undefined]);
    });

    it("can pop", () => {
        expect(S.pop([1])).to.deep.equal([[], 1]);
    });


    it("returns the expected result from the assignment example", () => {
        expect(S.stackManip([4, 5, 6])).to.deep.equal([[20, 5, 6], undefined]);
    });

    it("returns the expected result from the assignment example", () => {
        expect(S.stackManip([2])).to.deep.equal([[6], undefined]);
    });
});
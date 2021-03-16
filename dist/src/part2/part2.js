"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPaired = exports.runLengthEncoding = exports.countVowels = void 0;
const R = require("ramda");
const stringToArray = R.split("");
let vows = ['a', 'e', 'o', 'u', 'i', 'A', 'E', 'I', 'O', 'U'];
function isVow(char) {
    return vows.includes(char);
}
//const reducer: (elem:string , acc:number) => number = (elem:string , acc:number) => acc + isVow(elem);
/* Question 1 */
const countVowels = function (str) {
    let arr = stringToArray(str).filter(isVow);
    return arr.length;
};
exports.countVowels = countVowels;
console.log(exports.countVowels("abbaeoppo"));
/* Question 2 */
exports.runLengthEncoding = undefined;
/* Question 3 */
exports.isPaired = undefined;
//# sourceMappingURL=part2.js.map
import * as R from "ramda";
import {filter} from "ramda";

const stringToArray = R.split("");

/* Question 1 */
export const countVowels = function (str: string): number {
    let vows = ['a', 'e', 'o', 'u', 'i', 'A', 'E', 'I', 'O', 'U'];
    const isVow =(char: string): boolean => vows.includes(char);
    return stringToArray(str).filter(isVow).length;
};


type LetterCount = { letter: string, count: number }

const accumulateReversedLetterCounts = (input: string)
    : LetterCount[] => stringToArray(input).reduce((acc: LetterCount[], char: string): LetterCount[] => {
    const [lookBehind, ...rest] = acc;
    if (lookBehind && lookBehind.letter === char) {
        lookBehind.count = lookBehind.count + 1
        return [lookBehind, ...rest]
    } else {
        return [{letter: char, count: 1}, ...acc]
    }
}, [])
const letterCountToPhrase = (accumulatedPhrase: string, letterCount: LetterCount): string => {
    return `${accumulatedPhrase}${letterCount.letter}${letterCount.count > 1 ? letterCount.count : ''}`
}

const encode = (input: string): string => accumulateReversedLetterCounts(input).reduceRight(letterCountToPhrase, "")

const encodedStringToNumberCharGroups = (encoded: string, rx: RegExp): RegExpMatchArray => {
    const grouped = encoded.match(rx) || []
    return grouped
}

const accumulateDecodedString = (ungroup: RegExp) => (acc: string, group: string): string => {
    return acc.concat(
        group.replace(
            ungroup,
            (_: string, $1: string = '1', $2: string) => {
                return $2.repeat(+$1)
            })
    )
}


/* Question 2 */
export const runLengthEncoding = (input: string): string => accumulateReversedLetterCounts(input).reduceRight(letterCountToPhrase, "")

console.log(runLengthEncoding("aaabbbcccdee"))

const parentheses:string[] = ['{' ,'}' ,'[' ,']','(' ,')'];

const isOpen = (str:string):boolean => str === '(' || str ==='{' || str =='{';


const isParentheses = (str:string):boolean => parentheses.includes(str);

let isBalancedParenthesis = (str:string[]):boolean => {

    return !str.reduce((uptoPrevChar:number, thisChar:string) => {
        if(isOpen(thisChar) ) {
            return ++uptoPrevChar;
        } else if (thisChar === ')' || thisChar === '}' || thisChar === ']') {
            return --uptoPrevChar;
        }

        return uptoPrevChar
    }, 0);
}

let mapOfpara = {
    '(': ')',
    '[': ']',
    '{': '}'
}

let isBalnce = (str:string[] , last:string , index :number):boolean=>{
    if (index === str.length)
        return true;
    if (isOpen(str[index]))
        return isBalnce(str ,str[index],++index);
    // @ts-ignore
    if (mapOfpara[last] !==str[index])
        return false;
    return isBalnce(str ,last ,index++);

}

interface DependData {
    [key: string]: string;
}

let isParenthesisMatching = (str:string[]):boolean => {
    let stack:string[] = [];

    let open:{[key:string]:string} = {
        '{': '}',
        '[': ']',
        '(': ')'
    };

    let closed:{[key:string]:boolean}  = {
        '}': true,
        ']': true,
        ')': true
    }

    for (let i = 0; i < str.length; i++) {

        let char:string = str[i];

        if (open[char]) {
            stack.push(char);
        } else if (closed[char]) {
            let x:string |undefined = stack.pop();
            if (typeof x === "undefined")
                return false
            else if (open[x] !== char) return false;
        }
    }
    return stack.length === 0;
}


/* Question 3 */
export const isPaired = function (str: string): boolean {
    //const arr:string[] = R.filter(isParentheses,stringToArray(str))
    let w:string[] = R.filter(isParentheses,stringToArray(str));
    return isParenthesisMatching(w);
};
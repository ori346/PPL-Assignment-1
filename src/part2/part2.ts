import * as R from "ramda";

const stringToArray = R.split("");

let vowels: { [key: string]: boolean } = {
    'a': true, 'e': true, 'o': true, 'u': true, 'i': true, 'A': true, 'E': true, 'I': true, 'O': true, 'U': true
}


/* Question 1 */
export const countVowels = function (str: string): number {
    return stringToArray(str).filter((char: string): boolean => vowels[char]).length;
};


type LetterCount = { letter: string, count: number }

const accumulateReversedLetterCounts = (input: string)
    : LetterCount[] => stringToArray(input).reduce((acc: LetterCount[], char: string): LetterCount[] => {
    const [lookBehind, ...rest] = acc;
    if (lookBehind !== undefined && lookBehind.letter === char) { //case the current letter === previous letter.
        lookBehind.count = lookBehind.count + 1
        return [lookBehind, ...rest]
    } else {
        return [{letter: char, count: 1}, ...acc] //case of empty array or different letter
    }
}, [])

const letterCountToPhrase = (accumulatedPhrase: string, letterCount: LetterCount): string => {
    return `${accumulatedPhrase}${letterCount.letter}${letterCount.count > 1 ? letterCount.count : ''}`
}

/* Question 2 */
export const runLengthEncoding = (input: string): string => accumulateReversedLetterCounts(input).reduceRight(letterCountToPhrase, "")
//because the accumulate return the letters in reverse order reduce the array in reverse order

let matching: { [key: string]: string } = {
    '{': '}',
    '[': ']',
    '(': ')'
};

let open: { [key: string]: boolean } = {
    '{': true,
    '[': true,
    '(': true
}

let isParentheses: { [key: string]: boolean } = {
    '{': true,
    '}': true,
    '[': true,
    ']': true,
    '(': true,
    ')': true
}



/* Question 3 */
export const isPaired = function (str: string): boolean {
    let w: string[] = R.filter((char:string):boolean => isParentheses[char], stringToArray(str));
    return w.reduce((acc: string[], char: string): string[] => {
        if (acc[0] === 'f') //case of failure
            return ['f']
        if (open[char])
            return [char,...acc] //add the open parentheses to the accumulator and return new accumulator
        let last = acc[0];
        if (last === undefined || matching[last] !== char)
            return ['f'] // case the
        return acc.slice(1);
    }, []).length === 0;
};

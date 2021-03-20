
export type State<S, A> = (initialState: S) => [S, A];

 let x:State<number, number> = (y:number) => [y, y];
 let [a,b] = x(2);
 console.log(a + " " + b); // => 2 2
 let [a1,a2] = x(1);
export const bind = <S, A, B>(state: State<S, A>, f: (x: A) => State<S, B>): State<S, B> => {
    const compose:State<S, B> = (initialState: S) => {
        const  [a,b] = state(initialState);
        const z = f(b);
        const [o,p] = z(initialState);
        return [o,p];
    };
    return compose;
}

const die:State<number, number> = initialState => {
    return [initialState, 1 + Math.floor(initialState)/12000 *6];
}
const rollTwoDice: State<number, [number, number]> =
    bind(die, die1 => bind(die, die2 => s => [s, [die1, die2]]));
const seed = 42;
const [newSeed, dice] = rollTwoDice(seed);
console.log(dice); // ==> [ 3, 6 ]





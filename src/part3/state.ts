
export type State<S, A> = (initialState: S) => [S, A];


export const bind = <S, A, B>(state: State<S, A>, f: (x: A) => State<S, B>): State<S, B> => {
    const compose:State<S, B> = (initialState: S) => {
        const  [a,b] = state(initialState);
        const z = f(b);
        return z(a);
    };
    return compose;
}








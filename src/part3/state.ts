export type State<S, A> = (initialState: S) => [S, A];


export const bind = <S, A, B>(state: State<S, A>, f: (x: A) => State<S, B>): State<S, B> => {
    return (initialState: S) => {
        const [a, b] = state(initialState);
        const z: State<S, B> = f(b);
        return z(a);
    };
}








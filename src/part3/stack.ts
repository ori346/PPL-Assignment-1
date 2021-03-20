import { State, bind } from "./state";

export type Stack = number[];

export const push = (x:number):State<Stack, undefined> => s => [[x].concat(s) , undefined] ;

export const pop:State<Stack, number> = s => [s.slice(1 ,s.length) ,s[0]];

export const stackManip:State<Stack, undefined> = bind(pop , x=> bind(push(x*x), y => bind(pop , z=> push(x+z))));
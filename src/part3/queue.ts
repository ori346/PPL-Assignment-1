import { State, bind } from "./state";

export type Queue = number[];

export const enqueue:(x:number)=>State<Queue, undefined> = (x) => q => [q.concat([x]) ,undefined];//bind(initialState => [initialState , x ] , x1 => x => [x.concat([x1]),undefined]) ;


export const dequeue:State<Queue, number> = (q: Queue) => [q.slice(1,q.length) , q[0]] ;


export const queueManip:State<Queue, number > = bind(bind(dequeue , x => bind(enqueue(2*x),y=> enqueue(x/3))), x => dequeue);


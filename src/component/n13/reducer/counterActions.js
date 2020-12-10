export const DECREMENT_COUNTER = "DECREMENT_COUNTER";
export const RESET_COUNTER = "RESET_COUNTER";
export const INCREMENT_COUNTER = "INCREMENT_COUNTER";

export function decrementCounter(number){
    return {type: DECREMENT_COUNTER, payload: number};
}

export function resetCounter(){
    return {type: RESET_COUNTER};
}

export function incrementCounter(number){
    return {type: INCREMENT_COUNTER, payload: number};
}

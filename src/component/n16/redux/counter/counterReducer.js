import {DECREMENT_COUNTER, INCREMENT_COUNTER, RESET_COUNTER} from "./counterActions";

export const initialCounterState = {
    counter: 0
};

export function counterReducer(state = initialCounterState, action) {
    switch (action.type) {
        case DECREMENT_COUNTER:
            return {...state, counter: Math.max(state.counter - action.payload, 0)};
        case RESET_COUNTER:
            return initialCounterState;
        case INCREMENT_COUNTER:
            return {...state, counter: state.counter + action.payload};
        default:
            return state;
    }
}

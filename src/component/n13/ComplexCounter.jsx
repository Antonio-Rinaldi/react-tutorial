import React, {useReducer} from "react";
import {counterReducer, initialCounterState} from "./reducer/counterReducer";
import {decrementCounter, incrementCounter, resetCounter} from "./reducer/counterActions";

export default function ComplexCounter() {

    const [{counter}, dispatch] = useReducer(counterReducer, initialCounterState);

    return (
        <div>
            <p>Counter - {counter}</p>
            <button onClick={dispatchDecrementCounterBy5}>Decrease by 5</button>
            <button onClick={dispatchDecrementCounter}>Decrease</button>
            <button onClick={dispatchResetCounter}>Reset</button>
            <button onClick={dispatchIncrementCounter}>Increment</button>
            <button onClick={dispatchIncrementCounterBy5}>Increment by 5</button>
        </div>
    )

    function dispatchDecrementCounterBy5() {
        return dispatch(decrementCounter(5));
    }

    function dispatchDecrementCounter() {
        return dispatch(decrementCounter(1));
    }

    function dispatchResetCounter() {
        return dispatch(resetCounter());
    }

    function dispatchIncrementCounter() {
        return dispatch(incrementCounter(1));
    }

    function dispatchIncrementCounterBy5() {
        return dispatch(incrementCounter(5));
    }
}

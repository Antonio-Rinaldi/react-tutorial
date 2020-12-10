import React, {useCallback, useMemo, useState} from "react";
import Counter from "./Counter";
import Button from "./Button";

export default function Parent() {

    console.log(`Rendered parent`);
    const initialCounter = 0;
    const [firstCounter, setFirstCounter] = useState(initialCounter);
    const [secondCounter, setSecondCounter] = useState(initialCounter);

    /*
        Every time Parent component is re-rendered, functions get re-created and passed to Button components.
        Since they are new functions, they don't have the same address in memory of old ones even if they are the same function.
        So even if Button is a memoized component, the shallow comparison of the function passed via props fails and button component gets re-rendered.
        Using useCallback hook, we always use the same version of the function, and avoid re-rendering of Button Component
    */
    const cachedIncrementFirst = useCallback(incrementFirst, []);
    const cachedIncrementSecond = useCallback(incrementSecond, []);

    /*
        Every time Parent component is re-rendered, functions get re-executed.
        Using useMemo we cache the return value of a function and stop executing the function
        unless one of the value contained in the dependency array changes.
    */
    const cachedFirstParity = useMemo(isEven, [firstCounter]);
    const cachedSecondParity = useMemo(isEvenPossible, [secondCounter]);

    return (
        <div>
            <Counter name="First Counter" counter={firstCounter} parity={cachedFirstParity}/>
            <Button name="First Button" increment={cachedIncrementFirst}/>
            <Counter name="Second Counter" counter={secondCounter} parity={cachedSecondParity}/>
            <Button name="Second Button" increment={cachedIncrementSecond}/>
        </div>
    );

    function incrementFirst() {
        setFirstCounter(prevState => prevState + 1);
    }

    function incrementSecond() {
        setSecondCounter(prevState => prevState + 1);
    }

    function isEven() {
        return firstCounter % 2 === 0 ? "Even" : "Odd";
    }

    function isEvenPossible() {
        [...Array(9999999)].forEach((empty, index) => index);
        return secondCounter % 2 === 0 ? "Even" : "Odd";
    }
}

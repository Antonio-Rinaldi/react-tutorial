import React, {useState} from "react";

export default function SimpleState() {

    const initialState = 0;
    const [state, setState] = useState(initialState);

    return (
        <>
            <h6>Simple State</h6>
            <p>Counter - {state}</p>
            <button onClick={() => setState(initialState)}>Reset State</button>
            <button onClick={() => setState(prevState => prevState + 1)}>Change State</button>
        </>
    )
}

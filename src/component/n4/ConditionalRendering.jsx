import React, {useState} from "react";

export default function ConditionalRendering() {

    const [condition, setCondition] = useState(true);

    return (
        <div>
            <h6>Different types of conditional rendering</h6>
            {condition ? <p>True</p> : <p>False</p>}
            <p>{condition ? "True" : "False"}</p>
            {condition && <p>True</p>}
            <p>{condition && "True"}</p>
            <button onClick={invertCondition}>Invert Condition</button>
        </div>
    );

    function invertCondition() {
        setCondition(prevState => !prevState);
    }
}

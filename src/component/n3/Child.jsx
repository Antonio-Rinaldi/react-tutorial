import React from "react";

export default function Child({noParameterHandler, parameterHandler}) {

    return (
        <div>
            <button onClick={noParameterHandler}>Execute function with no parameters from Parent</button>
            <button onClick={passParameterToParent}>Execute function from Parent with child parameter</button>
        </div>
    );

    function passParameterToParent() {
        parameterHandler("parameter");
    }
}

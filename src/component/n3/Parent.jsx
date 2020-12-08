import React from "react";
import Child from "./Child";

export default function Parent() {

    return (
        <div>
            <Child noParameterHandler={noParameterHandler} parameterHandler={parameterHandler}/>
        </div>
    );

    function noParameterHandler() {
        alert("Executed function coming from parent");
    }

    function parameterHandler(parameter) {
        alert(`Executed function coming from parent with parameter: '${parameter}' coming from child`);
    }
}

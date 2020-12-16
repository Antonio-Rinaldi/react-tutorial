import React from "react";
import FunctionalComponent from "./FunctionalComponent";
import ClassComponent from "./ClassComponent";

export default function N1() {
    return (
        <div>
            <h3>Class And Functional Components</h3>
            <ClassComponent property="Class Component">
                <p>Children Props</p>
            </ClassComponent>
            <FunctionalComponent property="Functional Component" a="ciao">
                <p>Children Props</p>
            </FunctionalComponent>
        </div>
    );
}

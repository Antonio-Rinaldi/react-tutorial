import React from "react";
import ContextConsumer from "./ContextConsumer";

export const SimpleContext = React.createContext("");
export const ObjectContext = React.createContext({});

export default function N10() {
    const simpleContextValue = "Simple Context";
    const objectContextValue = {objectContextValue: "Object Context"};

    return (
        <div>
            <h3>Context</h3>
            <SimpleContext.Provider value={simpleContextValue}>
                <ObjectContext.Provider value={objectContextValue}>
                    <ContextConsumer/>
                </ObjectContext.Provider>
            </SimpleContext.Provider>
        </div>
    );
}

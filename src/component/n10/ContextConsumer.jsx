import React, {useContext} from "react"
import {SimpleContext, ObjectContext} from "./N10";

export default function ContextConsumer() {

    const simpleContextValue = useContext(SimpleContext);
    const {objectContextValue} = useContext(ObjectContext);

    return (
        <div>
            <p>Simple Context Value - {simpleContextValue}</p>
            <p>Object Context Value - {objectContextValue}</p>
        </div>
    );
}

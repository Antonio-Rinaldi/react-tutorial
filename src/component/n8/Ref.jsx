import React, {useEffect, useRef} from "react";
import ForwardRef from "./ForwardRef";
import PropRef from "./PropRef";

export default function Ref() {

    const ref = useRef(null);
    const propRef = useRef(null);
    const forwardedRef = useRef(null);
    useEffect(changeRefInnerHTML, []);
    useEffect(changePropRefInnerHTML,[]);
    useEffect(changeForwardedRefInnerHTML,[]);

    return (
        <div>
            <h6>Ref</h6>
            <p ref={ref}>Error in creating ref</p>
            <PropRef propRef={propRef}/>
            <ForwardRef ref={forwardedRef}/>
        </div>
    );

    function changeRefInnerHTML() {
        ref.current.innerHTML = "Success in changing ref inner html";
    }

    function changePropRefInnerHTML() {
        propRef.current.innerHTML = "Success in changing prop ref inner html";
    }

    function changeForwardedRefInnerHTML() {
        forwardedRef.current.innerHTML = "Success in changing forwarded ref inner html";
    }
}

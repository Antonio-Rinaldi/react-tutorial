import React from "react";

export default function PropRef({propRef}) {
    return (
        <div>
            <h6>Prop Ref</h6>
            <p ref={propRef}>Error in passing ref via props</p>
        </div>
    );
}


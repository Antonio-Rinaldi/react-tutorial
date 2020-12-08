import React from "react";
import SideEffectOnRender from "./SideEffectOnRender";
import SideEffectOnce from "./SideEffectOnce";

export default function N6() {
    return (
        <div>
            <h3>Side Effects</h3>
            <SideEffectOnRender/>
            <SideEffectOnce/>
        </div>
    );
}

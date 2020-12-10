import React from "react";
import RegularStylesheet from "./RegularStylesheet";
import InlineCss from "./InlineCss";
import CssModule from "./CssModule";

export default function N7() {
    return (
        <div>
            <h3>Css and Styles</h3>
            <RegularStylesheet className="blue"/>
            <InlineCss/>
            <CssModule/>
        </div>
    );
}

import React from "react";

export default function InlineCss() {

    const inlineCss = {
        color: 'white',
        backgroundColor: 'black'
    }

    return (
        <div>
            <h6>Inline Css</h6>
            <p style={inlineCss}>Inline Css</p>
        </div>
    );
}

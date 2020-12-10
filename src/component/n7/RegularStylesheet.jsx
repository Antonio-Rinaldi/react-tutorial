import React from "react";
import "./styles.css";

//This type of css applies to all the children of this component
export default function RegularStylesheet({className = ''}) {
    return (
        <div>
            <h6>Regular Stylesheet</h6>
            <p className='red'>Css</p>
            <p className={`${className} yellow-background`}>Class from parent</p>
        </div>
    );
}

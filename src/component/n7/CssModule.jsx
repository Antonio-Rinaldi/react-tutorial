import React from "react";
import styles from "./styles.module.css"

//This type of css doesn't apply to the children of this component
export default function CssModule() {
    return (
        <div>
            <h6>Css Module</h6>
            <p className={`${styles.purple} ${styles.pinkBackground}`}>Css Module</p>
        </div>
    );
}

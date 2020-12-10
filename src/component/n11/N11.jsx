import React from "react";
import Portal from "./Portal";
import WandererComponent from "./WandererComponent";

//Don't forget to check public/index.html
export default function N11() {
    return (
        <div>
            <Portal divClassName="portal-root">
                <h3>Portals</h3>
                <WandererComponent/>
            </Portal>
        </div>
    );
}

import React from "react";
import {useScrollPositionPercent} from "./hook/useScrollPositionPercent";

export default function HookedComponent() {

    const scrollPositionPercent = useScrollPositionPercent();

    return (
        <div>
            <p>Percent is {scrollPositionPercent}%</p>
            <p>
                [{[...Array(scrollPositionPercent)].map(element => '|||')}]
            </p>
        </div>
    )
}

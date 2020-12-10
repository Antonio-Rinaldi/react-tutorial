import React, {useEffect, useState} from "react";

export default function SideEffectOnce() {

    const initialPosition = {x: 0, y: 0};
    const [position, setPosition] = useState(initialPosition);
    useEffect(changeMousePosition, []);

    return (
        <>
            <h6>One time side effect</h6>
            <p>Position - x: {position.x}, y: {position.y}</p>
        </>
    );

    function changeMousePosition() {
        window.addEventListener('mousemove', setMousePosition);
        return () => window.removeEventListener('mousemove', setMousePosition);
    }

    function setMousePosition(event) {
        setPosition({
            x: event.clientX,
            y: event.clientY
        });
    }
}

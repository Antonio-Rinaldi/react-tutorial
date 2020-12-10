import {useEffect, useState} from "react";

export function useScrollPositionPercent() {

    const [scrollPositionPercent, setScrollPositionPercent] = useState(0);
    useEffect(trackScrollPositionPercent, []);

    function trackScrollPositionPercent() {
        window.addEventListener('scroll', logScrollPositionPercent);
        return () => window.removeEventListener('scroll', logScrollPositionPercent);
    }

    function logScrollPositionPercent() {
        const scrollHeight = window.scrollY;
        const maxScrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        setScrollPositionPercent(Math.floor(scrollHeight / maxScrollHeight * 100));
    }

    return scrollPositionPercent;
}

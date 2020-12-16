import React, {useLayoutEffect, useState} from "react";
import Input from "./Input";

export default function SideEffectOnRender() {

    const [title, setTitle] = useState("Default Title");
    useLayoutEffect(changeTitle, [title]);

    return (
        <>
            <h6>Side Effect renders every time property changes</h6>
            <form>
                <p>Title: {title}</p>
                <Input label="Title" name="title" value={title} changeHandler={changeHandler}/>
            </form>
        </>
    )

    function changeHandler(event) {
        setTitle(event.target.value);
    }

    function changeTitle() {
        document.title = title
    }
}

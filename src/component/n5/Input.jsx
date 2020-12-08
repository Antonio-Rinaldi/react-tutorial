import React from "react";

export default function Input({label, name, value, changeHandler}) {

    return (
        <>
            <label>{label}</label>
            <input type="text" name={name} value={value} onChange={changeHandler}/>
        </>
    );
}

import React, {useState} from "react";

export default function ObjectState() {

    const initialState = {
        firstName: '',
        lastName: ''
    };
    const [state, setState] = useState(initialState);

    return (
        <>
            <h6>Object State</h6>
            <p>First Name - {state.firstName}, Last Name - {state.lastName}</p>
            <input
                type="text"
                name="firstName"
                value={state.firstName}
                onChange={setStateProperty}/>
            <input
                type="text"
                name="lastName"
                value={state.lastName}
                onChange={setStateProperty}/>
        </>
    )

    function setStateProperty(event) {
        setState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }
}



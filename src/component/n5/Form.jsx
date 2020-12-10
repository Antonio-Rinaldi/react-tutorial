import React, {useState} from "react";
import Input from "./Input";

export default function Form() {

    const initialUser = {username: '', password: ''};
    const [user, setUser] = useState(initialUser);

    return (
        <form onSubmit={submitHandler}>
            <Input label="Username" name="username" value={user.username} changeHandler={changeHandler}/>
            <Input label="Password" name="password" value={user.password} changeHandler={changeHandler}/>
            <button type="submit">Submit</button>
        </form>
    );

    function changeHandler(event) {
        console.log()
        setUser(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }

    function submitHandler(event) {
        alert(`Username: ${user.username}, Password: ${user.password}`);
        setUser(initialUser);
        event.preventDefault();
    }
}

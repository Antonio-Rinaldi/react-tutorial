import {useEffect, useReducer} from "react";
import {fetchUsersError, fetchUsersRequest, fetchUsersSuccess} from "../reducer/usersActions";
import {initialUsersState, usersReducer} from "../reducer/usersReducer";

export default function useFetchUsers() {

    const [state, dispatch] = useReducer(usersReducer, initialUsersState);
    useEffect(getUsers, []);
    return state;

    function getUsers() {
        dispatch(fetchUsersRequest());
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => dispatch(fetchUsersSuccess(users)))
            .catch(error => dispatch(fetchUsersError(error.message)));
    }
}

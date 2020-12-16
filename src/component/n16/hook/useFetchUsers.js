import {useSelector} from "react-redux";
import {useEffect} from "react";
import {stateSelector} from "../redux/stateSelector";
import {useActions} from "./useActions";

/*
    Using useSelector hook we can get the store's state and save it into an item.
    it takes as input a function of this type: [state => doSomething(state)]
 */
export function useFetchUsers() {

    const {users, error, isLoading} = useSelector(stateSelector);
    const {fetchUsers} = useActions();

    useEffect(fetchUsers, []);
    return {users, error, isLoading};
}


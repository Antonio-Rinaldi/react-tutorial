import {fetchUsers} from "../redux/user/userActions";
import {decrementCounter, incrementCounter, resetCounter} from "../redux/counter/counterActions";
import {useDispatch} from "react-redux";

/*
    Using useDispatch hook we can get the and then we put various actions into
    an object to have them ready for cleaner code
 */
export function useActions() {
    const dispatch = useDispatch();
    return {
        fetchUsers: () => dispatch(fetchUsers()),
        decrementCounterBy5: () => dispatch(decrementCounter(5)),
        decrementCounterBy1: () => dispatch(decrementCounter(1)),
        resetCounter: () => dispatch(resetCounter()),
        incrementCounterBy1: () => dispatch(incrementCounter(1)),
        incrementCounterBy5: () => dispatch(incrementCounter(5))
        // incrementCounter: number => dispatch(incrementCounter(number))
        // decrementCounter: number => dispatch(decrementCounter((number))
    }
}

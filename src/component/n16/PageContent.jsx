import React from "react";
import UserTable from "./UserTable";
import {stateSelector} from "./redux/stateSelector";
import {connect} from "react-redux";
import {useActions} from "./hook/useActions";

/*
        Using connect function we can map state from store directly to the component props.
        Connect method takes as input a function of the type: [(state, ownProps) => doSomething(state, ownProps)]
 */
export default connect(stateSelector)(function PageContent({users, counter}) {

        const {decrementCounterBy5, decrementCounterBy1, resetCounter, incrementCounterBy1, incrementCounterBy5} = useActions();
        return (
            <div>
                <p>Counter - {counter}</p>
                <button onClick={decrementCounterBy5}>Decrement Counter by 5</button>
                <button onClick={decrementCounterBy1}>Decrement Counter</button>
                <button onClick={resetCounter}>Reset Counter</button>
                <button onClick={incrementCounterBy1}>Increment Counter</button>
                <button onClick={incrementCounterBy5}>Increment Counter by 5</button>
                <UserTable users={users}/>
            </div>
        );
    }
)

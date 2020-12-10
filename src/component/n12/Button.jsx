import React from "react";

/*
    A memoized component get re-rendered only when there's difference in the shallow comparison of its props or state.
    That means a memoized component only gets re-rendered if there's a change in the references of its props or state.
 */
export default React.memo(function Button({name, increment}) {

        console.log(`Rendered button with name: '${name}'`);
        return (
            <>
                <button onClick={increment}>Increment {name}</button>
            </>
        );
    }
)
